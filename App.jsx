import React, { useState, useEffect } from 'react';

function PokemonCardGallery() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards?pageSize=10')
      .then(response => response.json())
      .then(data => setCards(data.data));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {cards.map(card => (
        <img 
          key={card.id} 
          src={card.images.small} 
          alt={card.name} 
          style={{ width: '200px' }} 
        />
      ))}
    </div>
  );
}

export default PokemonCardGallery;