import { MovieItem } from "./movie-categories.types";

export interface LikedMovies extends MovieItem {
  _id: string;
  userId: string;
}