import { getMovieCredits } from "@/src/actions/movies";
import { envConfig } from "@/src/config/env.config";
import { Movie } from "@/src/types/movie.type";
import Image from "next/image";
import styles from "@/styles/movie-detail/MoreInfo.module.css";

interface MovieInfoProps {
  movie: Movie;
}

export default async function MovieInfo({ movie }: MovieInfoProps){
  const credits = await getMovieCredits(movie.id.toString());

  const getPersonImage = (path: string) => {
    return `${envConfig.TMDB_IMAGE_URL}${path}`;
  }


  return(
    <div>
      <div className={styles.cast}>
        <h2>Cast</h2>
        <div className={styles.actors}>
          {credits.cast.slice(0, 6).map((cast) => (
            <div key={cast.id}>
              <Image src={getPersonImage(cast.profile_path ?? '')} alt={cast.name} width={150} height={150} />
              <p>
                {cast.name} as <strong>{cast.character}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}