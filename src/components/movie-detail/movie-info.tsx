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
    <div className={styles.container}>
      <div>
        <div className={styles.cast}>
          <h2>Cast</h2>
          <div className={styles.actors}>
            {credits.cast.slice(0, 6).map((cast) => (
              <div key={cast.id}>
                <Image className={styles.actorImage} src={getPersonImage(cast.profile_path ?? '')} alt={cast.name} width={150} height={150} />
                <p style={{ whiteSpace: 'wrap'}}>
                  {cast.name} as <strong>{cast.character}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.plotSummary}>
          <h2>Plot Summary</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque blanditiis corporis possimus voluptas ex reprehenderit pariatur. Recusandae rem, ratione temporibus sint atque possimus expedita assumenda fugit explicabo magnam inventore?
            Ipsum adipisci hic nobis provident eius molestias labore officiis nisi sed repudiandae optio doloremque, iste architecto quo eveniet, dolorum, perspiciatis cumque quis tenetur deserunt? Accusamus id excepturi delectus velit necessitatibus.
            Voluptatibus consequuntur quam quod? Iure praesentium temporibus quis esse, fuga commodi minima. Perspiciatis, ut iusto, voluptate rerum cumque reiciendis, voluptates corporis voluptatibus tempora ullam quidem soluta. Est ab quis veniam.
            Dolore veniam nulla laboriosam quod sit saepe iure perferendis mollitia eligendi reiciendis necessitatibus nihil laborum vitae nisi sint blanditiis provident maxime, impedit voluptatibus libero ad. <br /> Dolore qui consequuntur accusantium maxime?
            Ipsa soluta, nobis illo nam aliquid deleniti. Porro ipsam possimus itaque alias, eum nesciunt voluptate! Possimus dicta illo voluptate dolor vel, ipsam, perferendis quisquam cumque, magnam earum accusantium modi porro.
          </p>
        </div>
      </div>
      <aside>
        <div>
          <h4>Genres</h4>
          {movie.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}{index < movie.genres.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
          <div>
            <h4>Budget</h4>
            <p>{movie.budget}</p>
          </div>
          <div>
            <h4>Original languages</h4>
            <p>{movie.original_language}</p>
          </div>
          <div>
            <h4>Status</h4>
            <p>{movie.status}</p>
          </div>
          <div>
            <h4>Production companies</h4>
            <div>
              {movie.production_companies.map((pc, index) => (
                <span key={pc.id}>
                  {pc.name}{index < movie.production_companies.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
      </aside>
    </div>
  )
}