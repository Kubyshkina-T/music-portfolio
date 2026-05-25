import type { Song } from "@/lib/songsApi";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import css from "./SongCard.module.css";
import { useRef, useEffect } from "react";

type Props = {
  song: Song;
  currentSongId: number | null;
  setCurrentSongId: (id: number | null) => void;
};

export default function SongCard({
  song,
  currentSongId,
  setCurrentSongId,
}: Props) {
  const playerRef = useRef<AudioPlayer>(null);
  useEffect(() => {
    const audio = playerRef.current?.audio.current;

    if (currentSongId !== song.id && audio) {
      audio.pause();
    }
  }, [currentSongId, song.id]);

  return (
    <li className={css.card}>
      <Image
        className={css.cardImage}
        src={song.covers_url}
        alt={song.title}
        width={250}
        height={300}
      />

      <h3 className={css.cardTitle}>{song.title}</h3>
      <p className={css.cardArtist}>{song.artist}</p>
      <p className={css.cardGenre}>{song.genre}</p>

      <AudioPlayer
        ref={playerRef}
        src={song.audio_url}
        preload="metadata"
        autoPlayAfterSrcChange={false}
        showJumpControls={false}
        onPlay={() => setCurrentSongId(song.id)}
        onPause={() => {
          if (currentSongId === song.id) {
            setCurrentSongId(null);
          }
        }}
        onSeeked={() => {
          const audio = playerRef.current?.audio.current;

          if (audio) {
            audio.play();
          }
        }}
      />
    </li>
  );
}
