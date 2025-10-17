"use client";

import { useState, useEffect, useRef } from "react";
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

  // for scroll animation
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === festivalImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

   // for Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInUp");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
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
    <div>
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

    {/* New Home Section */}
      <div className="bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 font-comic">
        {/*section titre*/}
        <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        ACCUEIL
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          
          {/* Left Image */}
          <div className="scroll-animate opacity-0 md:w-1/2 w-full">
            <Image
              src="/images/homepage_image1.jpg" 
              alt="Belfield Festival"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Right Text */}
          <div className="scroll-animate opacity-0 md:w-1/2 w-full">
            <p className="text-gray-800 text-lg md:text-xl mb-4">
              Le Belfield Festival est un événement musical incontournable qui se déroule chaque été, attirant des centaines de passionnés de musique venus découvrir des performances électrisantes d'artistes locaux et internationaux.
            </p>
            <p className="text-gray-800 text-lg md:text-xl mb-4">
              Situé dans un cadre naturel unique, le festival propose une expérience immersive où les festivaliers peuvent profiter de concerts en plein air, de scènes variées et d'animations créatives.
            </p>
            <p className="text-gray-800 text-lg md:text-xl mb-4">
              Véritable célébration de la culture musicale et de la convivialité, le Belfield Festival offre une atmosphère chaleureuse et festive, alliant la magie des paysages à des moments inoubliables.
            </p>
            <p className="text-gray-800 text-lg md:text-xl font-bold mb-4">
              CETTE ANNÉE, LE FESTIVAL S'ÉTEND SUR 2 JOURS. N'ATTENDEZ PLUS ET PRENEZ VOTRE BILLET DÈS MAINTENANT.
            </p>
            <p className="text-gray-800 text-lg md:text-xl font-bold">
              IL N'EST JAMAIS TROP TÔT POUR FAIRE LA FÊTE 🌟
            </p>
          </div>
        </div>
      </div>

   {/* LINE UP Section */}
<div className="bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 font-comic">
  <div className="max-w-6xl mx-auto px-4">
    
    {/*section titre*/}
    <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold text-center text-black mb-12 animate-fadeInUp">
      LINE UP
    </h2>
    
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      
      {/* left: artists list */}
      <ul className="scroll-animate opacity-0 md:w-1/2 w-full text-gray-800 text-lg md:text-xl space-y-2">
        {[
          "MATRAKK", "AMYGDALA", "FENRICK", "A5KM", "EARGASM GOD",
          "NURE", "KICHTA", "D'RAM", "BEL CREW", "BEN CANDEL",
          "BENKEN", "GABRAIZE", "EUROPE", "KATE SELECTA B2B JAKARTA",
          "LALUDE", "MARCEL DK B2B MILIORYANDO", "NAT3", "SEG"
        ].map((artist, index) => (
          <li
            key={index}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }} 
          >
            {artist}
          </li>
        ))}
      </ul>
      
      {/* right: image */}
      <div className="scroll-animate opacity-0 md:w-1/2 w-full opacity-0 animate-fadeInUp" style={{ animationDelay: `0.2s` }}>
        <Image
          src="/images/homepage_image2.jpg"
          alt="Line Up"
          width={600}
          height={600}
          className="rounded-lg object-cover w-full h-full shadow-lg"
        />
      </div>

    </div>
    </div>
  </div>
  {/* New Section: UN FESTIVAL PENSÉ POUR VOUS */}
<div className="bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 font-comic">
  <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold text-center mb-12 text-black animate-fadeInUp">
    🌲🏕️ UN FESTIVAL PENSÉ POUR VOUS :
  </h2>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4">
    {/* Item 1 */}
    <div className="scroll-animate opacity-0 md:w-1/3 bg-white/70 backdrop-blur-md rounded-lg p-6 text-center animate-fadeInUp">
      <div className="text-6xl mb-4">🏕️</div>
      <p className="text-gray-800 text-lg md:text-xl">
        Camping et parking gratuits pour vivre l’expérience à fond, en toute sérénité. Le tout à Caussade, au parc de la lère.
      </p>
    </div>

    {/* Item 2 */}
    <div className="scroll-animate opacity-0 md:w-1/3 bg-white/70 backdrop-blur-md rounded-lg p-6 text-center animate-fadeInUp">
      <div className="text-6xl mb-4">🍔</div>
      <p className="text-gray-800 text-lg md:text-xl">
        Une ambiance conviviale avec buvette et restauration rapide pour recharger les batteries.
      </p>
    </div>

    {/* Item 3 */}
    <div className="scroll-animate opacity-0 md:w-1/3 bg-white/70 backdrop-blur-md rounded-lg p-6 text-center animate-fadeInUp">
      <div className="text-6xl mb-4">🦎</div>
      <p className="text-gray-800 text-lg md:text-xl">
        Plongez dans l’univers festivalier avec des tatoueurs sur place, des friperies et des stands pour dénicher des pépites.
      </p>
    </div>
  </div>
