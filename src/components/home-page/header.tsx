'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "@/src/styles/Header.module.css";
import LoginButton from "./header/login-button";
import AuthModal from "../shared/auth-modal";
import { Fragment, useEffect, useState } from "react";
import DropdownMenuComponent from "../auth/dropdown-menu";
import { useAuthModal } from "@/src/state/auth-modal";
import { Auth } from "@/src/types/auth.types";

interface HeaderProps {
  auth: Auth | null;
}

export default function Header({ auth }: HeaderProps) {
  const {showAuthModal, setShowAuthModal} = useAuthModal();
  
  useEffect(() => {
    if (auth) {
      setShowAuthModal(false);
    }
  }, []);

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
          {auth && (
            <Fragment>
              <li>
                <Link href="#favorites">Favorites</Link>
              </li>
              <li>
                <Link href="#saved">Saved</Link>
              </li>
            </Fragment>
          )}
      </ul>
      <div style={{ marginLeft: 'auto'}} >
        {!auth ? (
          <LoginButton setOpenModal={setShowAuthModal} />
        ) : (
          <DropdownMenuComponent auth={auth} />
        )}
      </div>
      {!auth && (
        <AuthModal isOpenModal={showAuthModal} setOpenModal={setShowAuthModal} />
      )}
    </header>
  );
}