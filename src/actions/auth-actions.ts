'use server';

import { envConfig } from "../config/env.config";
import { LikedMovies } from "../types/liked-movies.types";
import { MovieItem } from "../types/movie-categories.types";
import getNextCookie from "../utils/getNextCookie";

export const likeMovie = async (movie: MovieItem) => {
  const token = await getNextCookie('token');
  const response = await fetch(`${envConfig.DB_URL}/liked-movies`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });
  return await response.json();
}

export const unlikeMovie = async (movieId: string) => {
  const token = await getNextCookie('token');
  const response = await fetch(`${envConfig.DB_URL}/liked-movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token?.value}`
    }
  });
  return await response.json();
}

export const getLikedMovies = async () => {
  const token = await getNextCookie('token');
  const response = await fetch(`${envConfig.DB_URL}/liked-movies`, {
    headers: {
      Authorization: `Bearer ${token?.value}`
    }
  });
  if(!response.ok) {
    return [];
  }
  return (await response.json() as LikedMovies[]);
}