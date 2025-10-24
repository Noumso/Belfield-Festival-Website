"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function FestivalPage() {
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
    <main className="text-white font-roboto">
      <section  className="bg-[#4F0F5A] min-h-screen py-24 pb-24">
      {/* titre */}
      <div className="text-center scroll-animate opacity-0 animate-slideInUp">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Retour sur l’édition 2025
        </h1>
        <p className="italic text-xl md:text-2xl text-purple-100">
          Une édition hors norme, vibrante et inoubliable.
        </p>
      </div>
      {/* contenu */}
      <div className="max-w-4xl mx-auto text-center mt-12 space-y-6 scroll-animate opacity-0 animate-slideInUp delay-100 text-lg md:text-xl leading-relaxed">
        <p>
          Les 15 et 16 août 2025,{" "}
          <span className="font-bold text-[#FF8200]">
            le Parc de la Lère à Caussade
          </span>{" "}
          s’est transformé en un véritable temple de la musique électronique.
        </p>
        <p>
          Pendant deux jours,{" "}
          <span className="font-bold text-[#FF8200]">plus de 2000 festivaliers</span>{" "}
          ont vibré au rythme des{" "}
          <span className="font-bold text-[#FF8200]">20 artistes</span>{" "}
          programmés, entre{" "}
          <span className="font-bold text-[#FF8200]">électro percutante</span>,{" "}
          <span className="font-bold text-[#FF8200]">techno envoûtante</span> et{" "}
          <span className="font-bold text-[#FF8200]">ambiances lumineuses</span> à couper le souffle.
        </p>
        <p>
          L’édition 2025 restera gravée comme un tournant dans l’histoire du Belfield : deux scènes, des shows intenses et une atmosphère à la fois
          festive, libre et profondément humaine.
        </p>
        <p>
          Des <span className="font-bold text-[#FF8200]">basses puissantes</span>, des{" "}
          <span className="font-bold text-[#FF8200]">lumières hypnotiques</span>, des{" "}
          <span className="font-bold text-[#FF8200]">sourires partout</span> — et ce sentiment collectif d’être exactement au bon endroit, au bon moment.
        </p>
      </div>
      <div className="scroll-animate opacity-0 mt-12 flex justify-center animate-slideInUp delay-300">
        <Image
          src="/images/edition2025_photo1.jpg"  
          alt="Festival 2025"
          width={800} 
          height={500}
          className="rounded-lg shadow-lg object-cover w-full max-w-3xl h-auto"
        />
      </div>
      </section>
      {/* SECTION - Moments forts */}
      <section className="bg-[#FF8200] text-white py-24 font-roboto scroll-animate opacity-0">
        <div className="container mx-auto px-6 md:px-12 text-center space-y-8">

          {/* titre */}
          <h2 className="text-4xl md:text-5xl font-bold animate-slideInUp delay-200">
            Des moments forts, du son et des émotions.
          </h2>

          {/* contenu */}
          <div className="max-w-4xl mx-auto text-left md:text-justify text-lg leading-relaxed space-y-4 animate-slideInUp delay-300">
            <p>
              Le vendredi soir a donné le ton : dès 18h, les platines ont pris feu, lançant une première nuit
              explosive jusqu’à 2h du matin.
            </p>
            <p>
              Le samedi a prolongé la fête avec <strong className="text-[#4F0F5A]">une après-midi d’“Oies-lympiades”</strong> légendaire : entre défis
              sportifs et fous rires, les participants se sont affrontés dans la bonne humeur pour tenter de
              remporter <strong className="text-[#4F0F5A]">une place pour le Belfield à vie 🏆</strong>.
            </p>
            <p>
              Et dès 18h, les festivaliers ont replongé dans <strong className="text-[#4F0F5A]">une seconde nuit de fête</strong> jusqu’à 3h du matin, bercés
              par les sets envoûtants d’artistes comme <strong className="text-[#4F0F5A]">Eargasm God,</strong> 
              <strong className="text-[#4F0F5A]">Bel’Crew,</strong> <strong className="text-[#4F0F5A]">Lalude,</strong> 
              <strong className="text-[#4F0F5A]">Gabraize,</strong> <strong className="text-[#4F0F5A]">D’Ram</strong> et
              bien d’autres.
            </p>

            {/* images */}
              <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                <div className="flex-1 scroll-animate opacity-0 animate-slideInUp delay-400">
                  <Image
                    src="/images/edition2025_photo2.jpg"
                    alt="Eargasm God"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="flex-1 scroll-animate opacity-0 animate-slideInUp delay-500">
                  <Image
                    src="/images/edition2025_photo3.jpg"
                    alt="Bel'Crew"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION - Village festivalier */}
        <section className="bg-[#4F0F5A] text-white py-24 font-roboto scroll-animate opacity-0">
          <div className="container mx-auto px-6 md:px-12 text-center space-y-8">

        {/* titre */}
          <h2 className="text-4xl md:text-5xl font-bold animate-slideInUp delay-200">
            Un village festivalier vivant et créatif
          </h2>

        {/* contenu */}
          <div className="max-w-4xl mx-auto text-left md:text-justify text-lg leading-relaxed space-y-4 animate-slideInUp delay-300">
          <p>
            Tout au long du week-end, le site a pris des airs de petit village éphémère :
          </p>
          <ul className="list-none space-y-1 mt-2 mb-4">
            <li><strong className="text-[#FFD966]">🧃 foodtrucks gourmands</strong></li>
            <li><strong className="text-[#FFD966]">🧥 friperies stylées</strong></li>
            <li><strong className="text-[#FFD966]">🪞 stands de paillettes et tatouages</strong></li>
            <li><strong className="text-[#FFD966]">💬 espaces de prévention</strong></li>
          </ul>
          <p>
            et bien sûr, une <strong className="text-[#FF8200]">boutique Belfield</strong> où les festivaliers ont pu repartir avec vêtements et accessoires
            exclusifs.
          </p>
          <p>
            Pour le confort de tous, un <strong className="text-[#FF8200]">camping gratuit</strong> était installé à moins de 500 mètres du site, avec des
            <strong className="text-[#FF8200]"> sessions de douches</strong> mises en place en partenariat avec la 
            <strong className="text-[#FF8200]"> mairie de Caussade</strong> — de quoi récupérer 
            dans les meilleures conditions avant de repartir pour une nouvelle nuit de fête.
          </p>

          {/* images */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            <div className="scroll-animate opacity-0 animate-slideInUp delay-400">
              <Image
                src="/images/edition2025_photo4.jpg"
                alt="Village festivalier 1"
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div className="scroll-animate opacity-0 animate-slideInUp delay-500">
              <Image
                src="/images/edition2025_photo5.jpg"
                alt="Village festivalier 2"
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div className="scroll-animate opacity-0 animate-slideInUp delay-600">
              <Image
                src="/images/edition2025_photo6.jpg"
                alt="Village festivalier 3"
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            <div className="scroll-animate opacity-0 animate-slideInUp delay-700">
              <Image
                src="/images/edition2025_photo7.jpg"
                alt="Village festivalier 4"
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            </div>
            </div>
          </div>
        </section>
        {/* SECTION - Équipe bénévole */}
        <section className="bg-[#FF8200] text-white py-24 font-roboto scroll-animate opacity-0 min-h-screen">
          <div className="container mx-auto px-6 md:px-12 text-center space-y-8">

           {/* titre */}
            <h2 className="text-4xl md:text-5xl font-bold animate-slideInUp delay-200">
              Une équipe, une famille, une vibe
            </h2>

            {/* contenu */}
            <div className="max-w-4xl mx-auto text-left md:text-justify text-lg leading-relaxed space-y-4 animate-slideInUp delay-300">
              <p>
                Derrière cette réussite, une{" "}
                <strong className="text-[#4F0F5A]">équipe de 65 bénévoles passionnés</strong>{" "}
                a donné vie au rêve Belfield. Des jours de préparation, des nuits de montage, des sourires
                constants et une énergie contagieuse ont permis à cette 6ᵉ édition d’être{" "}
                <strong className="text-[#4F0F5A]">la plus belle à ce jour</strong>.
              </p>
              <p>
                Le Belfield 2025, c’est une explosion d’émotions, un hymne à la fête, et une preuve que la musique
                rassemble — encore, toujours, et plus fort chaque année.
              </p>

              {/* images */}
              <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                <div className="flex-1 scroll-animate opacity-0 animate-slideInUp delay-400">
                  <Image
                    src="/images/edition2025_photo8.jpg"
                    alt="Belfield volonteers"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="flex-1 scroll-animate opacity-0 animate-slideInUp delay-500">
                  <Image
                    src="/images/edition2025_photo9.jpg"
                    alt="Belfield volunteers"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
