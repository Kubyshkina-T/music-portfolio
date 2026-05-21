"use client";

import css from "@/app/music/music.module.css";
import Container from "@/components/Container/Container";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSongs } from "@/lib/songsApi";
import type { Song } from "@/lib/songsApi";
import { ThreeDot } from "react-loading-indicators";
import SongList from "@/components/SongList/SongList";
import { useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import { useDebouncedCallback } from "use-debounce";
import SearchBox from "@/components/SearchBox/SearchBox";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";


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
    const [currentSong, setCurrentSong] = useState<Song | null>(null);

const handleNextSong = () => {
  if (!currentSong) return;

  const currentIndex = songs.findIndex(
    (song) => song.id === currentSong.id
  );

  if (currentIndex < songs.length - 1) {
    setCurrentSong(songs[currentIndex + 1]);
  }
};

const handlePrevSong = () => {
  if (!currentSong) return;

  const currentIndex = songs.findIndex(
    (song) => song.id === currentSong.id
  );

  if (currentIndex > 0) {
    setCurrentSong(songs[currentIndex - 1]);
  }
};


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
                        {songs.map((song) => (
                            <SongList
                                key={song.id}
                                song={song}
                                isActive={currentSong?.id === song.id}
                                onPlay={() => setCurrentSong(song)}
                            onPause={()=>setCurrentSong(null)}/>
                        ))}
                    </ul>
                      </section>
            </Container>
  <div className={css.globalPlayer}>
    <div className={css.playerInfo}>
      <p className={css.playerTitle}>  {currentSong?.title || ""}</p>
      <p className={css.playerArtist}>  {currentSong?.artist || "Select a song to play"}</p>
    </div>

    <AudioPlayer
      src={currentSong?.audio_url || ""}
            autoPlay
            showSkipControls
            showJumpControls={false}
             onClickNext={handleNextSong}
  onClickPrevious={handlePrevSong}
      onEnded={handleNextSong}
    />
  </div>
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