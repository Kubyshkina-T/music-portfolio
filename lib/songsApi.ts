import { supabase } from "./supabaseClient";

export type Song = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    covers_url: string;
    audio_url: string;
};

// export const getSongs = async (): Promise<Song[]> => {
//     const { data, error } = await supabase
//         .from("songs")
//         .select("*")
//         .order("id", { ascending: true });

//     if (error) {
//         throw new Error(error.message)
//     }
//     return data ?? [];
// }

export const getSongs = async (
  page: number
): Promise<{
  songs: Song[];
  totalPages: number;
}> => {
  const limit = 5;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await supabase
    .from("songs")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return {
    songs: data ?? [],
    totalPages: Math.ceil((count ?? 0) / limit),
  };
};