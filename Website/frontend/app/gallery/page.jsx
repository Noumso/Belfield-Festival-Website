'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/gallery');
        const data = await res.json();
        setGallery(data);
      } catch (err) {
        console.error('Failed to fetch gallery:', err);
      }
    };
    fetchGallery();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F0F5A] to-[#FF8200] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Galerie du Festival
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center overflow-visible">
          {gallery.map((item) => (
            <div
              key={item._id}
              className="
                bg-white 
                rounded-xl 
                shadow-lg 
                flex flex-col 
                transform-gpu 
                transition-transform 
                duration-300 
                ease-in-out 
                hover:scale-125 
                hover:z-10
                origin-center
                overflow-visible
              "
              style={{ width: '80%' }} 
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.url || '/images/placeholder.png'}
                  alt={item.title || 'Image de la galerie'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-[#4F0F5A] mb-1">
                  {item.title || 'Sans titre'}
                </h2>
                {item.caption && <p className="text-gray-700 text-sm mb-2">{item.caption}</p>}
                {item.photographer && <p className="text-sm text-[#FF8200]">📸 {item.photographer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
