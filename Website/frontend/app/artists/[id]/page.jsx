'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FaInstagram, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

export default function ArtistDetail() {
  const params = useParams();
  const { id } = params;
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/artists/${id}`);
        const data = await res.json();
        setArtist(data);
      } catch (err) {
        console.error('Failed to fetch artist:', err);
      }
    };
    fetchArtist();
  }, [id]);

  if (!artist) return <div className="text-center mt-20 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F0F5A] to-[#FF8200] py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] md:min-h-[700px]">
        
        {/* left: image */}
        <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[700px]">
          <Image
            src={artist.image || '/images/placeholder.png'}
            alt={artist.name}
            fill
            className="object-cover"
          />
        </div>

        {/* right: text*/}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4F0F5A] mb-4">{artist.name}</h1>

          {/* SNS link */}
          <div className="flex gap-4 mb-6 text-3xl">
            {artist.socials?.instagram && (
              <a
                href={artist.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F0F5A] hover:text-[#FF8200] transition"
              >
                <FaInstagram />
              </a>
            )}
            {artist.socials?.soundcloud && (
              <a
                href={artist.socials.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F0F5A] hover:text-[#FF8200] transition"
              >
                <FaSoundcloud />
              </a>
            )}
            {artist.socials?.spotify && (
              <a
                href={artist.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F0F5A] hover:text-[#FF8200] transition"
              >
                <FaSpotify />
              </a>
            )}
            {artist.socials?.youtube && (
              <a
                href={artist.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F0F5A] hover:text-[#FF8200] transition"
              >
                <FaYoutube />
              </a>
            )}
          </div>

          <p className="text-[#FF8200] font-semibold mb-4 text-lg md:text-xl">{artist.style}</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">{artist.bio}</p>
        </div>
      </div>
    </div>
  );
}
