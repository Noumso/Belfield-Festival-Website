import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Artists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/artists')
      .then(response => {
        setArtists(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des artistes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement en cours...</p>;

  return (
    <div>
      <h2>🎤 Liste des Artistes</h2>
      {artists.length === 0 ? (
        <p>Aucun artiste pour le moment.</p>
      ) : (
        <ul>
          {artists.map(artist => (
            <li key={artist._id}>
              <h3>{artist.name}</h3>
              <p>{artist.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Artists;
