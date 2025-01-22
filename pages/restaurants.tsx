import { useEffect, useState } from 'react';
import Footer from '~/app/_components/footer/footer';
import Navbar from '~/app/_components/navbar/navbar';
import { USER_ID } from '~/app/service/usesContext';

interface Restaurante {
  id: number;
  name: string;
  description: string;
  location: string;
  user_id: number; // Adicionado para verificar o ID do criador
}

export default function RestaurantesPage() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  // Função para deletar restaurante
  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza de que deseja excluir este restaurante?')) {
      fetch(`/api/restaurants/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
          }
          alert('Restaurante excluído com sucesso!');
          // Atualiza a lista de restaurantes
          setRestaurantes(prev => prev.filter(restaurante => restaurante.id !== id));
        })
        .catch(error => {
          console.error('Erro ao excluir restaurante:', error);
          alert('Erro ao excluir restaurante. Tente novamente.');
        });
    }
  };

  return (
    <div>
      <Navbar />
      
      <h1>Restaurantes</h1>
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {restaurantes.map(restaurante => (
          <div
            key={restaurante.id}
            style={{
              border: '1px solid #ccc',
              padding: '16px',
              margin: '16px',
              width: '200px',
            }}
          >
            <h2>{restaurante.name}</h2>
            <p>Descrição: {restaurante.description}</p>
            <p>Localização: {restaurante.location}</p>
            {restaurante.user_id === USER_ID && ( // Verifica se o ID do usuário corresponde
              <button
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  marginTop: '8px',
                }}
                onClick={() => handleDelete(restaurante.id)}
              >
                Excluir
              </button>
            )}
          </div>
        ))}
      </div>
      <Footer />
      
    </div>
  );
}
