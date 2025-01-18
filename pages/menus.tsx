import { useEffect, useState } from 'react';

interface Menu {
  id: number;
  name: string;
  description: string;
  price: string; // Ou `number`, dependendo de como está representado no backend
  restaurant_id: number;
}

export default function MenusPage() {
  const [menus, setMenus] = useState<Menu[]>([]);
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

  return (
    <div>
      <h1>Menus</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {menus.map(menu => (
          <div key={menu.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <h2>{menu.name}</h2>
            <p>Descrição: {menu.description}</p>
            <p>Preço: R$ {menu.price}</p>
            <p>Restaurante ID: {menu.restaurant_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
