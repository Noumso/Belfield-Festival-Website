import ArtistCard from "../../components/ArtistCard";

export default async function Artistes() {
  const res = await fetch("http://localhost:5000/api/artists");
  const artists = await res.json();

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Nos Artistes 🦢</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist: any) => (
          <ArtistCard
            key={artist._id}
            name={artist.name}
            genre={artist.genre}
            image={artist.image}
          />
        ))}
      </div>
    </div>
  );
}
