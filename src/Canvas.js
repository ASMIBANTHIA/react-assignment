import React, { useState } from 'react';
import Card from './Card';
import Xarrow from 'react-xarrows';
import './Canvas.css';

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [connections, setConnections] = useState([]);

  const addCard = () => {
    const newCard = { id: `card-${cards.length + 1}`, text: 'Hello , My name is Asmi', x: 100, y: 100 };
    setCards([...cards, newCard]);

    if (cards.length > 0) {
      const lastCardId = cards[cards.length - 1].id;
      setConnections([...connections, { start: lastCardId, end: newCard.id }]);
    }
  };

  return (
    <div className="canvas">
      <button onClick={addCard} className="add-card-button">Add Card</button>
      {cards.map((card) => (
        <Card key={card.id} id={card.id} text={card.text} x={card.x} y={card.y} />
      ))}
      {connections.map((conn, index) => (
        <Xarrow key={index} start={conn.start} end={conn.end} />
      ))}
    </div>
  );
};

export default Canvas;
