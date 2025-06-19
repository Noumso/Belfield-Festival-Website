import React, { useState } from 'react';
import axios from 'axios';

function AddArtist() {
  const [artist, setArtist] = useState({ name: '', description: '', image: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/artists', artist);
      setMessage('Artiste ajouté avec succès 🎉');
      setArtist({ name: '', description: '', image: '' });
    } catch (err) {
      setMessage("Erreur lors de l'ajout ❌");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Ajouter un artiste</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={artist.name} onChange={handleChange} required />
        <br />
        <textarea name="description" placeholder="Description" value={artist.description} onChange={handleChange} required />
        <br />
        <input type="text" name="image" placeholder="URL de l'image" value={artist.image} onChange={handleChange} />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddArtist;
