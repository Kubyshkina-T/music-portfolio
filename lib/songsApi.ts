import { supabase } from "./supabaseClient";

export type Song = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    covers_url: string;
    audio_url: string;
};

export const getSongs = async (
  page: number,
  query: string
): Promise<{
  songs: Song[];
  totalPages: number;
}> => {
  const limit = 6;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

let request = supabase
    .from("songs")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("id", { ascending: true });
  
  if (query.trim() !== "") {
    request = request.or(
    `title.ilike.%${query}%,genre.ilike.%${query}%`
  );
  }
 const { data, count, error } = await request.range(from, to);
  if (error) {
    throw new Error(error.message);
  }

  return {
    songs: data ?? [],
    totalPages: Math.ceil((count ?? 0) / limit),
  };
};