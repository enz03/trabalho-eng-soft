"use client";
import styles from './login.module.css';
import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/react";


export default function Google() {
  const session = useSession();
  function handleClickSignIn() {
    signIn("google")
  }

  return (
              <button className={styles.buttonInGoogle} onClick={handleClickSignIn}>
                <Image className={styles.logoGoogle} src="/google.png" alt="" width={28} height={28}/>
                <p className={styles.textGoogle}>Continuar com Google</p>
                </button>
  )}