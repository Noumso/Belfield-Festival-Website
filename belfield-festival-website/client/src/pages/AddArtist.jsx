import React, { useState } from 'react';
import '../styles/AddArtist.css';

const AddArtist = () => {
  const [artist, setArtist] = useState({
    name: '',
    genre: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Artiste ajouté : ${artist.name}\nGenre : ${artist.genre}\nDescription : ${artist.description}`);
    // À remplacer par un appel backend plus tard
    setArtist({ name: '', genre: '', description: '', image: '' });
  };

  return (
    <div className="add-artist-container">
      <h1>Ajouter un artiste</h1>
      <form onSubmit={handleSubmit} className="add-artist-form">
        <label>Nom :</label>
        <input type="text" name="name" value={artist.name} onChange={handleChange} required />

        <label>Genre :</label>
        <input type="text" name="genre" value={artist.genre} onChange={handleChange} required />

        <label>Description :</label>
        <textarea name="description" value={artist.description} onChange={handleChange} required />

        <label>Image (URL) :</label>
        <input type="text" name="image" value={artist.image} onChange={handleChange} />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddArtist;
