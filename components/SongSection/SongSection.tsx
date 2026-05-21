"use client"

import { useQuery } from "@tanstack/react-query";
import SongCard from "@/components/SongCard/SongCard";
import css from "@/components/SongSection/SongSection.module.css"
import Container from "../Container/Container";
import { ThreeDot } from "react-loading-indicators";
import { useState } from "react";
import ButtonLink from "../Button/Button";
import { getTopSongs } from "@/lib/songsApi";

export default function SongSection() {
    const [currentSongId, setCurrentSongId] = useState<number | null>(null);
    
    const { data, isLoading, error } = useQuery({
        queryKey: ["songs"],
        queryFn: ()=> getTopSongs(),
    });

    const songs = data ?? [];
  
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
            <h2 className={css.sectionSongsTitle}>Top Tracks</h2>
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
                <ButtonLink className={css.btnListenMore } href="/music">Listen More 🌸</ButtonLink>
            </Container>
        </section>
            
    );
}