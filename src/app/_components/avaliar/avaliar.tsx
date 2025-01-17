"use client";
import Link from 'next/link';
import styles from './avaliar.module.css';
import { signIn, signOut, useSession } from "next-auth/react";


export default function Cadastro() {
  const session = useSession();
  function handleClickSignIn() {
    signIn("google")
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Você está avaliando o restaurante (aqui apareceria o restaurante)</h1>
        <div className={styles.dividerOu}>

        </div>

        <form>
          <p className={styles.nome}>Deixe sua avaliação aqui:</p>
          <div className={styles.avaliacao}>
            <textarea name="avaliacao" id="avaliacao" placeholder="Escreva sua avaliação..." autoComplete="off"></textarea>
          </div>

          <div className={styles.entrar}>
            <input type="submit" value="Enviar" />
          </div>
        </form>


      </div>
    </main>
  );
};
