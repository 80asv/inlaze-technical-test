'use client';

import styles from "@/src/styles/Filters.module.css";

export default function SearchBar(){
  return(
    <div className={styles.searchBar}>
      <h3>Search</h3>
      <input type="text" placeholder="Keywords" />
    </div>
  )
}