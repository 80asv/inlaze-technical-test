import { Suspense } from "react";
import Header from "../components/home-page/header";
import MainBanner from "../components/home-page/main-banner";
import styles from "./page.module.css";
import Filters from "../components/home-page/filters";
import Categories from "../components/home-page/categories";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Suspense fallback={null}>
        <MainBanner />
      </Suspense>
      <div className={styles.movieSection}>
        <Filters />
        <Categories />
      </div>
    </main>
  );
}
