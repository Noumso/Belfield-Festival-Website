import './Info.css';

function Info() {
  return (
    <div className="info-container">
      <h1>ℹ️ Informations Pratiques</h1>

      <section>
        <h2>📍 Lieu</h2>
        <p>Le festival se déroule au <strong>Parc de Belfield, 75000 Paris</strong>, dans un cadre verdoyant en plein cœur de la ville.</p>
      </section>

      <section>
        <h2>🚆 Accès</h2>
        <ul>
          <li><strong>Métro :</strong> Ligne 6 – Station Belfield</li>
          <li><strong>Bus :</strong> Ligne 42, arrêt "Parc de Belfield"</li>
          <li><strong>Voiture :</strong> Parking gratuit à proximité du site</li>
        </ul>
      </section>

      <section>
        <h2>🕒 Horaires</h2>
        <p><strong>Vendredi :</strong> 18h00 – 23h30</p>
        <p><strong>Samedi :</strong> 16h00 – 00h00</p>
      </section>

      <section>
        <h2>🎟️ Billetterie</h2>
        <p>Les billets sont disponibles via notre partenaire <strong>Shotgun</strong>.</p>
        <a href="https://shotgun.live/fr/festivals/belfield-festival-2025" target="_blank" rel="noopener noreferrer" className="btn-ticket">Accéder à la billetterie</a>
      </section>

      <section>
        <h2>❓ Questions fréquentes</h2>
        <p><strong>Y a-t-il des stands de restauration ?</strong> Oui, food trucks et buvettes seront disponibles sur place.</p>
      </section>
    </div>
  );
}

export default Info;