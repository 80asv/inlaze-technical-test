import styles from "@/src/styles/Filters.module.css";
import { Suspense } from "react";
import GenreList from "./genre-list";

const sortByOptions = [
  {name: "Categories", value: "categories"},
  {name: "Title A-Z", value: "title-asc"},
  {name: "Popularity Ascending", value: "popularity-asc"},
  {name: "Popularity Descending", value: "popularity-desc"},
  {name: "Rating Ascending", value: "rating-asc"},
  {name: "Rating Descending", value: "rating-desc"},
  {name: "Release Date Ascending", value: "release-date-asc"},
  {name: "Release Date Descending", value: "release-date-desc"},
];


export default async function SortBySection(){
  return(
    <div>
      <SearchBar />
      <SortBy />
      <Suspense fallback={null}>
        <GenreList />
      </Suspense>
    </div>
  )
}

function SortBy(){
  return(
    <div className={styles.sortBy}>
      <h3>Sort By</h3>
      <div className={styles.sortByButtons}>
        {sortByOptions.map(option => (
          <button key={option.value}>{option.name}</button>
        ))}
      </div>
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