'use client';

import { HeartSolid } from "iconoir-react";
import styles from '@/styles/shared/AddFavoriteButton.module.css'
import { likeMovie, unlikeMovie } from "@/src/actions/auth-actions";
import { MovieItem } from "@/src/types/movie-categories.types";
import { LikedMovies } from "@/src/types/liked-movies.types";
import { useAuthModal } from "@/src/state/auth-modal";

interface AddFavoriteButtonProps {
  movie: MovieItem;
  likedMovies?: LikedMovies[];
  auth: any;
}

export default function AddFavoriteButton({ movie, likedMovies, auth }: AddFavoriteButtonProps) {
  const {setShowAuthModal} = useAuthModal();
  const handleFavorite = (e) => {
    e.preventDefault();
    if(!auth) return setShowAuthModal(true);

    const likedMovie = likedMovies?.find((likedMovie) => likedMovie.id === movie.id);

    if(likedMovie) {
      unlikeMovie(likedMovie._id.toString()).then((data) => {
        console.log(data);
      });
    } else {
      likeMovie(movie).then((data) => {
        console.log(data);
      });
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