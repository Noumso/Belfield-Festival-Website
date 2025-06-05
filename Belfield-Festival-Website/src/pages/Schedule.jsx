import React from 'react';
import ArtistCard from '../components/ArtistCard';
import '../styles/Schedule.css';

function Schedule() {
  const artists = [
    {
      name: "D'RAM",
      image: "/images/D'RAM.jpg",
      time: '20:00',
      stage: 'Scène A',
    },
    {
      name: 'Lalude',
      image: '/images/Lalude.jpg',
      time: '22:00',
      stage: 'Scène A',
    },
    // Ajoute d'autres artistes ici
  ];

  return (
    <div className="schedule-container">
      <h2>Programmation</h2>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <ArtistCard
            key={index}
            name={artist.name}
            image={artist.image}
            time={artist.time}
            stage={artist.stage}
          />
        ))}
      </div>
    </div>
  );
}

export default Schedule;
