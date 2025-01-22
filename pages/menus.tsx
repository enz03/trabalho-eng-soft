import { useEffect, useState } from 'react';
import Footer from '~/app/_components/footer/footer';
import Navbar from '~/app/_components/navbar/navbar';

interface Menu {
  id: number;
  name: string;
  description: string;
  price: string; // Ou `number`, dependendo de como está representado no backend
  restaurant_id: number;
}

interface Restaurante {
  id: number;
  name: string;
  description: string;
  location: string;
  user_id: number; // Adicionado para verificar o ID do criador
}

export default function MenusPage() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);  
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/menus/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMenus(data))
      .catch(error => {
        console.error('Error fetching menus:', error);
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
      <Navbar/>
      <h1>Menus</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {menus.map(menu => (
          <div key={menu.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <h2>{menu.name}</h2>
            <p>Descrição: {menu.description}</p>
            <p>Preço: R$ {menu.price}</p>
            <p><strong>Restaurante:</strong> {restaurantes.find(r => r.id == menu.restaurant_id)?.name}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
