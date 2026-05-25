"use client";

import { useQuery } from "@tanstack/react-query";
import { ThreeDot } from "react-loading-indicators";

import { getTopSongs } from "@/lib/songsApi";
import SongCard from "@/components/SongCard/SongCard";
import css from "@/components/SongSection/SongSection.module.css";
import Container from "../Container/Container";
import ButtonLink from "../Button/Button";
import { useState } from "react";

export default function SongSection() {
  const [currentSongId, setCurrentSongId] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["songs"],
    queryFn: getTopSongs,
  });

  const songs = data ?? [];

  if (isLoading) {
    return (
      <section className={css.sectionSongs}>
        <div className={css.loaderWrapper}>
          <ThreeDot variant="bounce" color="#d397d5" size="small" />
        </div>
      </section>
    );
  }

  if (error) return <p>Something went wrong...</p>;

  return (
    <section className={css.sectionSongs}>
      <div className={css.container}>
        <h2 className={css.sectionSongsTitle}>Top Tracks</h2>

        <ul className={css.cardList}>
          {songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              currentSongId={currentSongId}
              setCurrentSongId={setCurrentSongId}
            />
          ))}
        </ul>

        <ButtonLink className={css.btnListenMore} href="/music">
          Listen More 🌸
        </ButtonLink>
      </div>
    </section>
  );
}
