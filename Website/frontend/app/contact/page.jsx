"use client";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full bg-gray-100 rounded-2xl p-8 shadow-lg border border-gray-300">
        <h1 className="text-4xl font-bold text-center mb-8">Contactez-nous</h1>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Votre message a été envoyé !");
          }}
        >
          {/* Nom */}
          <div>
            <label className="block mb-2 font-semibold">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Sujet */}
          <div>
            <label className="block mb-2 font-semibold">Sujet</label>
            <input
              type="text"
              placeholder="Sujet de votre message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Votre message"
              required
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
