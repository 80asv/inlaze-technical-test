import styles from "@/src/styles/Filters.module.css";

export default function SortBySection(){
  return(
    <div>
      <SearchBar />
      <SortBy />
    </div>
  )
}

function SortBy(){
  return(
    <div className={styles.sortBy}>
      <h3>Sort By</h3>
      <select>
        <option value="">Categories</option>
        <option value="">Title A-Z</option>
        <option>Popularity Ascending</option>
        <option>Popularity Descending</option>
        <option value="">Rating Ascending</option>
        <option>Rating Descending</option>
        <option>Release Date Ascending</option>
        <option>Release Date Descending</option>
      </select>
    </div>
  )
}


function SearchBar(){
  return(
    <div className={styles.searchBar}>
      <h3>Search</h3>
      <input type="text" placeholder="Keywords" />
    </div>
  )
}