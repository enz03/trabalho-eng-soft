"use client";
import Link from 'next/link';
import Google from '../login/google';
import styles from './cadastro.module.css';
import { signIn, signOut, useSession } from "next-auth/react";


export default function Cadastro() {
  const session = useSession();
  function handleClickSignIn() {
    signIn("google")
  }

  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.heading}>Cadastre-se</h1>
            <div className={styles.botaoGoogle}>
                <Google />
            </div>
            <div className={styles.span}>
                <p className={styles.cadastre}>Já possui conta? Faça <Link href="./login" className={styles.login}>login</Link></p>
            </div>
        </div>
    </main>
  );
};
