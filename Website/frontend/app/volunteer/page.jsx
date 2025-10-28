"use client";
import { useEffect } from "react";

export default function VolunteerPage() {
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
    <section
      className="min-h-screen px-6 py-16 flex flex-col items-center justify-center bg-[#FF8200] text-white"
    >
      <div className="max-w-5xl w-full bg-white/80 text-[#4F0F5A] backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-10 border-2 border-[#4F0F5A] scroll-animate opacity-0">
        <h1 className="text-4xl font-extrabold text-center mb-6">💪 Deviens bénévole au Belfield !</h1>

        {/* --- Infos sur les missions --- */}
        <div>
          <h2 className="text-2xl font-bold mb-3">🎯 Infos sur les missions</h2>
          <p className="leading-relaxed text-lg">
            Chaque été, plus de 60 bénévoles participent à la création du Belfield.  
            Selon ton profil et ton envie, tu pourras aider au montage des scènes, à l’accueil du public, à la logistique, ou encore à la décoration.  
            Chaque mission contribue à faire naître la magie du festival et à offrir une expérience inoubliable aux festivaliers.
          </p>
        </div>

        {/* --- Avantages --- */}
        <div>
          <h2 className="text-2xl font-bold mb-3">🌟 Avantages</h2>
          <p className="leading-relaxed text-lg">
            Être bénévole au Belfield, c’est bien plus qu’un coup de main :  
            c’est une aventure humaine, une occasion d’apprendre, de rencontrer des passionnés et de vivre le festival de l’intérieur.  
            Ton énergie, ton sourire et ta créativité sont les véritables moteurs de cette aventure collective.
          </p>
        </div>

        {/* --- Ambiance --- */}
        <div>
          <h2 className="text-2xl font-bold mb-3">🎉 Ambiance</h2>
          <p className="leading-relaxed text-lg">
            Le Belfield, c’est avant tout une grande famille.  
            Entre préparation, montage de nuit et moments de partage, l’ambiance est toujours joyeuse, solidaire et pleine d’énergie.  
            Chaque édition est une nouvelle histoire écrite ensemble — et tu peux en faire partie !
          </p>
        </div>

        {/* --- Bouton Google Form --- */}
        <div className="text-center mt-8">
          <a
            href="https://docs.google.com/forms/d/103kxFBL0xEYUb_YrmIypigL-HEvkz8DvHSP_czfN5rE/edit?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4F0F5A] hover:bg-[#2E0833] text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all"
          >
            ✍️ Je m’inscris comme bénévole
          </a>
        </div>

        {/* --- Images --- */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <img
            src="/images/volunteer_photo1.jpg"
            alt="Bénévoles en action"
            className="w-full h-64 object-cover rounded-2xl shadow-lg scroll-animate opacity-0"
          />
          <img
            src="/images/volunteer_photo2.jpg"
            alt="Ambiance du festival"
            className="w-full h-64 object-cover rounded-2xl shadow-lg scroll-animate opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
