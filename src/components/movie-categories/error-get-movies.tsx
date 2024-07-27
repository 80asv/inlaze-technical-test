'use client';
import styles from '@/styles/ErrorGetMovies.module.css';

export default function ErrorGetMovies(){
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>Error 404: Movie Not Found</h2>
      <p className={styles.errorDescription}>It looks like we've encountered an unexpected error. Please try refreshing the page or come back later.</p>
    </div>
  );
}