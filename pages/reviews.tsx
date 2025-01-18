import { useEffect, useState } from 'react';

interface Review {
  id: number;
  rating: number;
  comment: string;
  restaurant_id: number;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
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

  return (
    <div>
      <h1>Avaliações</h1>
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {reviews.map(review => (
          <div key={review.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '300px' }}>
            <p><strong>Comentário:</strong> {review.comment}</p>
            <p><strong>Nota:</strong> {review.rating}</p>
            <p><strong>Restaurante ID:</strong> {review.restaurant_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
