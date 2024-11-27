"use client";
import styles from './login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Google from './google';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';


export default function Login() {
  const session = useSession();
//   const router = useRouter();
  function handleClickSignIn() {
    signIn("google")
    // router.push("/")
  }

  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.heading}>Login</h1>
            <div className={styles.botaoGoogle}>
              <Google />
            </div>
            <div className={styles.dividerOu}>
              <div className={styles.divider}></div>
              <p className={styles.ou}>ou</p>
              <div className={styles.divider}></div>
            </div>
            <form action="#">
              <p className={styles.nome}>E-mail</p>
                <div className={styles.usuario}>
                    <input type="text" name="usuario" id="usuario" placeholder="" autoComplete="off" />
                </div>
              <p className={styles.nome}>Senha</p>
                <div className={styles.senha}>
                    <input type="password" name="senha" id="senha" placeholder="" autoComplete="off" />
                </div>
                <div className={styles.entrar}>
                    <input type="submit" value="Entrar"/>
                </div>
            </form>
            <div className={styles.span}>
              <Link href="/cadastro" className={styles.link}>Ainda não tem conta? Cadastre-se!</Link>
            </div>
        </div>
    </main>
  );
};
