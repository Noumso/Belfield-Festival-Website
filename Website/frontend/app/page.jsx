"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


// list of festival images
const festivalImages = [
  "/images/festival1.jpg",
  "/images/festival2.jpg",
  "/images/festival3.jpg",
  "/images/festival4.jpg",
  "/images/festival5.jpg",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === festivalImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-5xl h-[500px] md:h-[700px] overflow-hidden rounded-xl shadow-lg">
        
        {/* slide image */}
        {festivalImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Festival ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

        {/* title */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center z-20 pt-16">
          <h1
            key={currentIndex} // to retrigger animation
            className="font-bbh text-5xl md:text-7xl text-white bg-black/50 rounded-lg px-6 py-3 mb-4 animate-fadeInUp"
          >
            Belfield Festival
          </h1>
          <p className="text-white text-2xl md:text-3xl bg-black/40 rounded-lg px-4 py-2 mb-2 animate-fadeInUp">
            15 — 16 Août 2025
          </p>
          <p className="text-white text-xl md:text-2xl bg-black/40 rounded-lg px-4 py-2 animate-fadeInUp">
            Parc de la Lère, Caussade, France
          </p>
        </div>

      </div>
    </div>
  );
}