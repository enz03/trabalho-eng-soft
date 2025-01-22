import { useEffect, useState } from 'react';
import Footer from '~/app/_components/footer/footer';
import Navbar from '~/app/_components/navbar/navbar';

interface Review {
  id: number;
  rating: number;
  comment: string;
  restaurant_id: number;
}

interface Restaurante {
  id: number;
  name: string;
  description: string;
  location: string;
  user_id: number; // Adicionado para verificar o ID do criador
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);  
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/reviews/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setReviews(data))
      .catch(error => {
        console.error('Error fetching reviews:', error);
        setError(error.message);
      });
  }, []);

    // Função para buscar restaurantes
    const fetchRestaurantes = () => {
      fetch('/api/restaurants/')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setRestaurantes(data))
        .catch(error => {
          console.error('Erro ao buscar restaurantes:', error);
          setError(error.message);
        });
    };

    useEffect(() => {
      fetchRestaurantes();
    }, []);

  return (
    <div>
      <Navbar />
      
      <h1>Avaliações</h1>
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {reviews.map(review => (
          <div key={review.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '300px' }}>
            <p><strong>Comentário:</strong> {review.comment}</p>
            <p><strong>Nota:</strong> {review.rating}</p>
            <p><strong>Restaurante:</strong> {restaurantes.find(r => r.id == review.restaurant_id)?.name}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
