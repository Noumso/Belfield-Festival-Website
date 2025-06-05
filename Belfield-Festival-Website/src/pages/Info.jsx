import React from 'react';
import '../styles/Info.css';

function Info() {
  return (
    <div className="info-container">
      <h2>Informations Pratiques</h2>
      <p>Lieu : Parc de La Lère, Caussade</p>
      <p>Date : 15-16 août 2025</p>
      <p>Accès : Gare de Caussade</p>
      <p>Billetterie : <a href="https://billetterie.belfieldfestival.com">billetterie.belfieldfestival.com</a></p>
    </div>
  );
}

export default Info;
