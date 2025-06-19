import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error('Erreur de chargement des événements :', err);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📅 Événements</h2>
      {events.length === 0 ? (
        <p>Aucun événement disponible.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event._id} style={{ marginBottom: '1.5rem' }}>
              <h3>{event.name}</h3>
              <p><strong>Artiste :</strong> {event.artist}</p>
              <p><strong>Scène :</strong> {event.stage}</p>
              <p><strong>Date :</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Events;
