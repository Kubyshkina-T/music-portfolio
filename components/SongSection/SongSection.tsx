"use client"

import { useQuery } from "@tanstack/react-query";
import { getSongs } from "@/lib/songsApi";
import SongCard from "@/components/SongCard/SongCart";
import css from "@/components/SongSection/SongSection.module.css"
import Container from "../Container/Container";
import { ThreeDot } from "react-loading-indicators";

export default function SongSection() {
    const { data: songs, isLoading, error } = useQuery({
        queryKey: ["songs"],
        queryFn: getSongs,
    });
    console.log(songs);
    if (isLoading) return  <section className={css.sectionSongs}>
    <div className={css.loaderWrapper}>
        <ThreeDot
          variant="bounce"
          color="#d397d5"
          size="small"
        />
      </div>
    </section>;
    if (error) return <p>Something went wrong...</p>;
    return (
        
        <section className={css.sectionSongs}>
            <Container>
            <h2 className={css.sectionSongsTitle}>Music</h2>
            <ul className={css.cardList}>
                {songs?.map((song) => (
                    <SongCard key={song.id} song={song} />
                ))}
            </ul>
            </Container>
        </section>
            
    );
}