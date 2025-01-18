"use client";
import Link from 'next/link';
import styles from './create_restaurant.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from 'react';


export default function Cadastro() {
  const [formData, setFormData] = useState({
    user_id: 41,
    name: '',
    description: '',
    location: '',
  });
  
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();

    fetch('/api/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        restaurant: { ...formData }
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Restaurante criado com sucesso:', data);
        alert('Restaurante criado com sucesso!');
        setFormData({
          user_id: 1,
          name: '',
          description: '',
          location: '',
        });
      })
      .catch((error) => {
        console.error('Erro ao criar restaurante:', error);
        alert('Erro ao criar restaurante. Tente novamente. ' + error.message);
      });
  };

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
        <form onSubmit={handleSubmit}>
        <p className={styles.nome}>Escreva o nome do restaurante.</p>
        <div className={styles.usuario}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=""
            autoComplete="off"
          />
        </div>

        <p className={styles.nome}>Escreva a localização.</p>
        <div className={styles.usuario}>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder=""
            autoComplete="off"
          />
        </div>

        <p className={styles.nome}>Escreva a descrição do restaurante:</p>
        <div className={styles.descricao}>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrição do restaurante"
            autoComplete="off"
          ></textarea>
        </div>
        <div className={styles.entrar}>
          <input type="submit" value="Criar" />
        </div>
      </form>

      </div>
    </main>
  );
};
