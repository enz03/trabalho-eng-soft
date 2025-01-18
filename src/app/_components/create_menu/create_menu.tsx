"use client";
import styles from './create_menu.module.css';
import { useState, useEffect } from 'react';

interface Restaurant {
  id: number;
  name: string;
}

export default function CadastroMenu() {
  const [formData, setFormData] = useState({
    restaurant_id: '', // Associar o menu ao restaurante
    user_id: 41,       // ID do usuário mantido fixo
    name: '',
    description: '',
    price: '',
  });

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch restaurantes ao carregar a página
  useEffect(() => {
    fetch('/api/restaurants/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setRestaurants(data))
      .catch(error => {
        console.error('Erro ao carregar restaurantes:', error);
        setError(error.message);
      });
  }, []);

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
            <select
              name="restaurant_id"
              value={formData.restaurant_id}
              onChange={handleChange}
              required
            >
              <option value="">Escolha um restaurante</option>
              {restaurants.map((restaurant) => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </option>
              ))}
            </select>
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
        {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      </div>
    </main>
  );
}
