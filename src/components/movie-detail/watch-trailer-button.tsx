'use client'
import Link from "next/link";
import styles from "@/styles/movie-detail/WatchTrailerButton.module.css";
import { Play } from "iconoir-react";
import { Movie } from "@/src/types/movie.type";

interface WatchTrailerButtonProps {
  link: string;
  movie?: Movie;
}

export default function WatchTrailerButton({ link, movie }: WatchTrailerButtonProps) {
  console.log(movie);
  return (
    <Link className={styles.button} href={`${link}`} target="_blank" rel={'noreferer'}>
      Watch Trailer
      <Play />
    </Link>
  );
}