import React from 'react';
import '../styles/Artists.css';

import artist1 from "../assets/artists/D'RAM.jpg";
import artist2 from '../assets/artists/Lalude.jpg';

const artists = [
  {
    name: "DJ D'RAM",
    genre: 'Électro',
    image: artist1,
    description: "Maître des platines, DJ D'RAM électrise les foules avec ses sets enflammés."
  },
  {
    name: 'Lalude',
    genre: 'Electro',
    image: artist2,
    description: 'Artiste du Belfield.'
  },
];

const Artists = () => {
  return (
    <div className="artists-container">
      <h1>Nos Artistes</h1>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p><strong>Genre :</strong> {artist.genre}</p>
            <p>{artist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
