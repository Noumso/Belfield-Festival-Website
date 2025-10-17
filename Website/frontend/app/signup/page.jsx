"use client";

export default function SignupPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12
                 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/signup-bg.jpg')" }}
    >
      <div className="max-w-md w-full bg-white/50 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/30">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Créer un compte
        </h1>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Compte créé avec succès !");
          }}
        >
          {/* Nom */}
          <div>
            <label className="block mb-2 font-semibold text-gray-900">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-900">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70"
              required
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block mb-2 font-semibold text-gray-900">Mot de passe</label>
            <input
              type="password"
              placeholder="Votre mot de passe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70"
              required
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            S’inscrire
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-900">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </section>
  );
}
