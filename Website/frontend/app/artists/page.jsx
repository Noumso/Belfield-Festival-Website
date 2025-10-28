'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch('/api/artists');
        const data = await res.json();
        setArtists(data);
      } catch (err) {
        console.error("Failed to fetch artists:", err);
      }
    };
    fetchArtists();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInUp");
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.remove("animate-slideInUp");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4F0F5A] to-[#FF8200] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-4 scroll-animate opacity-0">
          Liste des artistes
        </h1>
        <p className="text-xl text-white text-center mb-12 scroll-animate opacity-0">
          Des talents locaux et internationaux, une seule scène : la vôtre.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={artist._id}
              className="bg-white rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 scroll-animate opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#4F0F5A] mb-2">
                  {artist.name}
                </h2>
                <p className="text-[#FF8200] font-semibold mb-3">
                  {artist.style}
                </p>
                <p className="text-gray-700 mb-4">{artist.bio}</p>
                <div className="flex justify-between items-center">
                  <Link
                    href={artist.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4F0F5A] hover:text-[#FF8200] font-bold"
                  >
                    Instagram
                  </Link>
                  <Link
                    href={`/artists/${artist._id}`}
                    className="bg-[#FF8200] hover:bg-[#e67200] text-white px-4 py-2 rounded-full transition"
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
