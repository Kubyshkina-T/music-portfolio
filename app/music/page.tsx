"use client";

import css from "@/app/music/music.module.css";
import Container from "@/components/Container/Container";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSongs } from "@/lib/songsApi";
import { ThreeDot } from "react-loading-indicators";
import SongList from "@/components/SongList/SongList";
import { useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import { useDebouncedCallback } from "use-debounce";
import SearchBox from "@/components/SearchBox/SearchBox";


export default function MusicPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);
    const handleSearch = useDebouncedCallback((value: string) => {
        setSearchQuery(value);
        setPage(1);
    }, 200);

    const { data, isLoading, error } = useQuery({
        queryKey: ["songs", page, searchQuery],
        queryFn: () => getSongs(page, searchQuery),
        placeholderData: keepPreviousData,
        refetchOnMount:false,
    });
    const songs = data?.songs ?? [];
    const totalPages = data?.totalPages ?? 0;
    const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);


    


    return(
 <main className={css.musicPage}>
                <Container>
     <section className={css.musicSection}>
                    <h1 className={css.titleMusicPage}>Playlist</h1>
                    <SearchBox text ={searchQuery} onSearch={handleSearch}/>
     {isLoading && (
    <div className={css.loaderWrapper}>
        <ThreeDot
          variant="bounce"
          color="#d397d5"
          size="small"
        />
                        </div>)}
                    {error && (<p>Error loading songs</p>)}
                    <ul className={css.musicList}>
                        {songs?.map((song, index) => (
                            <SongList
                                key={song.id}
                                song={song}
                                isActive={currentSongIndex === index}
                                onPlay={() => setCurrentSongIndex(index)}
                                onPause={() => setCurrentSongIndex(null)}
                                onNext={() => {
                                    if (index < songs.length - 1) {
                                        setCurrentSongIndex(index + 1);
                                    } else {
                                        setCurrentSongIndex(null);
                                }
                                }
                                }/>
                        ))}
                    </ul>
                      </section>
                      </Container>
                {totalPages > 1 && (
            <div className={css.paginationWrapper}>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          /></div>
        )}
        </main>
    )
}