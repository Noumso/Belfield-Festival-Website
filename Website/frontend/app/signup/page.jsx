"use client";

export default function SignupPage() {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-gray-100 rounded-2xl p-8 shadow-lg border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6">Créer un compte</h1>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Compte créé avec succès !");
          }}
        >
          <div>
            <label className="block mb-2 font-semibold">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Mot de passe</label>
            <input
              type="password"
              placeholder="Votre mot de passe"
              className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            S’inscrire
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </section>
  );
}
