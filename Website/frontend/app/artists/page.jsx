'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/artists');
        const data = await res.json();
        setArtists(data);
        console.log("Fetched artists:", data);
      } catch (err) {
        console.error("Failed to fetch artists:", err);
      }
    };
    fetchArtists();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F0F5A] to-[#FF8200] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Liste des artistes
        </h1>
        <p className="text-xl text-white text-center mb-12">
          Des talents locaux et internationaux, une seule scène : la vôtre.
        </p>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {artists.map((artist) => (
            <div
              key={artist._id}
              className="bg-white rounded-xl overflow-hidden shadow-2xl w-80 flex flex-col h-full"
            >
              {/* image */}
              <img
                src={artist.image || '/images/placeholder.png'}
                alt={artist.name}
                className="w-full h-64 object-cover"
              />

              {/* text*/}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[#4F0F5A] mb-1">
                    {artist.name}
                  </h2>
                  <p className="text-[#FF8200] font-semibold mb-2 text-sm">
                    {artist.style}
                  </p>
                  <p className="text-gray-700 text-sm mb-3 h-24 overflow-hidden">
                    {artist.bio}
                  </p>
                </div>

                {/* button */}
                <div className="flex justify-between items-center mt-2">
                  {artist.socials?.instagram && (
                    <Link
                      href={artist.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4F0F5A] hover:text-[#FF8200] font-bold text-sm"
                    >
                      Instagram
                    </Link>
                  )}
                  <Link
                    href={`/artists/${artist._id}`}
                    className="bg-[#FF8200] hover:bg-[#e67200] text-white px-3 py-1.5 rounded-full text-sm transition"
                  >
                    Voir les détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
