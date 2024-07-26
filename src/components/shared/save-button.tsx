import { BookmarkSolid } from "iconoir-react";
import styles from '@/styles/shared/SaveButton.module.css';

export default function SaveButton() {
  return (
    <button className={styles.button}>
      <BookmarkSolid />
    </button>
  )
}