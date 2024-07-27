'use server';

import { envConfig } from "../config/env.config";
import { MovieCredits } from "../types/credits.types";
import { MovieCategories } from "../types/enums/movie-categories.enum";
import { Genre } from "../types/genres.types";
import { MovieCategoryResponde } from "../types/movie-categories.types";
import { Movie } from "../types/movie.type";
import { MovieRecommendations } from "../types/recommendation.types";

export const getAllMovies = async () => {
  try {
    return Object.values(MovieCategories).map(async (category) => {
      const response = await fetch(`${envConfig.TMDB_API_URL}/movie/${category}?api_key=${envConfig.TMDB_API_KEY}`, {
        cache: 'force-cache',
        next: { revalidate: 60}
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();   
      return data as MovieCategoryResponde;
    });
  } catch (error) {
    console.error("Error fetching all movies:", error);
    throw error;
  }
}

export const getMovieById = async (id: string) => {
  try {
    const response = await fetch(`${envConfig.TMDB_API_URL}/movie/${id}?api_key=${envConfig.TMDB_API_KEY}`, {
      cache: 'force-cache',
      next: { revalidate: 60}
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();   
    return data as Movie;
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    throw error;
  }
}

export const getMoviesByCategory = async (category: MovieCategories) => {
  try {
    const response = await fetch(`${envConfig.TMDB_API_URL}/movie/${category}?api_key=${envConfig.TMDB_API_KEY}`, {
      cache: 'force-cache',
      next: { revalidate: 60}
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();   
    return data as MovieCategoryResponde;
  } catch (error) {
    console.error(`Error fetching movies for category ${category}:`, error);
    throw error;
  }
}

export const getGenres = async (type: 'movie' | 'tv') => {
  try {
    const response = await fetch(`${envConfig.TMDB_API_URL}/genre/${type}/list?api_key=${envConfig.TMDB_API_KEY}`, {
      cache: 'force-cache',
      next: { revalidate: 60}
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();   
    return data.genres as Genre[];
  } catch (error) {
    console.error(`Error fetching genres for ${type}:`, error);
    throw error;
  }
}

export const getMovieCredits = async (id: string) => {
  try {
    const response = await fetch(`${envConfig.TMDB_API_URL}/movie/${id}/credits?api_key=${envConfig.TMDB_API_KEY}`, {
      cache: 'force-cache',
      next: { revalidate: 60}
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();   
    return data as MovieCredits;
  } catch (error) {
    console.error(`Error fetching credits for movie with ID ${id}:`, error);
    throw error;
  }
}

export const getMovieRecommendations = async (movieId: string) => {
  try {
    const response = await fetch(`${envConfig.TMDB_API_URL}/movie/${movieId}/recommendations?api_key=${envConfig.TMDB_API_KEY}`, {
      cache: 'force-cache',
      next: { revalidate: 60}
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as MovieRecommendations;
  } catch (error) {
    console.error(`Error fetching recommendations for movie with ID ${movieId}:`, error);
    throw error;
  }
}