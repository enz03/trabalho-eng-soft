"use client";
import Link from 'next/link';
import styles from './create_restaurant.module.css';
import { signIn, signOut, useSession } from "next-auth/react";


export default function Cadastro() {
  const session = useSession();
  function handleClickSignIn() {
    signIn("google")
  }

  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.heading}>Criar restaurante</h1>
            <div className={styles.dividerOu}>

            </div>
            <form>
              <p className={styles.nome}>Insira o nome do restaurante</p>
                <div className={styles.usuario}>
                    <input type="text" name="restaurante" id="restaurante" placeholder="" autoComplete="off" />
                </div>
              <p className={styles.nome}>Insira a localização do restaurante</p>
                <div className={styles.senha}>
                    <input type="text" name="localizacao" id="localizacao" placeholder="" autoComplete="off" />
                </div>
                <p className={styles.nome}>Insira a descrição do restaurante</p>
                <div className={styles.senha}>
                    <input type="text" name="descricao" id="descricao" placeholder="" autoComplete="off" />
                </div>
                <div className={styles.entrar}>
                    <input type="submit" value="Criar"/>
                </div>
            </form>

        </div>
    </main>
  );
};
