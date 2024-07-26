import { getMoviesByCategory } from "@/src/actions/movies";
import { envConfig } from "@/src/config/env.config";
import { MovieCategories } from "@/src/types/enums/movie-categories.enum";
import styles from '@/styles/MovieItem.module.css';
import { Heart, HeartSolid, SquareWave } from "iconoir-react";
import Image from "next/image";

interface GetMovieCategoriesProps {
  category: MovieCategories;
}


export default async function GetMovieCategories({ category }: GetMovieCategoriesProps) {
  const movieCategory = await getMoviesByCategory(category);
  return (
    <div className={styles.movieContainer}>
      {movieCategory.results.map((movie) => (
        <div key={movie.id} className={styles.movie}>
          <Image src={`${envConfig.TMDB_IMAGE_URL}${movie.poster_path}`} alt={movie.title} width={185} height={278} className={styles.movieImage} />  
          <div className={styles.infoContainer}>
            <div>
              <h3>{movie.title}</h3>
              <p>{new Date(movie.release_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className={styles.actions}>
              <div className={styles.actionItem}>
                <p>Rating</p>
                <div>
                  {movie.vote_average}
                </div>
              </div>

              <div className={styles.actionItem}>
                <p>Favorites</p>
                <button>
                  <HeartSolid style={{ color: 'white'}}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}