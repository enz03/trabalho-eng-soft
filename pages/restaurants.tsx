import { useEffect, useState } from 'react';

interface Restaurante {
  id: number;
  name: string;
  description: string;
  location: string;
}

export default function RestaurantesPage() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/restaurants/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setRestaurantes(data))
      .catch(error => {
        console.error('Error fetching restaurants:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Restaurantes</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {restaurantes.map(restaurante => (
          <div key={restaurante.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <h2>{restaurante.name}</h2>
            <p>Descrição: {restaurante.description}</p>
            <p>Localização: {restaurante.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}