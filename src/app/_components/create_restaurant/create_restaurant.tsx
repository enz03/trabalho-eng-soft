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
          <p className={styles.nome}>Escreva o nome do restaurante.</p>
          <div className={styles.usuario}>
            <input type="text" name="restaurante" id="restaurante" placeholder="" autoComplete="off" />
          </div>
          <p className={styles.nome}>Escreva as categorias do restaurante.</p>
          <div className={styles.usuario}>
            <input type="text" name="catergoria" id="categoria" placeholder="" autoComplete="off" />
          </div>
          <p className={styles.nome}>Escreva a faixa de preço do restaurante.</p>
          <div className={styles.usuario}>
            <input type="text" name="faixa_de_preco" id="faixa_de_preco" placeholder="" autoComplete="off" />
          </div>
          <p className={styles.nome}>Escreva a descrição do restaurante:</p>
          <div className={styles.descricao}>
            <textarea name="descricao" id="descricao" placeholder="Descrição do restaurante" autoComplete="off"></textarea>
          </div>
          <p className={styles.nome}>Escreva o cardápio do restaurante:</p>
          <div className={styles.descricao}>
            <textarea name="cardapio" id="cardapio" placeholder="Menu do restaurante" autoComplete="off"></textarea>
          </div>
          <div className={styles.entrar}>
            <input type="submit" value="Criar" />
          </div>
        </form>

      </div>
    </main>
  );
};
