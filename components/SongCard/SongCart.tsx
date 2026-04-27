import type { Song } from "@/lib/songsApi";

type Props = {
    song: Song;
};

export default function SongCard({ song }: Props) {
    return (
        <li>
            <img src={song.covers_url} alt={song.title} />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
            
            <audio controls src={song.audio_url}>
                Your brouser does not support audio
            </audio>
        </li>
    )
}