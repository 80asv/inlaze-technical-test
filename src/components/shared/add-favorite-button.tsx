'use client';

import { HeartSolid } from "iconoir-react";
import styles from '@/styles/shared/AddFavoriteButton.module.css'

export default function AddFavoriteButton() {
  return (
    <button className={styles.button}>
      <HeartSolid />
    </button>
  );
}