"use client";
import { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";

export default function ArtistList() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const res = await fetch("http://localhost:5000/api/artists"); // ← バックエンドURLに合わせて変更
        const data = await res.json();
        setArtists(data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArtists();
  }, []);

  if (loading) {
    return <p className="text-center mt-8 text-gray-500">Loading artists...</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {artists.map((artist) => (
        <ArtistCard
          key={artist._id}
          name={artist.name}
          genre={artist.genre}
          bio={artist.bio}
          image={artist.image}
        />
      ))}
    </div>
  );
}
