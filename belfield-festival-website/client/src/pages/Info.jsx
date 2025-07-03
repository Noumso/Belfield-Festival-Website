import React, { useState } from 'react';
import '../styles/Info.css';

const Info = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    type: 'standard',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation enregistrée pour ${formData.nom} (${formData.email}) - Billet ${formData.type}`);
  };

  return (
    <div className="ticket-container">
      <h1>Réserve ton billet</h1>

      <form className="ticket-form" onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />

        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Type de billet :</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="standard">Journée - 20€</option>
          <option value="vip">Week-end - 40€</option>
        </select>

        <button type="submit">Réserver</button>
      </form>

      <div className="ticket-external">
        <h2>Ou réserve via notre partenaire :</h2>
        <a href="https://shotgun.live/fr/festivals/belfield-festival-2025?fbclid=PAZXh0bgNhZW0CMTEAAaclQJMTtzBOITYwpMZ-l6QqijtjPaZwN-N4-90dAH1EKmgLMEO7ALruWqVuxA_aem_ObjGA9MzEDdWXqaYWq4_Qg">
          Réserver sur Shotgun
        </a>
      </div>
    </div>
  );
};

export default Info;
