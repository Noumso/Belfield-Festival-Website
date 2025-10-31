'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaInstagram, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

export default function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/artists');
        const data = await res.json();

        // 並び順(order)でソート
        const sorted = data.sort((a, b) => a.order - b.order);
        setArtists(sorted);

        console.log('Fetched artists:', sorted);
      } catch (err) {
        console.error('Failed to fetch artists:', err);
      }
    };
    fetchArtists();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F0F5A] to-[#FF8200] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-white text-center mb-4 font-bbh">
          LINE-UP 2025
        </h1>
        <p className="text-xl text-white text-center mb-12 italic">
          Des talents locaux et internationaux réunis sur une même scène.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {artists.map((artist) => (
            <div
              key={artist._id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl w-80 flex flex-col transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={artist.image || '/images/placeholder.png'}
                alt={artist.name}
                className="w-full h-64 object-cover"
              />

              {/* Text */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#4F0F5A] mb-1">
                    {artist.name}
                  </h2>
                  {artist.style && (
                    <p className="text-[#FF8200] font-semibold mb-2">
                      {artist.style}
                    </p>
                  )}
                  <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                    {artist.bio}
                  </p>
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-4 mb-4">
                  {artist.socials?.instagram && (
                    <Link
                      href={artist.socials.instagram}
                      target="_blank"
                      className="text-[#4F0F5A] hover:text-[#FF8200] text-xl"
                    >
                      <FaInstagram />
                    </Link>
                  )}
                  {artist.socials?.soundcloud && (
                    <Link
                      href={artist.socials.soundcloud}
                      target="_blank"
                      className="text-[#4F0F5A] hover:text-[#FF8200] text-xl"
                    >
                      <FaSoundcloud />
                    </Link>
                  )}
                  {artist.socials?.spotify && (
                    <Link
                      href={artist.socials.spotify}
                      target="_blank"
                      className="text-[#4F0F5A] hover:text-[#FF8200] text-xl"
                    >
                      <FaSpotify />
                    </Link>
                  )}
                  {artist.socials?.youtube && (
                    <Link
                      href={artist.socials.youtube}
                      target="_blank"
                      className="text-[#4F0F5A] hover:text-[#FF8200] text-xl"
                    >
                      <FaYoutube />
                    </Link>
                  )}
                </div>

                {/* Button */}
                <Link
                  href={`/artists/${artist._id}`}
                  className="bg-[#FF8200] hover:bg-[#e67200] text-white text-center py-2 rounded-full font-semibold transition"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
