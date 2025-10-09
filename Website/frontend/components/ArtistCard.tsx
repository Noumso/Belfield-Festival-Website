interface ArtistCardProps {
    name: string;
    genre: string;
    image: string;
  }
  
  export default function ArtistCard({ name, genre, image }: ArtistCardProps) {
    return (
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-400">{genre}</p>
        </div>
      </div>
    );
  }
  