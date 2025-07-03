import React from 'react';
import '../styles/Gallery.css';

import img1 from '../assets/gallery/Belfield_2024-1.jpg';
import img2 from '../assets/gallery/Belfield_2024-2.jpg';
import img3 from '../assets/gallery/Belfield_2024-3.jpg';
import img4 from '../assets/gallery/Belfield_2024-4.jpg';


const Gallery = () => {
  const images = [img1, img2, img3, img4,];

  return (
    <div className="gallery-container">
      <h1>Galerie du Festival</h1>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Festival ${idx + 1}`} className="gallery-img" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
