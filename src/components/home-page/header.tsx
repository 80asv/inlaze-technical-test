import Image from "next/image";
import Link from "next/link";
import styles from "@/src/styles/Header.module.css";

export default function Header(){
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Image src="/images/inlaze-logo.png" alt="Inlaze Movies" width={134} height={42} />
      </Link>
      <ul className={styles.ul}>
          <li>
            <Link href="/#popular">Popular</Link>
          </li>
          <li>
            <Link href="/#now_playing">Now Playing</Link>
          </li>
          <li>
            <Link href="/#upcoming">Upcoming</Link>
          </li>
          <li>
            <Link href="/#top_rated">Top Rated</Link>
          </li>
          <li>
            <Link href="#favorites">Favorites</Link>
          </li>
          <li>
            <Link href="#saved">Saved</Link>
          </li>
      </ul>
      <div>
        other buttons
      </div>
    </header>
  );
}