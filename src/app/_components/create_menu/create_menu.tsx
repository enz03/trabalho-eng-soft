"use client";
import styles from './create_menu.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from 'react';

export default function CadastroMenu() {
  const [formData, setFormData] = useState({
    restaurant_id: '', // Mantido para associar o menu ao restaurante
    user_id: 41,       // Mantido o ID do usuário
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch('/api/menus', { // Endpoint correto para criar menus
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu: { ...formData }, // Dados do menu, incluindo restaurant_id
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Menu criado com sucesso:', data);
        alert('Menu criado com sucesso!');
        setFormData({
          restaurant_id: '',
          user_id: 41,
          name: '',
          description: '',
          price: '',
        });
      })
      .catch((error) => {
        console.error('Erro ao criar menu:', error);
        alert('Erro ao criar menu. Tente novamente. ' + error.message);
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Criar Menu</h1>
        <form onSubmit={handleSubmit}>
          <p className={styles.nome}>Selecione o restaurante:</p>
          <div className={styles.usuario}>
            <input
              type="text"
              name="restaurant_id"
              value={formData.restaurant_id}
              onChange={handleChange}
              placeholder="ID do restaurante"
              autoComplete="off"
            />
          </div>

          <p className={styles.nome}>Escreva o nome do menu:</p>
          <div className={styles.usuario}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome do menu"
              autoComplete="off"
            />
          </div>

          <p className={styles.nome}>Escreva o preço:</p>
          <div className={styles.usuario}>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Preço"
              autoComplete="off"
            />
          </div>

          <p className={styles.nome}>Escreva a descrição do menu:</p>
          <div className={styles.descricao}>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descrição do menu"
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
}
