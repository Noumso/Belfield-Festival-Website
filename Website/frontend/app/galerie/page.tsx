export default function Galerie() {
    const photos = [
      "/images/photo1.jpg",
      "/images/photo2.jpg",
      "/images/photo3.jpg",
      "/images/photo4.jpg"
    ];
  
    return (
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Galerie 🦢</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Photo ${i + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    );
  }
  