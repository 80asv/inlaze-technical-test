import { getMoviesByCategory } from "@/src/actions/movies";
import { MovieCategories } from "@/src/types/enums/movie-categories.enum";
import styles from '@/styles/MovieItem.module.css';

import MovieItem from "../home-page/movie-item";
import { FiltersSearchParamsTypes } from "@/src/types/filters-search-params.types";

interface GetMovieCategoriesProps {
  category: MovieCategories;
  searchParams: FiltersSearchParamsTypes;
}


export default async function GetMovieCategories({ category, searchParams }: GetMovieCategoriesProps) {
  const movieCategory = await getMoviesByCategory(category);

  console.log({ movieCategory });
  
  const ordenarPeliculas = (peliculas: any[], criterio: string) => {
    // switch (criterio) {
    //   case 'title-asc':
    //     return peliculas.sort((a, b) => a.title.localeCompare(b.title));
    //   case 'popularity-asc':
    //     return peliculas.sort((a, b) => a.popularity - b.popularity);
    //   case 'popularity-desc':
    //     return peliculas.sort((a, b) => b.popularity - a.popularity);
    //   case 'rating-asc':
    //     return peliculas.sort((a, b) => a.vote_average - b.vote_average);
    //   case 'rating-desc':
    //     return peliculas.sort((a, b) => b.vote_average - a.vote_average);
    //   case 'release-date-asc':
    //     return peliculas.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
    //   case 'release-date-desc':
    //     return peliculas.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    //   default:
    //     return peliculas;
    // }

    return peliculas;
  };

  const peliculasOrdenadas = ordenarPeliculas(movieCategory.results, searchParams.sort || 'categories');

  return (
    <div className={styles.movieContainer}>
      {peliculasOrdenadas.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}