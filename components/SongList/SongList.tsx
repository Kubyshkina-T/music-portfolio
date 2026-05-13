import type { Song } from "@/lib/songsApi";
import css from "@/components/SongList/SongList.module.css";
import { useEffect, useRef, useState } from "react";

type Props = {
    song: Song;
    isActive: boolean;
  onPlay: () => void;
  onNext: () => void;
};

export default function SongList({ song, onNext, isActive, onPlay }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            onPlay();
            // audioRef.current.play();
            // setIsPlaying(true);
        }
    };

    useEffect(() => {
  if (!audioRef.current) return;

  if (isActive && !isPlaying) {
    audioRef.current.play();
    setIsPlaying(true);
  }

  if (!isActive) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  }
}, [isActive]);

    return (
        <li className={css.musicList}>
             <button
        type="button"
        onClick={togglePlay}
        className={css.playButton}
      >
        {isPlaying ? "⏸" : "▶"}
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