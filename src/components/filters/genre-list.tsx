import { getGenres } from "@/src/actions/movies"
import styles from "@/src/styles/Filters.module.css";


export default async function GenreList(){
  const genres = await getGenres('tv');
  return(
    <div className={styles.genres}>
      <h3>Genres</h3>
      <div className={styles.genreList}>
        {genres.map(genre => (
          <button key={genre.id}>
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  )
}