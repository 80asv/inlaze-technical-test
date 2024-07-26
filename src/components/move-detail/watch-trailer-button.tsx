import Link from "next/link";
import styles from "@/styles/movie-detail/WatchTrailerButton.module.css";
import { Play } from "iconoir-react";

interface WatchTrailerButtonProps {
  link: string;
}

export default function WatchTrailerButton({ link }: WatchTrailerButtonProps) {
  return (
    <Link className={styles.button} href={`${link}`} target="_blank" rel={'noreferer'}>
      Watch Trailer
      <Play />
    </Link>
  );
}