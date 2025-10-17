"use client";

import { useEffect } from "react";

export default function InfoPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInUp");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target); // 一度だけ発火
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
    <main className="min-h-screen bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 font-comic">
      {/* titre */}
      <h1 className="scroll-animate opacity-0 text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">
        À PROPOS
      </h1>

      {/* contents */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* left: image */}
        <div className="scroll-animate opacity-0 md:w-1/2 w-full">
          <img
            src="/images/infopage_image1.jpg"
            alt="Belfield Festival"
            className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
          />
        </div>

        {/* right: text */}
        <div className="scroll-animate opacity-0 md:w-1/2 w-full text-gray-900">
          <h2 className="text-3xl font-bold mb-4">NOUVELLE ÉDITION</h2>
          <p className="text-lg leading-relaxed mb-2">
            Préparez-vous pour une <strong>6e édition explosive</strong> du Belfield Festival, 
            qui promet de transformer <strong>Caussade</strong> en capitale de la musique électronique 
            les <strong>14 et 15 août</strong> !
          </p>
          <p className="text-lg leading-relaxed">
            Cette année, nous passons à la vitesse supérieure : deux jours de fête, 
            une programmation de rêve et une expérience immersive unique.
          </p>
        </div>
      </div>

      {/* New Section: UN FESTIVAL PENSÉ POUR VOUS */}
      <div className="bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 mt-24 font-comic">
        <h2 className="scroll-animate opacity-0 text-3xl md:text-4xl font-bold text-center mb-12 text-black animate-fadeInUp">
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
         {/* 🎫 Section: VIVEZ L'EXPÉRIENCE À FOND ! */}
      <div className="scroll-animate opacity-0 max-w-5xl mx-auto text-center mt-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          🎫 VIVEZ L'EXPÉRIENCE À FOND !
        </h2>
        <a
          href="/tickets"
          className="text-green-700 font-semibold text-lg hover:text-green-800 underline transition-colors"
        >
          Réservez vos billets maintenant et assurez-vous de ne rien manquer !
        </a>
      </div>

      {/* 🎶 Section: AU PROGRAMME */}
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          AU PROGRAMME
        </h2>

        <p className="scroll-animate opacity-0 text-lg md:text-xl text-gray-800 text-center leading-relaxed mb-12">
          🎵 Des artistes internationaux de renom : Après avoir accueilli des légendes comme Tony Romera et Ansbro, 
          nous vous réservons cette année des performances enflammées de <strong>Eargasm God</strong>, 
          <strong> Bel'Crew</strong>, <strong>D'Ram</strong>, <strong>Lalude</strong> et <strong>Gabraize</strong>. 
          Préparez-vous à vibrer au rythme des meilleures sonorités électro et techno !
        </p>

        {/* 3 images side by side */}
        <div className="scroll-animate opacity-0 flex flex-col md:flex-row justify-center items-center gap-6">
          <img
            src="/images/infopage_image2.jpg"
            alt="Artiste 1"
            className="w-full md:w-1/3 h-[250px] object-cover rounded-xl shadow-lg"
          />
          <img
            src="/images/infopage_image3.jpg"
            alt="Artiste 2"
            className="w-full md:w-1/3 h-[250px] object-cover rounded-xl shadow-lg"
          />
          <img
            src="/images/infopage_image4.jpg"
            alt="Artiste 3"
            className="w-full md:w-1/3 h-[250px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
      </div>
        {/* Section: REJOIGNEZ-NOUS ET FAITES PARTIE DE LA 6E ÉDITION ! */}
