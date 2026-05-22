"use client";
import css from "@/app/music/music.module.css";
import Container from "@/components/Container/Container";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSongs } from "@/lib/songsApi";
import type { Song } from "@/lib/songsApi";
import { ThreeDot } from "react-loading-indicators";
import SongList from "@/components/SongList/SongList";
import { useState, useRef, useEffect } from "react";
import Pagination from "@/components/Pagination/Pagination";
import { useDebouncedCallback } from "use-debounce";
import SearchBox from "@/components/SearchBox/SearchBox";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MusicPage() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<AudioPlayer>(null);
  const handleSearch = useDebouncedCallback((value: string) => {
    setSearchQuery(value.trim().toLowerCase());
    setPage(1);
  }, 200);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    handleSearch(value);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["songs", page, searchQuery],
    queryFn: () => getSongs(page, searchQuery),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });
  const songs = data?.songs ?? [];
  const totalPages = data?.totalPages ?? 0;

  const handleNextSong = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (currentIndex < songs.length - 1) {
      setCurrentSong(songs[currentIndex + 1]);
    }
  };

  const handlePrevSong = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (currentIndex > 0) {
      setCurrentSong(songs[currentIndex - 1]);
    }
  };
  const handlePlaySong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePauseSong = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = playerRef.current?.audio.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong]);

  return (
    <main className={css.musicPage}>
      <Container>
        <section className={css.musicSection}>
          <h1 className={css.titleMusicPage}>Playlist</h1>
          <SearchBox text={inputValue} onSearch={handleInputChange} />
          {isLoading && (
            <div className={css.loaderWrapper}>
              <ThreeDot variant="bounce" color="#d397d5" size="small" />
            </div>
          )}
          {error && <p>Error loading songs</p>}
          <ul className={css.musicList}>
            {songs.map((song) => (
              <SongList
                key={song.id}
                song={song}
                isActive={currentSong?.id === song.id && isPlaying}
                onPlay={() => handlePlaySong(song)}
                onPause={handlePauseSong}
              />
            ))}
          </ul>
        </section>

        <div className={css.globalPlayer}>
          <div className={css.playerInfo}>
            <p className={css.playerTitle}> {currentSong?.title || ""}</p>
            <p className={css.playerArtist}>
              {" "}
              {currentSong?.artist || "Select a song to play"}
            </p>
          </div>

          <AudioPlayer
            ref={playerRef}
            src={currentSong?.audio_url || ""}
            autoPlay={!!currentSong}
            showSkipControls
            showJumpControls={false}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClickNext={handleNextSong}
            onClickPrevious={handlePrevSong}
            onEnded={handleNextSong}
          />
        </div>
      </Container>
      {totalPages > 1 && (
        <div className={css.paginationWrapper}>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </main>
  );
}
