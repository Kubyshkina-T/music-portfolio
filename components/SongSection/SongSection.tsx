"use client"

import { useQuery } from "@tanstack/react-query";
import { getSongs } from "@/lib/songsApi";
import SongCard from "@/components/SongCard/SongCart";
import css from "@/components/SongSection/SongSection.module.css"
import Container from "../Container/Container";
import { ThreeDot } from "react-loading-indicators";
import { useState } from "react";


export default function SongSection() {
    const [currentSongId, setCurrentSongId] = useState<number | null>(null);
    
    const { data, isLoading, error } = useQuery({
        queryKey: ["songs"],
        queryFn: ()=> getSongs(1, ""),
    });

    const songs = data?.songs ?? [];
  
    if (isLoading) return(
    <section className={css.sectionSongs}>
    <div className={css.loaderWrapper}>
        <ThreeDot
          variant="bounce"
          color="#d397d5"
          size="small"
        />
      </div>
    </section>);
    if (error) return <p>Something went wrong...</p>;
    return (
        <section className={css.sectionSongs}>
            <Container>
            <h2 className={css.sectionSongsTitle}>Music</h2>
           <div className={css.cardsWrapper}>
                <ul className={css.cardList}>
                {songs?.map((song) => (
                    <SongCard
                        key={song.id}
                        song={song}
                     currentSongId={currentSongId}
                setCurrentSongId={setCurrentSongId}/>
                ))}
                    </ul>
                    </div>
            </Container>
        </section>
            
    );
}