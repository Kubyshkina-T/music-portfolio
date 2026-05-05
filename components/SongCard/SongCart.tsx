import type { Song } from "@/lib/songsApi";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import css from "@/components/SongCard/SongCart.module.css";

type Props = {
    song: Song;
};

export default function SongCard({ song }: Props) {
    return (
        <li className={css.card}>
            <Image className={css.cardImage} src={song.covers_url} alt={song.title} width={250} height={300}/>
            <h3 className={css.cardTitle}>{song.title}</h3>
            <p className={css.cardArtist}>{song.artist}</p>
            <p className={css.cardGenre}>{song.genre}</p>
            
            <AudioPlayer src={song.audio_url}
                preload="metadata"
                style={{ background: "#430a6eb7",
    color: "#ffffff",}}>
            </AudioPlayer>
            </li>
    )
}