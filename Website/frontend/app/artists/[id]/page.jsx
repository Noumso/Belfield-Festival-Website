'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ArtistDetail() {
  const params = useParams();
  const { id } = params;
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchArtist = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/artists/${id}`);
        const data = await res.json();
        setArtist(data);
      } catch (err) {
        console.error("Failed to fetch artist:", err);
      }
    };
    fetchArtist();
  }, [id]);

  if (!artist) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#4F0F5A] to-[#FF8200] flex items-center justify-center">
        <p className="text-white text-2xl">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F0F5A] to-[#FF8200] py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <img
            src={artist.image || '/images/placeholder.png'}
            alt={artist.name}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-[#4F0F5A] mb-4">
              {artist.name}
            </h1>
            <p className="text-[#FF8200] text-xl font-semibold mb-6">
              {artist.style}
            </p>
            <p className="text-gray-800 text-lg mb-8">{artist.bio}</p>
            {artist.socials?.instagram && (
              <a
                href={artist.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4F0F5A] hover:bg-[#3a0b43] text-white px-6 py-3 rounded-full transition"
              >
                Suivre sur Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
