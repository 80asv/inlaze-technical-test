import { getMovieById } from "@/src/actions/movies";
import { envConfig } from "@/src/config/env.config";
import styles from "@/src/styles/MainBanner.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function MainBanner() {
  const movie = await getMovieById('573435');
  console.log(movie);
  return (
    <Link href={`/movie/${movie.id}`}>
      <section className={styles.banner}>
        <Image src={`${envConfig.TMDB_IMAGE_URL}${movie.backdrop_path}`} alt={movie.title} width={1440} height={435} className={styles.image} />
        <div className={styles.content}>
            <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </section>
    </Link>
  );
}