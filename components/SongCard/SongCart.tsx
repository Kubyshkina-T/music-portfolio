import type { Song } from "@/lib/songsApi";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import css from "@/components/SongCard/SongCart.module.css";
import { useEffect, useRef } from "react";
import { addSongPlay } from "@/lib/songsApi";


type Props = {
    song: Song;
    currentSongId: number | null;
  setCurrentSongId: (id: number | null) => void;
};

export default function SongCard({ song, currentSongId, setCurrentSongId }: Props) {

    const playerRef = useRef<AudioPlayer>(null);
    
    useEffect(() => {
      const audio = playerRef.current?.audio.current;
        if (currentSongId !== song.id && audio) {
          audio.pause();
          audio.currentTime = 0;
        }
    }, [currentSongId, song.id]);

    return (
        <li className={css.card}>
            <Image className={css.cardImage} src={song.covers_url} alt={song.title} width={250} height={300}/>
            <h3 className={css.cardTitle}>{song.title}</h3>
            <p className={css.cardArtist}>{song.artist}</p>
            <p className={css.cardGenre}>{song.genre}</p>
            
            <AudioPlayer
                 ref={playerRef}
                src={song.audio_url}
                preload="metadata"
                autoPlayAfterSrcChange={false}
         onPlay={async () => {
  setCurrentSongId(song.id);
  await addSongPlay(song);
}}
        onPause={() => {
          if (currentSongId === song.id) {
            setCurrentSongId(null);
          }
        }}
                style={{ background: "#430a6eb7",
    color: "#ffffff",}}>
            </AudioPlayer>
            </li>
    )
}