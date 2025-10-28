"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function ContactPage() {
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
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Envoi en cours..." });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "✅ Message envoyé avec succès !" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: `⚠️ ${data.message || "Erreur inconnue."}` });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "❌ Impossible de contacter le serveur." });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#4F0F5A] to-[#2E0535] text-white py-20 px-6 flex flex-col items-center">
      {/* ===== HEADER ===== */}
      <div className="max-w-4xl text-center mb-16 scroll-animate opacity-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#FF8200]">
          Contact
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light">
          Une question, une idée, une envie de collaborer ?
        </p>
      </div>

      {/* ===== CONTACT CONTENT ===== */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 mb-16">
        {/* ===== Coordonnées ===== */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-xl scroll-animate opacity-0">
          <h2 className="text-2xl font-semibold mb-6 text-[#FF8200]">
            Coordonnées
          </h2>

          <ul className="space-y-5 text-lg">
            <li className="flex items-center gap-3">
              <img
                src="/images/email_icon.png"
                alt="Email"
                className="w-7 h-7 object-contain"
              />
              <a
                href="mailto:belfield.festival@gmail.com"
                className="hover:text-[#FF8200] transition"
              >
                belfield.festival@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="/images/facebook_logo.png"
                alt="Facebook"
                className="w-7 h-7 object-contain"
              />
              <a
                href="https://www.facebook.com/p/Belfield-Events-100092731103925/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF8200] transition"
              >
                Facebook
              </a>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="/images/instagram_logo.png"
                alt="Instagram"
                className="w-7 h-7 object-contain"
              />
              <a
                href="https://www.instagram.com/belfield.festival/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF8200] transition"
              >
                Instagram
              </a>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="/images/map_icon.png"
                alt="Adresse"
                className="w-7 h-7 object-contain opacity-80"
              />
              <a
                href="https://maps.app.goo.gl/a5yKK3UroxsjAVpj8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF8200] transition"
              >
                Parc de la Lére, Caussade
              </a>
            </li>
          </ul>

          {/* ===== Lien bénévoles ===== */}
          <div className="mt-8">
            <a
              href="https://docs.google.com/forms/d/103kxFBL0xEYUb_YrmIypigL-HEvkz8DvHSP_czfN5rE/edit?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF8200] hover:bg-[#ff9933] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <img
                src="/images/volunteer_icon.png"
                alt="Bénévoles"
                className="w-6 h-6 object-contain"
              />
              Formulaire bénévoles
            </a>
          </div>
        </div>

        {/* ===== FORMULAIRE ===== */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-xl scroll-animate opacity-0">
          <h2 className="text-2xl font-semibold mb-6 text-[#FF8200]">
            Envoyer un message
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-semibold">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Sujet</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8200]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full bg-[#FF8200] hover:bg-[#ff9933] text-white font-bold py-3 rounded-2xl shadow-lg transition-all disabled:opacity-60"
            >
              {status.type === "loading" ? "Envoi..." : "Envoyer"}
            </button>

            {status.message && (
              <p
                className={`text-center mt-3 font-semibold ${
                  status.type === "success"
                    ? "text-green-400"
                    : status.type === "error"
                    ? "text-red-400"
                    : "text-gray-300"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
