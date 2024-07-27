import { MovieCategories } from "@/src/types/enums/movie-categories.enum";
import { Suspense } from "react";
import GetMovieCategories from "../movie-categories/get-movie-categories";
import styles from "@/styles/MovieCategory.module.css";
import { FiltersSearchParamsTypes } from "@/src/types/filters-search-params.types";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorGetMovies from "../movie-categories/error-get-movies";

interface MoviesProps {
  searchParams: FiltersSearchParamsTypes;
}

const categories = Object.values(MovieCategories);

function formatCategory(category: string): string {
  const withoutUnderscores = category.replace(/_/g, ' ');
  return withoutUnderscores.charAt(0).toUpperCase() + withoutUnderscores.slice(1);
}

export default function movies({ searchParams }: MoviesProps){
  return(
    <div className={styles.container}>
      {categories.map((category) => (
        <div className={styles.category} key={category}>
          <h2 id={category}>{formatCategory(category)}</h2>
          <ErrorBoundary errorComponent={ErrorGetMovies}>
            <Suspense key={category} fallback={null}>
              <GetMovieCategories category={category} searchParams={searchParams}/>
            </Suspense>
          </ErrorBoundary>
        </div>
      ))}      
    </div>
  )
}