</div>
{/* New Section: Call to Action & Archive */}
<div className="bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 font-comic">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-col gap-8">
    
    {/* Title + Button */}
    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
      <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold text-black mb-4 md:mb-0">
        ALORS, PRÊT À REJOINDRE L’AVENTURE ?
      </h2>
      <a
        href="/tickets"
        className="scroll-animate opacity-0 bg-gradient-to-b from-green-500 to-green-700 text-white px-8 py-3 rounded-full 
             text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 
             transition-all duration-300 whitespace-nowrap text-center inline-block"
      >
      Billetterie 6e édition
      </a>
    </div>

  {/* Archive Description with Image */}
  <div className="mb-6 flex flex-col md:flex-row items-center gap-8">
  
  {/* Left: Image */}
  <div className="scroll-animate opacity-0 md:w-1/2 w-full">
    <Image
      src="/images/homepage_image3.jpg"
      alt="Belfield Festival 2024"
      width={600}
      height={400}
      className="rounded-lg object-cover w-full h-full"
    />
  </div>

  {/* Right: Text */}
  <div className="scroll-animate opacity-0 md:w-1/2 w-full">
    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-2">
      Belfield Festival 2024 – Archives
    </h3>
    <p className="text-gray-800 text-lg md:text-xl mb-4">
      Revivez les moments forts du Belfield Festival 2024 ! Découvrez une rétrospective de l’édition passée avec les meilleurs moments, des photos exclusives et les artistes qui ont marqué l’événement. Une occasion unique de revoir ou de découvrir l’ambiance incroyable du festival, de la scène principale aux surprises artistiques.
    </p>
    <a
      href="/festival" // link to archive page
      className="text-green-700 font-semibold underline hover:text-green-800 transition-colors text-lg md:text-xl"
    >
      Explorez l’archive complète et plongez dans l’édition 2024 du festival !
    </a>
    </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
    {/* Left Text Content */}
    <div className="scroll-animate opacity-0 md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Événements Connexion à Toulouse
      </h2>
      <p className="text-gray-800 text-lg mb-4">
        Le Belfield Festival n’est pas seulement un événement annuel. Revivez nos soirées exceptionnelles à Connexion Toulouse, 
        où nous avons fusionné musique et convivialité pour des événements mémorables.
      </p>
      <p className="text-gray-800 text-lg mb-4">
        Concerts, DJ sets et soirées à thème, chaque événement à Toulouse a été une célébration de la musique et de la communauté.
      </p>
      <a
        href="/evenements-toulouse"
        className="inline-block mt-4 text-green-700 font-semibold text-lg hover:underline"
      >
        Découvrez nos événements à Toulouse et ne manquez pas la prochaine expérience !
      </a>
    </div>

    {/* Right Image */}
    <div className="scroll-animate opacity-0 md:w-1/2 w-full">
      <img
        src="/images/homepage_image4.jpg"
        alt="Événements Connexion à Toulouse"
        className="rounded-lg shadow-lg object-cover w-full h-[350px]"
      />
    </div>
  </div>
  </div>
  {/* Section: Nos Prochains Événements */}
<div className="bg-gradient-to-b from-green-100 via-blue-50 to-blue-100 py-16 font-comic">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">

    {/* Left Image */}
    <div className="scroll-animate opacity-0 md:w-1/2 w-full">
      <img
        src="/images/homepage_image5.jpg"
        alt="Nos Prochains Événements"
        className="rounded-lg shadow-lg object-cover w-full h-[350px]"
      />
    </div>

    {/* Right Text Content */}
    <div className="scroll-animate opacity-0 md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Nos Prochains Événements
      </h2>
      <p className="text-gray-800 text-lg mb-4">
        Ne manquez pas nos futurs événements ! Restez connectés pour des annonces excitantes concernant le Belfield Festival 2025 et d’autres initiatives dans toute la région.
        Inscrivez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux pour être informé des dernières actualités.
      </p>
      <a
        href="/festival"
        className="inline-block mt-4 text-green-700 font-semibold text-lg hover:underline"
      >
        Soyez le premier à savoir ce qui se prépare – Abonnez-vous maintenant !
      </a>
      </div>
    </div>
  </div>
  </div>
</div>
  );
}
