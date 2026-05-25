import type { Song } from "@/lib/songsApi";
import css from "@/components/SongList/SongList.module.css";

type Props = {
  song: Song;
  isActive: boolean;
  onPlay: () => void;
  onPause: () => void;
};

export default function SongList({ song, isActive, onPlay, onPause }: Props) {
  const togglePlay = () => {
    if (isActive) {
      onPause();
    } else {
      onPlay();
    }
  };

  return (
    <li className={css.musicList}>
      <button type="button" onClick={togglePlay} className={css.playButton}>
        {isActive ? "⏸" : "▶"}
      </button>
      <div className={css.songInfo}>
        <h3 className={css.songTitle}>{song.title}</h3>
        <p className={css.songArtist}>{song.artist}</p>
        <p className={css.songGenre}>{song.genre}</p>
      </div>
    </li>
  );
}
