import Image from "next/image";

export default function ArtistCard({ name, genre, bio, image }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{genre}</p>
        <p className="mt-2 text-gray-700 text-sm">{bio}</p>
      </div>
    </div>
  );
}
