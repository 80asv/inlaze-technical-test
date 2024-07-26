import styles from "@/src/styles/Filters.module.css";
import SortBySection from "../filters/sort-by-section";

export default function Filters(){
  return <div className={styles.filters}>
    <SortBySection />
  </div>
}