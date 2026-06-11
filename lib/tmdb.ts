export async function fetchPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("人気映画の取得に失敗しました");
  }

  const data = await res.json();
  return data.results;
}
