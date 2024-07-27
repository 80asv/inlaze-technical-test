import { envConfig } from "@/src/config/env.config";
import Image from "next/image";
import { Movie } from "@/src/types/movie.type";
import styles from "@/styles/movie-detail/MovieBanner.module.css";
import AddFavoriteButton from "../shared/add-favorite-button";
import SaveButton from "../shared/save-button";
import WatchTrailerButton from "./watch-trailer-button";
import UsersScore from "../shared/users-score";
import { LikedMovies } from "@/src/types/liked-movies.types";

interface MovieBannerProps {
  movie: Movie;
  auth: any;
  likedMovies?: LikedMovies[];
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  if (remainingMinutes === 0) {
    return `${hours} h`;
  }

  return `${hours} h ${remainingMinutes} min`;
}


export default function MovieBanner({ movie, auth }: MovieBannerProps) {

  const posterImage = `${envConfig.TMDB_IMAGE_URL}${movie.poster_path}`;
  const backdropImage = `${envConfig.TMDB_IMAGE_URL}${movie.backdrop_path}`;

  return(
  <div className={styles.banner}>
      <div className={styles.blur}></div>
      <Image src={backdropImage} alt={movie.title} width={1440} height={560} className={styles.backdropImage}/>
      <div className={styles.content}>
        <div>
          <Image className={styles.posterImage} src={posterImage} alt={movie.title} width={305} height={306} />
          <WatchTrailerButton link={''} movie={movie}/>
        </div>
        <div>
          <div>
            <h2 className={styles.movieTitle}>{movie.title}</h2>
            <div className={styles.info}>
              <p>{new Date(movie.release_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p>{formatDuration(movie.runtime)}</p>
            </div>
          </div>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div className={styles.actions}>
              <div className={styles.rating}>
                <UsersScore voteAverage={movie.vote_average} />
                <span>Users <br />score</span>
              </div>
              <div className={styles.buttons}>
                <AddFavoriteButton movie={movie} auth={auth} />
                <SaveButton />
              </div>
          </div>
        </div>
      </div>
  </div>
  )
}