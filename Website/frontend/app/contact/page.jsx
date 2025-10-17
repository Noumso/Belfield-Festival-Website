"use client";

export default function ContactPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12
                 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      <div className="max-w-2xl w-full bg-white/50 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/30">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          Contactez-nous
        </h1>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Votre message a été envoyé !");
          }}
        >
          {/* Nom */}
          <div>
            <label className="block mb-2 font-semibold text-gray-900">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-900">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
              required
            />
          </div>

          {/* Sujet */}
          <div>
            <label className="block mb-2 font-semibold text-gray-900">Sujet</label>
            <input
              type="text"
              placeholder="Sujet de votre message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold text-gray-900">Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
              rows="5"
              placeholder="Votre message"
              required
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
