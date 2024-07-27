'use client';

import { HeartSolid } from "iconoir-react";
import styles from '@/styles/shared/AddFavoriteButton.module.css'
import { likeMovie, unlikeMovie } from "@/src/actions/auth-actions";
import { MovieItem } from "@/src/types/movie-categories.types";
import { useAuthModal } from "@/src/state/auth-modal";
import { UnifiedMovieType, useLikedMovies } from "@/src/state/liked-movies-local";
import { MouseEvent } from "react";
import { Movie } from "@/src/types/movie.type";

interface AddFavoriteButtonProps {
  movie: MovieItem | Movie;
  auth: any;
}

export default function AddFavoriteButton({ movie, auth }: AddFavoriteButtonProps) {
  const { likedMovies, addLikedMovie, removeLikedMovie } = useLikedMovies();

  const {setShowAuthModal} = useAuthModal();
  const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!auth) return setShowAuthModal(true);

    const likedMovie = likedMovies?.find((likedMovie) => likedMovie.id === movie.id);

    if(likedMovie) {
      removeLikedMovie(likedMovie.id.toString());
      unlikeMovie(likedMovie._id.toString());
    } else {
      addLikedMovie(movie as UnifiedMovieType);
      likeMovie(movie as MovieItem);
    }
  }


  return (
    <button onClick={handleFavorite} className={styles.button} style={{
      color: likedMovies?.some((likedMovie) => likedMovie.id === movie.id) ? 'red' : 'white'
    }}>
      <HeartSolid />
    </button>
  );
}