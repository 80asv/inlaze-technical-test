import { MovieCategories } from "@/src/types/enums/movie-categories.enum";
import { Suspense } from "react";
import GetMovieCategories from "../movie-categories/get-movie-categories";
import styles from "@/styles/MovieCategory.module.css";

const categories = Object.values(MovieCategories);

function formatCategory(category: string): string {
  const withoutUnderscores = category.replace(/_/g, ' ');
  return withoutUnderscores.charAt(0).toUpperCase() + withoutUnderscores.slice(1);
}

export default function Categories(){
  return(
    <div className={styles.container}>
      {categories.map((category) => (
        <div className={styles.category}>
          <h2 id={category}>{formatCategory(category)}</h2>
          <Suspense key={category} fallback={null}>
            <GetMovieCategories category={category} />
          </Suspense>
        </div>
      ))}      
    </div>
  )
}