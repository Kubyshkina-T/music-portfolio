import { supabase } from "./supabaseClient";

export type Song = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    covers_url: string;
    audio_url: string;
};

export const getSongs = async (): Promise<Song[]> => {
    const { data, error } = await supabase
        .from("songs")
        .select("*")
        .order("id", { ascending: true });

    if (error) {
        throw new Error(error.message)
    }
    return data ?? [];
}