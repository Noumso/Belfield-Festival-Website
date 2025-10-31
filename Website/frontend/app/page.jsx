"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// 🖼️ list of festival images
const festivalImages = [
  "/images/festival1.jpg",
  "/images/festival2.jpg",
  "/images/festival3.jpg",
  "/images/festival4.jpg",
  "/images/festival5.jpg",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === festivalImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // countdown effect
  useEffect(() => {
    const targetDate = new Date("2026-08-15T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer
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

  // 🎸 Line-up
  const lineup = [
    "MATRAKK", "AMYGDALA", "FENRICK", "A5KM", "EARGASM GOD",
    "NURE", "KICHTA", "D'RAM", "BEL CREW", "BEN CANDEL",
    "BENKEN", "GABRAIZE", "EUROPE", "KATE SELECTA B2B JAKARTA",
    "LALUDE", "MARCEL DK B2B MILIORYANDO", "NAT3", "SEG"
  ];

  return (
    <div>
       {/* ===== Section 1: Hero avec slider ===== */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-black text-white overflow-hidden">
        {/* 🖼️ Image slider */}
         {festivalImages.map((src, index) => (
          <Image
              key={index}
              src={src}
              alt={`Festival ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
          />
        ))}

        {/* 🔳 Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

        {/* 🎤 Title + Info + Countdown */}
          <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-bbh">
            BELFIELD FESTIVAL 2025
          </h1>
            <p className="text-2xl md:text-3xl mb-4">
              15 & 16 AOÛT – PARC DE LA LÈRE, CAUSSADE
            </p>
            <p className="text-xl italic mb-8">
            “Deux jours de musique, d’énergie et de liberté au cœur du Tarn-et-Garonne.”
            </p>

            {/* ⏳ Countdown */}
            <div className="mt-10 mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                ⏳ Jusqu'au prochain festival (15 et 16 août 2026)
              </h3>
              <div className="text-3xl font-bold tracking-wide">
                {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </div>
            </div>

            {/* 🎟 Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
              <Link
                href="/tickets"
                className="bg-orange hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
              >
                🎟 Réservez vos places
              </Link>
              <Link
                href="/volunteer"
                className="bg-transparent border border-white hover:bg-white hover:text-[#4F0F5A] font-bold py-3 px-8 rounded-full transition"
              >
                🤝 Devenez bénévole
              </Link>
            </div>
          </div>
      </section>
      {/* SECTION 2 - L’expérience Belfield */}
     <section className="bg-[#FF8200] text-white py-16 font-roboto">
     <div className="max-w-6xl mx-auto px-6 md:px-10">
      {/* Titre */}
      <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold text-center mb-4">
        L’expérience Belfield
      </h2>
      <p className="scroll-animate opacity-0 italic text-center text-lg md:text-xl mb-12">
        Une aventure sonore et humaine unique, née de la passion et de l’amitié.
      </p>

      {/* Contenu principal */}
      <div className="scroll-animate opacity-0 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Colonne gauche - texte */}
      <div className="md:w-1/2 space-y-5">
        <p className="text-lg md:text-xl leading-relaxed">
          En 2025, le Belfield Festival revient plus fort que jamais pour sa 6ᵉ édition.
          Deux jours de fête électro et techno, un cadre naturel exceptionnel, une ambiance
          vibrante et 2000 festivaliers venus partager la même passion.
        </p>

        <ul className="text-lg md:text-xl leading-relaxed space-y-2">
          <li>✨ Des shows enflammés</li>
          <li>🫶 65 bénévoles dévoués</li>
          <li>🎧 20 artistes sur deux scènes</li>
          <li>🔥 Et une atmosphère qu’on n’oublie jamais.</li>
        </ul>
      </div>

      {/* Colonne droite - image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/home_photo1.jpg"
          alt="Expérience Belfield"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </div>
    </div>
      </div>
      </section>
      {/* SECTION 3 - Les temps forts de 2025 */}
      <section className="bg-[#4F0F5A] text-white py-16 font-roboto">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
    
      {/* Titre */}
      <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold text-center mb-4">
        Les temps forts de 2025
      </h2>
      <p className="scroll-animate opacity-0 italic text-center text-lg md:text-xl mb-12">
        Du son, du fun, et un brin de folie.
      </p>

      {/* Contenu principal */}
      <div className="scroll-animate opacity-0 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Texte à gauche */}
      <div className="md:w-1/2 space-y-5 text-lg md:text-xl leading-relaxed">
        <p>
          • <span className="font-semibold">Vendredi 15 août : 18h – 2h</span><br />
          Première nuit de fête avec une programmation explosive.
        </p>
        <p>
          • <span className="font-semibold">Samedi 16 août : 14h – 3h</span><br />
          Après-midi “Oies-lympiades” (épreuves sportives et surprises 🏆)<br />
          ◦ Seconde soirée jusqu’au bout de la nuit.
        </p>
        <p className="text-orange-300 font-semibold">
          🎁 Le grand gagnant des Oies-lympiades a remporté… une place pour le Belfield à vie !
        </p>
      </div>

      {/* Image à droite */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/home_photo3.jpg"
          alt="Les temps forts de Belfield Festival"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
        </div>
      </div>
      </div>
      </section>
      {/* SECTION 4 - L’univers du festival */}
      <section className="bg-[#FF8200] text-white py-16 font-roboto">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
    
      {/* Titre */}
      <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold text-center mb-4">
        L’univers du festival
      </h2>
      <p className="scroll-animate opacity-0 italic text-center text-lg md:text-xl mb-12">
        Bien plus qu’un festival : une expérience complète.
      </p>

      {/* Contenu principal */}
       <div className="scroll-animate opacity-0 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Image à gauche */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/home_photo4.jpg"
          alt="L’univers du festival Belfield"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </div>

      {/* Texte à droite */}
      <div className="md:w-1/2 space-y-5 text-lg md:text-xl leading-relaxed">
        <p>
          Tatouages, friperies, paillettes, prévention, foodtrucks, merchandising…<br />
          Tout au long du week-end, le Belfield, c’est un petit village éphémère où chaque détail compte.
        </p>
        <p>
          Et pour ton confort, un camping à moins de 500 mètres avec accès aux douches, 
          en partenariat avec la mairie de Caussade.
        </p>
        </div>
       </div>
      </div>
     </section>
      {/* SECTION 5 - Les artistes */}
      <section className="bg-[#4F0F5A] text-white py-24 font-roboto scroll-animate opacity-0">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-12">
        {/* --- left text */}
          <div className="w-full md:w-4/5 space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-center">🎶Les artistes</h2>
              <p className="italic text-lg text-gray-200 text-center">
                 Une sélection d’artistes qui font vibrer la scène électro et techno.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-center md:text-justify">
                De <strong>Eargasm God</strong> à <strong>Fenrick</strong>, en passant par <strong>Matrakk</strong>,
                <strong> A4KM</strong> et bien évidemment le <strong>Bel’Crew</strong>, le Belfield 2025 promet une
                programmation puissante, éclectique et inoubliable.
              </p>

            {/* --- Stylish Line Up --- */}
            <div className="mt-10">
              <h3 className="text-3xl font-extrabold mb-6 tracking-wide text-center">
                🎧 Line Up
              </h3>

             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg font-semibold uppercase tracking-wide">
               {[
                  "Matrakk", "Amygdala", "Fenrick", "A5KM", "Eargasm God",
                  "Nure", "Kichta", "D'Ram", "Bel Crew", "Ben Candel",
                  "Benken", "Gabraize", "Europe", "Kate Selecta B2B Jakarta",
                  "Lalude", "Marcel DK B2B Milioryando", "Nat3", "Seg"
                ].map((artist, index) => (
                <div
                  key={index}
                  className="bg-white/10 hover:bg-white/20 transition-colors duration-300 rounded-lg py-3 px-4 text-center shadow-md hover:scale-105 transform"
                >
                  {artist}
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* --- image at bottom center --- */}
            <div className="w-full flex justify-center mt-12">
              <img
                src="/images/home_photo2.jpg"
                alt="Artistes du Belfield Festival"
                className="rounded-2xl shadow-lg w-full max-w-2xl object-cover"
              />
            </div>
          </div>
        </section>
        {/* SECTION 6 - Rejoins l’équipe */}
        <section className="bg-[#FF8200] text-white py-24 font-roboto scroll-animate opacity-0">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
    
          {/* --- left text --- */}
          <div className="md:w-1/2 space-y-6 scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold animate-slideInUp">
              Rejoins l’équipe 💪
            </h2>
            <p className="italic text-lg md:text-xl mb-4 animate-slideInUp delay-100">
              Le Belfield, c’est aussi une famille.
            </p>

            <p className="text-base md:text-lg leading-relaxed animate-slideInUp delay-200">
              Chaque édition, plus de 60 bénévoles participent à faire vivre le festival.<br />
              Que tu sois motivé, créatif ou juste curieux, viens vivre l’expérience de l’intérieur.
            </p>

            <p className="italic font-bold text-lg md:text-xl mt-4 animate-slideInUp delay-300">
              “Rejoignez l’expérience, devenez bénévole.”
            </p>

              <a
                href="https://docs.google.com/forms/d/103kxFBL0xEYUb_YrmIypigL-HEvkz8DvHSP_czfN5rE/edit?pli=1" // ← Google Form link here
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-white text-[#FF8200] font-bold rounded-lg hover:bg-gray-100 transition animate-slideInUp delay-400"
              >
              👉 S’inscrire
              </a>
            </div>

            {/* --- right image --- */}
              <div className="md:w-1/2 flex justify-center scroll-animate opacity-0 animate-slideInUp delay-200">
                <Image
                  src="/images/home_photo5.jpg"
                  alt="Bénévoles du Belfield Festival"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </section>
          {/* SECTION 7 - Souvenirs & émotions */}
          <section className="bg-[#4F0F5A] text-white py-24 font-roboto scroll-animate opacity-0">
             <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">

            {/* --- left image --- */}
            <div className="md:w-1/2 flex justify-center scroll-animate opacity-0 animate-slideInUp delay-200">
              <Image
                src="/images/home_photo6.jpg" 
                alt="Souvenirs du Belfield Festival"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>

              {/* --- right text + buttons --- */}
              <div className="md:w-1/2 flex flex-col justify-center space-y-6 scroll-animate opacity-0">
                <h2 className="text-4xl md:text-5xl font-bold animate-slideInUp">
                  📸 Souvenirs & émotions
                </h2>
              <p className="italic text-lg md:text-xl mb-4 animate-slideInUp delay-100">
                Revivez les moments forts des éditions précédentes.
              </p>

              <p className="text-base md:text-lg leading-relaxed animate-slideInUp delay-200">
                Car le Belfield, c’est aussi des sourires, des danses, et des souvenirs à la pelle.
              </p>

                {/* Buttons group */}
                <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0 justify-start animate-slideInUp delay-300">
                  <a
                    href="/festival"
                    className="inline-block px-5 py-3 bg-white text-[#4F0F5A] font-bold rounded-lg hover:bg-gray-100 transition"
                  >
                  Édition 2025
                  </a>
                  <a
                    href="/edition-2024"
                    className="inline-block px-5 py-3 bg-white text-[#4F0F5A] font-bold rounded-lg hover:bg-gray-100 transition"
                  >
                  Édition 2024
                  </a>
                  <a
                    href="/edition-2023"
                    className="inline-block px-5 py-3 bg-white text-[#4F0F5A] font-bold rounded-lg hover:bg-gray-100 transition"
                  >
                  Édition 2023
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}