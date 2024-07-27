import { getAuth } from "@/src/actions/auth";
import { getLikedMovies } from "@/src/actions/auth-actions";
import { getMovieById } from "@/src/actions/movies";
import GetLikedMovies from "@/src/components/liked-movies/get-liked-movies";
import MovieBanner from "@/src/components/movie-detail/movie-banner";
import MovieInfo from "@/src/components/movie-detail/movie-info";
import MovieRecommendations from "@/src/components/movie-detail/movie-recommendations";
import { Suspense } from "react";

interface MovieDetailPageProps {
  params: {
    id: string;
  }
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const movie = await getMovieById(params.id);
  const auth = await getAuth();
  return (
    <div>
      <MovieBanner movie={movie} auth={auth} />
      <Suspense fallback={null}>
        <MovieInfo movie={movie} />
      </Suspense>
      <Suspense fallback={null}>
        <MovieRecommendations movieId={params.id} /> 
      </Suspense>
    </div>
  );
}