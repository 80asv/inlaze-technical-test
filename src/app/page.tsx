import { Suspense } from "react";
import MainBanner from "../components/home-page/main-banner";
import styles from "./page.module.css";
import Filters from "../components/home-page/filters";
import Movies from "../components/home-page/movies";
import { FiltersSearchParamsTypes } from "../types/filters-search-params.types";

export default function Home({ searchParams }: FiltersSearchParamsTypes) {
  return (
    <main className={styles.main}>
      <Suspense fallback={null}>
        <MainBanner />
      </Suspense>
      <div className={styles.movieSection}>
        <Filters />
        <Movies searchParams={searchParams}/>
      </div>
    </main>
  );
}
