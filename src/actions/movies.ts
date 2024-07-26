'use server';

import { envConfig } from "../config/env.config";
import { MovieCategories } from "../types/enums/movie-categories.enum";
import { MovieCategoryResponde } from "../types/movie-categories.types";
import { Movie } from "../types/movie.type";

export const getAllMovies = async () => {
    const response = await fetch(`${envConfig.TMDB_API_URL}/movie/pupular?api_key=${envConfig.TMDB_API_KEY}`);
    const data = await response.json();   
    return data;
}

export const getMovieById = async (id: string) => {
  const response = await fetch(`${envConfig.TMDB_API_URL}/movie/${id}?api_key=${envConfig.TMDB_API_KEY}`);
  const data = await response.json();   
  return data as Movie;
}

export const getMoviesByCategory = async (category: MovieCategories) => {
  const response = await fetch(`${envConfig.TMDB_API_URL}/movie/${category}?api_key=${envConfig.TMDB_API_KEY}`);
  const data = await response.json();   
  return data as MovieCategoryResponde;
}