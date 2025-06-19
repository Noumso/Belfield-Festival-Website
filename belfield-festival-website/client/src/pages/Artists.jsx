import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('/api/artists')
      .then(res => setArtists(res.data))
      .catch(err => console.error('Erreur chargement artistes :', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎤 Artistes</h2>
      {artists.length === 0 ? (
        <p>Aucun artiste disponible.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {artists.map(artist => (
            <div key={artist._id} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '200px',
              padding: '1rem',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <img
                src={artist.image || 'https://via.placeholder.com/200'}
                alt={artist.name}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <h3>{artist.name}</h3>
              <p><em>{artist.genre}</em></p>
              <p>{artist.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Artists;
