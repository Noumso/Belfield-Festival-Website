import React from 'react';
import '../styles/ArtistCard.css';

function ArtistCard({ name, image, time, stage }) {
  return (
    <div className="artist-card">
      <img src={image} alt={name} className="artist-image" />
      <div className="artist-info">
        <h3>{name}</h3>
        <p>{time} - {stage}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
