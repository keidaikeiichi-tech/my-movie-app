type Movie = {
  id: number;
  title: string;
};

async function getMovies(): Promise<Movie[]> {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ja-JP`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();
  return data.results;
}

export default async function PostsPage() {
  const movies = await getMovies();

  return (
    <div>
      <h1>人気映画一覧（TMDB）</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
