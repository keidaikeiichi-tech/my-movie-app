import { fetchMovieDetail } from "@/lib/tmdb";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MovieDetailPage({ params }: Props) {
  const { id } = await params;

  const movie = await fetchMovieDetail(id);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mt-4 rounded"
      />

      <p className="mt-4">公開日: {movie.release_date}</p>
      <p>評価: {movie.vote_average}</p>
      <p className="mt-4">{movie.overview}</p>
    </main>
  );
}
