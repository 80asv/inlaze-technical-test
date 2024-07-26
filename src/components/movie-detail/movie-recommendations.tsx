import { getMovieRecommendations } from "@/src/actions/movies";
import { envConfig } from "@/src/config/env.config";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/movie-detail/MovieRecommendations.module.css";

const getPosterImage = (posterPath: string) => {
  return `${envConfig.TMDB_IMAGE_URL}${posterPath}`;
}

export default async function MovieRecommendations({ movieId }: { movieId: string }) {
  const recommendations = await getMovieRecommendations(movieId);
  if(recommendations?.results?.length === 0) return null;
  return(
    <div className={styles.recommendations}>
      <h2>Recommendations</h2>
      <div className={styles.movies}>
        {recommendations.results.slice(0, 6).map(recommendation => (
          <Link className={styles.movie} key={recommendation.id} href={recommendation.id.toString()}>
            <Image className={styles.image} src={getPosterImage(recommendation.poster_path)} alt={recommendation.title} width={150} height={150} />
            <h3>{recommendation.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}