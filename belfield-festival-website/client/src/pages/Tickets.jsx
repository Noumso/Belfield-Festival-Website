import React, { useState } from 'react';
import '../styles/Tickets.css';

const ticketTypes = [
  { id: 1, name: 'Pass Journée', price: 20 },
  { id: 2, name: 'Pass Week-End', price: 40 },
];

const Tickets = () => {
  const [quantities, setQuantities] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id, value) => {
    setQuantities({ ...quantities, [id]: parseInt(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const total = Object.entries(quantities).reduce((acc, [id, qty]) => {
    const ticket = ticketTypes.find((t) => t.id === parseInt(id));
    return acc + (ticket ? ticket.price * qty : 0);
  }, 0);

  return (
    <div className="tickets-container">
      <h1>Billetterie</h1>
      {!submitted ? (
        <form className="ticket-form" onSubmit={handleSubmit}>
          {ticketTypes.map((ticket) => (
            <div key={ticket.id} className="ticket-item">
              <div className="ticket-info">
                <h3>{ticket.name}</h3>
                <p>{ticket.price}€</p>
              </div>
              <input
                type="number"
                min="0"
                value={quantities[ticket.id] || 0}
                onChange={(e) => handleChange(ticket.id, e.target.value)}
              />
            </div>
          ))}
          <button type="submit">Réserver</button>
        </form>
      ) : (
        <div className="confirmation">
          <h2>Merci pour votre réservation !</h2>
          <p>Total à régler : <strong>{total}€</strong></p>
        </div>
      )}
    </div>
  );
};

export default Tickets;
