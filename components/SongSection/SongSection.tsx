"use client"

import { useQuery } from "@tanstack/react-query";
import { getSongs } from "@/lib/songsApi";
import SongCard from "@/components/SongCard/SongCart";

export default function SongSection() {
    const { data: songs, isLoading, error } = useQuery({
        queryKey: ["songs"],
        queryFn: getSongs,
    });
    console.log(songs);
    if (isLoading) return <p>Loading songs...</p>;
    if (error) return <p>Something went wrong...</p>;
    return (
        <section>
            <h2>Music</h2>
            <ul>
                {songs?.map((song) => (
                    <SongCard key={song.id} song={song} />
                ))}
            </ul>
        </section>
    );
}