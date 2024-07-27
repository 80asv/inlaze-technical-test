'use client';

import { useLikedMovies } from "@/src/state/liked-movies-local";
import { MovieItem as MovieItemType } from "@/src/types/movie-categories.types";
import { Auth } from "@/src/types/auth.types";
import MovieItem from '../home-page/movie-item';

interface MovieListProps {
  sortedMovies: MovieItemType[];
  auth: Auth | null;
}

export default function MovieList({ sortedMovies, auth }: MovieListProps){
  const { likedMovies } = useLikedMovies();
  return(
    <>
      {sortedMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} likedMovies={likedMovies} auth={auth}/>
      ))}
    </>
  )
}