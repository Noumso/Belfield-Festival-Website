"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TicketPage() {
  const router = useRouter();

  // 🔐Temporary login state. Actually connected to the Auth system
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Ticket form state
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [quantite, setQuantite] = useState(1);
  const prixUnitaire = 20;

  // Auto-calcul du total
  const total = prixUnitaire * quantite;

  // Redirect if not logged in
  useEffect(() => {
    const checkLogin = () => {
      const logged = localStorage.getItem("loggedIn") === "true";
      setIsLoggedIn(logged);

// Temporarily disabled redirection for testing purposes
//      if (!logged) {
//        setTimeout(() => {
//          alert("⚠️ Vous devez être connecté pour acheter un billet.");
//          router.push("/login");
//        }, 500);
//      }
};
    checkLogin();
  }, [router]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Merci ${nom} ! Votre commande de ${quantite} billet(s) pour le ${date} a été enregistrée.`
    );
    setNom("");
    setEmail("");
    setDate("");
    setQuantite(1);
  };

  // If not logged in, don't render the page
//  if (!isLoggedIn) return null;  // Temporarily disabled for testing purposes

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12
                 bg-cover bg-center bg-no-repeat text-gray-900"
      style={{ backgroundImage: "url('/images/ticket-bg.jpg')" }}
    >
      <div className="max-w-md w-full bg-white/60 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/30">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Acheter un billet 🎫
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label className="block mb-2 font-semibold">Nom</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Votre nom"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80"
            />
          </div>

          {/* Date souhaitée */}
        <div>
          <label className="block mb-2 font-semibold">Date souhaitée</label>
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80"
          >
            <option value="">-- Sélectionnez une date --</option>
            <option value="15/08/2025">15 août 2025</option>
            <option value="16/08/2025">16 août 2025</option>
          </select>
        </div>

          {/* Quantité */}
          <div>
            <label className="block mb-2 font-semibold">Nombre de billets</label>
            <input
              type="number"
              min="1"
              value={quantite}
              onChange={(e) => setQuantite(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80"
            />
          </div>

          {/* Total */}
          <div className="text-center font-bold text-lg mt-4">
            Total : {total} €
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Confirmer l’achat
          </button>
        </form>
      </div>
    </section>
  );
}
