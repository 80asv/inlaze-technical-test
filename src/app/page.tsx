import { Suspense } from "react";
import MainBanner from "../components/home-page/main-banner";
import styles from "./page.module.css";
import Filters from "../components/home-page/filters";
import Movies from "../components/home-page/movies";
import { FiltersSearchParamsTypes } from "../types/filters-search-params.types";

interface HomeProps {
  searchParams: FiltersSearchParamsTypes;
}

export default function Home({ searchParams }: HomeProps) {
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
