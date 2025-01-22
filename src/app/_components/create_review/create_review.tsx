"use client";
import { USER_ID } from '~/app/service/usesContext';
import styles from './create_review.module.css';
import { useState, useEffect } from 'react';

interface Restaurante {
  id: number;
  name: string;
}

export default function CadastroReview() {
  const [formData, setFormData] = useState({
    restaurant_id: '', 
    user_id: USER_ID,
    rating: '',
    comment: '',
  });

  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/restaurants/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setRestaurantes(data))
      .catch(error => {
        console.error('Erro ao buscar restaurantes:', error);
        setError('Não foi possível carregar os restaurantes.');
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
    
    const ratingValue = parseInt(formData.rating, 10);
    if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
      alert('A nota deve ser um número entre 1 e 5.');
      return;
    }

    fetch('/api/reviews', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        review: { ...formData },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Avaliação criada com sucesso:', data);
        setSuccessMessage('Avaliação criada com sucesso!');
        setFormData({
          restaurant_id: '',
          user_id: USER_ID,
          rating: '',
          comment: '',
        });
      })
      .catch((error) => {
        console.error('Erro ao criar avaliação:', error);
        setError('Erro ao criar avaliação. Tente novamente.');
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Criar Avaliação</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <p className={styles.nome}>Selecione o restaurante:</p>
          <div className={styles.usuario}>
            <select
              name="restaurant_id"
              value={formData.restaurant_id}
              onChange={handleChange}
            >
              <option value="">Selecione um restaurante</option>
              {restaurantes.map(restaurante => (
                <option key={restaurante.id} value={restaurante.id}>
                  {restaurante.name}
                </option>
              ))}
            </select>
          </div>

          <p className={styles.nome}>Escreva a sua nota de 1 a 5:</p>
          <div className={styles.usuario}>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Nota de 1 a 5"
              min="1"
              max="5"
            />
          </div>

          <p className={styles.nome}>Escreva algum comentário:</p>
          <div className={styles.descricao}>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Comentário"
              autoComplete="off"
            ></textarea>
          </div>

          <div className={styles.entrar}>
            <input type="submit" value="Avaliar" />
          </div>
        </form>
      </div>
    </main>
  );
}
