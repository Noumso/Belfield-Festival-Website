"use client";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-gray-100 rounded-2xl p-8 shadow-lg border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6">Connexion</h1>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Connexion réussie !");
          }}
        >
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Pas encore de compte ?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Créer un compte
          </a>
        </p>
      </div>
    </section>
  );
}
