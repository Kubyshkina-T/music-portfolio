import type { Song } from "@/lib/songsApi";
import css from "@/components/SongList/SongList.module.css";
import { useEffect, useRef, useState } from "react";

type Props = {
    song: Song;
    isActive: boolean;
    onPlay: () => void;
   onPause: () => void;
  onNext: () => void;
};

export default function SongList({ song, onNext, isActive, onPlay, onPause }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);


    const togglePlay = () => {
    if (isActive) {
      onPause();
    } else {
      onPlay();
    }
  };

    useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isActive) {
      void audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isActive]);

    return (
        <li className={css.musicList}>
             <button
        type="button"
        onClick={togglePlay}
        className={css.playButton}
      >
        {isActive? "⏸" : "▶"}
            </button>
            <div className={css.songInfo}>
                 <h3 className={css.songTitle}>{song.title}</h3>
            <p className={css.songArtist}>{song.artist}</p>
            <p className={css.songGenre}>{song.genre}</p>
            </div>
           
            <audio ref={audioRef} src={song.audio_url}  onEnded={onNext}/>
        </li>

    )
}