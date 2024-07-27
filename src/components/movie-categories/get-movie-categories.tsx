import { getMoviesByCategory } from "@/src/actions/movies";
import { MovieCategories } from "@/src/types/enums/movie-categories.enum";
import styles from '@/styles/MovieItem.module.css';
import { FiltersSearchParamsTypes } from "@/src/types/filters-search-params.types";
import { getAuth } from "@/src/actions/auth";
import MovieList from "./movie-list";

interface GetMovieCategoriesProps {
  category: MovieCategories;
  searchParams: FiltersSearchParamsTypes;
}


export default async function GetMovieCategories({ category, searchParams }: GetMovieCategoriesProps) {
  const movieCategory = await getMoviesByCategory(category);
  const auth = await getAuth();
  
  const sortMovies = (movies: any[], criterion: string) => {
    switch (criterion) {
      case 'title-asc':
        return movies.sort((a, b) => a.title.localeCompare(b.title));
      case 'popularity-asc':
        return movies.sort((a, b) => a.popularity - b.popularity);
      case 'popularity-desc':
        return movies.sort((a, b) => b.popularity - a.popularity);
      case 'rating-asc':
        return movies.sort((a, b) => a.vote_average - b.vote_average);
      case 'rating-desc':
        return movies.sort((a, b) => b.vote_average - a.vote_average);
      case 'release-date-asc':
        return movies.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
      case 'release-date-desc':
        return movies.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
      default:
        return movies;
    }
  };

  const sortedMovies = sortMovies(movieCategory.results, searchParams.sort || 'categories');

  return (
    <div className={styles.movieContainer}>
      <MovieList sortedMovies={sortedMovies} auth={auth} />
    </div>
  );
}