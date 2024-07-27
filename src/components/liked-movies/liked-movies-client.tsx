'use client';

import { UnifiedMovieType, useLikedMovies } from "@/src/state/liked-movies-local";
import { LikedMovies } from "@/src/types/liked-movies.types";
import { useEffect } from "react";

interface LikedMoviesClientProps {
  movies: LikedMovies[];
}
export default function LikedMoviesClient({ movies }: LikedMoviesClientProps) {
  const { setLikedMovies } = useLikedMovies();
  useEffect(() => {
    setLikedMovies(movies as UnifiedMovieType[]);
  }, [movies]);
  return null;
}