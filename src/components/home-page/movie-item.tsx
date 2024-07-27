import { envConfig } from "@/src/config/env.config";
import styles from '@/styles/MovieItem.module.css';
import Image from "next/image";
import Link from "next/link";
import UsersScore from "../shared/users-score";
import AddFavoriteButton from "../shared/add-favorite-button";
import { MovieItem as Movie } from "@/src/types/movie-categories.types";
import { LikedMovies } from "@/src/types/liked-movies.types";

interface MovieItemProps {
  movie: Movie;
  likedMovies: LikedMovies[];
  auth: any;
}

export default function MovieItem({ movie, likedMovies, auth }: MovieItemProps) {
  return(
  <Link href={`movie/${movie.id}`} key={movie.id} className={styles.movie}>
    <Image src={`${envConfig.TMDB_IMAGE_URL}${movie.poster_path}`} alt={movie.title} width={185} height={278} className={styles.movieImage} />  
    <div className={styles.infoContainer}>
      <div>
        <h3>{movie.title}</h3>
        <p>{new Date(movie.release_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      <div className={styles.actions}>
        <div className={styles.actionItem}>
          <p>Rating</p>
          <UsersScore voteAverage={movie.vote_average} styles={{
            width: '30px',
            height: '30px',
            fontSize: '10px',
            fontWeight: '200',
          }}/>
        </div>

        <div className={styles.actionItem}>
          <p>Favorites</p>
          <AddFavoriteButton movie={movie} likedMovies={likedMovies} auth={auth}/>
        </div>
      </div>
    </div>
  </Link>
  )
}