"use client";

import { useEffect } from "react";
import Image from "next/image";


export default function InfoPage() {
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
      <section className="bg-[#4F0F5A] py-24 font-roboto">
        <div className="container mx-auto px-6 md:px-12 text-center space-y-8">

          {/*titre */}
          <div className="scroll-animate opacity-0 animate-slideInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              À PROPOS
            </h1>
            <p className="italic text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              “Une aventure humaine née d’amitié et de passion.”
            </p>
          </div>

          {/* contenu */}
          <h2 className="scroll-animate opacity-0 text-4xl md:text-5xl font-bold animate-slideInUp delay-200 mt-12">
            💫 L’histoire du Belfield Festival
          </h2>
          <p className="scroll-animate opacity-0 shiny-text italic text-lg md:text-xl text-purple-100 animate-slideInUp delay-300 max-w-3xl mx-auto">
            Une aventure née de la passion, de l’amitié et d’un rêve commun : faire vibrer le Sud-Ouest au son de la musique électronique.
          </p>

          <div className="max-w-4xl mx-auto text-left md:text-justify text-lg leading-relaxed space-y-4 animate-slideInUp delay-400">
            <p>
              Le Belfield Festival, c’est avant tout une histoire humaine.
              Né dans le Tarn-et-Garonne, à Caussade, le projet voit le jour grâce à trois amis —{" "}
              <strong className="text-[#FF8200]">Jules Derramond, Gary Nicaise et Ludovic Bourg</strong> — unis par leur amour de la musique, leur créativité
              et leur envie de partager une énergie unique.
            </p>
            <p>
              D’abord une idée entre passionnés, le festival a grandi d’année en année pour devenir aujourd’hui{" "}
              <strong className="text-[#FF8200]">l’un des rendez-vous incontournables de la scène électro/techno du Sud-Ouest</strong>.
            </p>
            <p>
              Après plusieurs éditions réussies, des collaborations avec le{" "}
              <strong className="text-[#FF8200]">Connexion Live de Toulouse</strong>, et des milliers de festivaliers conquis,
              l’équipe continue de repousser les limites de ce que peut être un événement musical.
            </p>
          </div>

          {/* image */}
          <div className="scroll-animate opacity-0 animate-slideInUp delay-500 mt-12 flex justify-center">
            <Image
              src="/images/image_for_history.jpg" 
              alt="Le Belfield Festival"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full max-w-3xl h-auto"
            />
          </div>
        </div>
      </section>
      {/* SECTION - Nos valeurs */}
      <section className="bg-[#FF8200] text-white py-24 font-roboto scroll-animate opacity-0">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">

          {/* --- left text --- */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6 scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold animate-slideInUp">
              Nos valeurs
            </h2>
            <p className="italic text-lg md:text-xl mb-4 animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500">
              Fête, partage et liberté : trois mots qui définissent l’esprit Belfield.
            </p>

              <div className="text-lg md:text-xl leading-relaxed space-y-3">
              <p>Chaque édition du Belfield Festival repose sur des valeurs fortes :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>L’authenticité</strong> : un événement fait par des passionnés, pour des passionnés.</li>
                  <li><strong>La convivialité</strong> : un cadre chaleureux, une ambiance familiale et bienveillante.</li>
                  <li><strong>L’inclusivité</strong> : un espace ouvert à tous, sans distinction.</li>
                  <li><strong>La fête responsable</strong> : prévention, sécurité et respect de l’environnement sont au coeur de nos engagements.</li>
                </ul>
              </div>
            </div>

          {/* --- right image placeholder*/}
            <div className="md:w-1/2 flex justify-center scroll-animate opacity-0 animate-slideInUp delay-200">
              <Image
                src="/images/info_photo1.jpg"
                alt="Valeurs du Belfield Festival"
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full max-w-sm h-auto"
              />
            </div>

        </div>
      </section>
      {/* SECTION - Une équipe, une famille */}
      <section className="bg-[#4F0F5A] text-white py-24 font-roboto scroll-animate opacity-0">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

        {/* --- left image --- */}
          <div className="md:w-1/2 flex justify-center scroll-animate opacity-0 animate-slideInUp delay-200">
            <Image
                src="/images/info_photo2.jpg"
                alt="Équipe de bénévoles du Belfield Festival"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* --- right text + button --- */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6 scroll-animate opacity-0 animate-slideInUp delay-300">
            <h2 className="text-4xl md:text-5xl font-bold">
              🎧 Une équipe, une famille
            </h2>

            <p className="text-base md:text-lg leading-relaxed">
              Derrière le festival, une équipe d’une soixantaine de bénévoles se mobilise chaque été pour donner
              vie à ce rêve collectif. Du montage des scènes à l’accueil du public, chaque sourire et chaque main tendue fait partie de la
              magie Belfield.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Et si toi aussi, tu veux vivre cette expérience de l’intérieur…
            </p>

            {/*button*/}
            <div className="flex justify-center">
              <a
                href="https://docs.google.com/forms/d/103kxFBL0xEYUb_YrmIypigL-HEvkz8DvHSP_czfN5rE/edit?pli=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#FF8200] hover:bg-[#E67300] text-white font-bold rounded-lg transition text-center"
              >
                Rejoins l’équipe de bénévoles
              </a>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION - Une ambiance unique */}
        <section className="bg-[#FF8200] text-white py-24 font-roboto scroll-animate opacity-0">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
    
          {/* --- left text --- */}
            <div className="md:w-1/2 space-y-6 scroll-animate opacity-0 animate-slideInUp delay-200">
              <h2 className="text-4xl md:text-5xl font-bold animate-slideInUp">
                🪩 Une ambiance unique
              </h2>
                <p className="text-lg md:text-xl leading-relaxed animate-slideInUp delay-100">
                  Le Belfield, c’est bien plus qu’un simple festival : c’est une expérience totale.
                </p>
                <p className="text-lg md:text-xl leading-relaxed animate-slideInUp delay-200">
                  Deux jours de musique électro et techno, un public vibrant,{" "}
                  <strong className="text-[#3B0842] font-bold">camping convivial</strong> à deux pas du site,{" "}
                  <strong className="text-[#3B0842] font-bold">des tatoueurs</strong>,{" "}
                  <strong className="text-[#3B0842] font-bold">des friperies</strong>,{" "}
                  <strong className="text-[#3B0842] font-bold">des foodtrucks</strong>,{" "}
                  <strong className="text-[#3B0842] font-bold">des stands de prévention</strong>, et surtout…{" "}
                  <strong className="text-[#3B0842] font-bold">une atmosphère que personne n’oublie</strong>.
                </p>
                <p className="text-lg md:text-xl leading-relaxed animate-slideInUp delay-300">
                  Chaque été, Caussade devient le théâtre d’un week-end hors du temps, entre sonorités envoûtantes,
                  moments de partage et liberté retrouvée sous les étoiles.
                </p>
              </div>

                {/* --- right image --- */}
                  <div className="md:w-1/2 flex justify-center scroll-animate opacity-0 animate-slideInUp delay-200">
                    <Image
                      src="/images/info_photo3.jpg"
                      alt="Ambiance Belfield Festival"
                      width={500}
                      height={400}
                      className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                  </div>
                </div>
        </section>
        {/* SECTION - Une identité bien à nous */}
        <section className="bg-[#4F0F5A] text-white py-24 font-roboto scroll-animate opacity-0">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

          {/* --- left image --- */}
          <div className="md:w-1/2 flex justify-center scroll-animate opacity-0 animate-slideInUp delay-200">
            <Image
                src="/images/info_photo4.jpg"
                alt="Identité du Belfield Festival"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* --- right text --- */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-6 scroll-animate opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold animate-slideInUp">
                🦆 Une identité bien à nous
              </h2>

              <p className="scroll-animate opacity-0 shiny-text italic text-lg md:text-xl text-purple-100 animate-slideInUp delay-300">
                L’oie, notre symbole, incarne parfaitement l’esprit du festival : libre, fidèle et un peu déjantée.
              </p>

              <div className="max-w-4xl text-left md:text-justify text-lg leading-relaxed space-y-4 animate-slideInUp delay-400">
                <p>
                  Elle guide chaque édition, chaque rencontre, chaque sourire.
                </p>
                <p>
                Le Belfield, c’est une communauté, un état d’esprit, une grande “oie-dyssée” musicale.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION - Envie de rejoindre l’aventure */}
        <section className="bg-[#FF8200] text-white py-24 font-roboto scroll-animate opacity-0">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

          {/* --- left text --- */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6 scroll-animate opacity-0 animate-slideInUp">
            <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
              💌 Envie de rejoindre l’aventure ?
            </h2>

            <p className="italic text-lg md:text-xl text-white max-w-xl leading-relaxed">
              Le Belfield Festival t’ouvre ses ailes !<br/>
              Que tu sois artiste, bénévole, partenaire ou simplement curieux, il y a toujours une place pour toi dans notre vol collectif.
            </p>

            <p className="font-bold text-lg md:text-xl">
              Caussade, Parc de la Lère — 15 & 16 août 2026
            </p>

            <a
              href="/events"
              className="inline-block px-6 py-3 bg-[#5A1F80] text-white font-bold rounded-lg hover:bg-[#290630] transition w-max"
            >
             🎟 Découvre le programme complet
            </a>
          </div>

          {/* --- right Google Map --- */}
          <div className="md:w-1/2 scroll-animate opacity-0 animate-slideInUp">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.8307997970874!2d1.545035075686011!3d44.16934681889623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac4224fa0f8207%3A0x7d7087ec8ba066b8!2sParc%20de%20la%20L%C3%A8re%2C%2082300%20Monteils!5e0!3m2!1sen!2sfr!4v1761065810993!5m2!1sen!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Belfield Festival Map"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
</main>
  );
}
