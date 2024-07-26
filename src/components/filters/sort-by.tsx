'use client';

import styles from "@/src/styles/Filters.module.css";
import useUpdateSearchParams from "@/src/utils/useUpdateSearchParams";

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

export default function SortBy(){

  const {updateSearchParams} = useUpdateSearchParams();

  const handleSortBy = (value: string) => {
    updateSearchParams({ query: 'sort', value });
  }

  return(
    <div className={styles.sortBy}>
      <h3>Sort By</h3>
      <div className={styles.sortByButtons}>
        {sortByOptions.map(option => (
          <button 
            onClick={() => {
            handleSortBy(option.value);
            }}
            key={option.value}>
              {option.name}
          </button>
        ))}
      </div>
    </div>
  )
}