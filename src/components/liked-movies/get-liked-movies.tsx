import { getLikedMovies } from "@/src/actions/auth-actions"
import LikedMoviesClient from "./liked-movies-client";

export default async function GetLikedMovies(){
  const likedMovies = await getLikedMovies();
  return <LikedMoviesClient movies={likedMovies} />;
}