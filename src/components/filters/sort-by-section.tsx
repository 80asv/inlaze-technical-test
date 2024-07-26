import { Suspense } from "react";
import GenreList from "./genre-list";
import SortBy from "./sort-by";
import SearchBar from "./search-bar";




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



