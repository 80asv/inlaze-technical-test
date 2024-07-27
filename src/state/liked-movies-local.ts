import { create } from 'zustand';
import { LikedMovies } from '../types/liked-movies.types';
import { Movie } from '../types/movie.type';
import { MovieItem } from '../types/movie-categories.types';

export type UnifiedMovieType = Movie & LikedMovies & MovieItem;

type LikedMoviesLocalState = {
  likedMovies: UnifiedMovieType[];
  setLikedMovies: (movies: UnifiedMovieType[]) => void;
  addLikedMovie: (movie: UnifiedMovieType) => void;
  removeLikedMovie: (movieId: string) => void;
};

export const useLikedMovies = create<LikedMoviesLocalState>((set) => ({
  likedMovies: [],
  setLikedMovies: (movies) => {
    set({ likedMovies: movies });
  },
  addLikedMovie: (movie) => {
    set((state) => ({
      likedMovies: [...state.likedMovies, movie],
    }));
  },
  removeLikedMovie: (movieId) => {
    set((state) => ({
      likedMovies: state.likedMovies.filter((movie) => movie.id.toString() !== movieId),
    }));
  }
}));