<div className="bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 font-comic mt-24">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
    
    {/* Left: Image */}
    <div className="scroll-animate opacity-0 md:w-1/2 w-full">
      <img
        src="/images/infopage_image5.jpg"
        alt="Belfield Festival 6e édition"
        className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
      />
    </div>

    {/* Right: Text + Button */}
    <div className="scroll-animate opacity-0 md:w-1/2 w-full text-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        REJOIGNEZ-NOUS ET FAITES PARTIE DE LA 6E ÉDITION !
      </h2>
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Le Belfield Festival, c'est bien plus qu'un événement musical, c'est une immersion totale dans un univers où énergie, partage et bonnes vibrations règnent en maître. 
        Que vous soyez un fan inconditionnel de musique électronique ou un curieux en quête de nouvelles sensations, notre festival est l'endroit parfait pour faire des rencontres inoubliables et danser jusqu'au bout de la nuit sous les étoiles.
        <br />
        🎟️ N'attendez plus, prenez vos billets dès maintenant !
      </p>
      <a
        href="/tickets"
        className="bg-gradient-to-b from-green-500 to-green-700 text-white px-8 py-3 rounded-full 
               text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 
               transition-all duration-300 inline-block"
      >
        Achetez vos billets ici
      </a>
      </div>
      </div>
    </div>
    {/* Section: OUR LOCATION */}
  <div className="bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 font-comic mt-24">
   <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">

    {/* Left: Text with Travel Info in Card */}
  <div className="scroll-animate opacity-0 md:w-1/2 w-full flex flex-col justify-start gap-6">
   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
     📍 NOTRE LIEU :
   </h2>
   <p className="text-lg md:text-xl text-gray-900 mb-4">
     Parc de la Lère, Caussade
  </p>

  <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col gap-4">
    <div className="flex items-center gap-3 text-lg md:text-xl text-gray-900">
      <span className="text-2xl">🚗</span>
      <span>50 minutes en voiture de Toulouse</span>
    </div>
    <div className="flex items-center gap-3 text-lg md:text-xl text-gray-900">
      <span className="text-2xl">🚆</span>
      <span>50 minutes en train jusqu'à Caussade</span>
      <span className="text-gray-500">→</span>
      <span className="text-2xl">🚶</span>
       <span>Puis 15 minutes à pied</span>
     </div>

  </div>
</div>

    {/* Right: Map Image */}
    <div className="scroll-animate opacity-0 md:w-1/2 w-full flex flex-col items-center">
    <a href="https://www.google.com/maps/place/Parc+de+la+Lère,+Caussade" target="_blank" rel="noopener noreferrer">
    <img
      src="/images/map.JPG"
      alt="Map to Belfield Festival"
      className="rounded-2xl shadow-lg object-cover w-full h-[350px] hover:scale-105 transition-transform duration-300"
    />
    </a>
    {/* comment */}
    <p className="mt-2 text-sm text-gray-700 italic font-Bold">
      ☝️Cliquez pour ouvrir dans Google Maps
    </p>
    </div>
    </div>
  </div>
  {/* New Section: Join the Team */}
<div className="bg-gradient-to-b from-blue-100 via-green-50 to-green-100 py-16 font-comic">
  <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center gap-6">
    
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 scroll-animate opacity-0">
      🎧 REJOIGNEZ L’ÉQUIPE DU BELFIELD FESTIVAL !
    </h2>

    {/* Body */}
    <p className="text-lg md:text-xl text-gray-900 leading-relaxed scroll-animate opacity-0">
      Envie de vivre le festival de l’intérieur, de rencontrer des gens passionnés et de contribuer à un événement unique ?<br/>
      Devenez bénévole ! En échange de quelques heures d’aide, profitez d’avantages exclusifs et d’une expérience inoubliable.
    </p>

    {/* Highlight */}
    <p className="text-lg md:text-xl font-bold text-gray-900 mt-4 scroll-animate opacity-0">
      ✍️ Inscrivez-vous maintenant et faites partie de l’aventure !
    </p>

    {/* Button */}
    <a
      href="/contact" 
      className="mt-6 bg-gradient-to-b from-green-500 to-green-700 text-white px-8 py-3 rounded-full 
                 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                 transition-all duration-300 whitespace-nowrap inline-block scroll-animate opacity-0"
    >
      Je veux devenir bénévole
    </a>
  </div>
</div>
</main>
  );
}
