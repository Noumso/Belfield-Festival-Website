"use client";
import { useState } from "react";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function TicketPage() {
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

  const [form, setForm] = useState({
    purchaserName: "",
    purchaserEmail: "",
    plan: "",
    dayOption: "",
    quantity: 1,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const ticketPrices = {
    early: { "1day": 25, "2days": 50 },
    regular: { "1day": 30, "2days": 55 },
    late: { "1day": 35, "2days": 60 },
  };

  const total =
    form.plan && form.dayOption
      ? ticketPrices[form.plan][form.dayOption] * form.quantity
      : 0;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          purchaserName: form.purchaserName,
          purchaserEmail: form.purchaserEmail,
          quantity: form.quantity,
          type: `${form.plan}-${form.dayOption}`,
          amount: total,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Erreur lors de la commande");

      const stripe = await stripePromise;
      const { clientSecret } = data;

      const { error } = await stripe.confirmPayment({
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/tickets/success`,
        },
      });

      if (error) {
        console.error(error);
        setMessage(error.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-8 py-12"
      style={{ backgroundColor: "#FF8200" }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
        
        {/* --- LEFT SIDE: Ticket Info --- */}
        <div className="text-white space-y-6 flex flex-col justify-center scroll-animate opacity-0">
          <h1 className="text-4xl font-extrabold mb-4">🎟️ Choisissez votre billet</h1>
          <p className="text-lg leading-relaxed">
            Participez à notre événement exceptionnel !  
            Choisissez entre un pass 1 jour ou 2 jours, selon votre emploi du temps.
          </p>

          <div className="bg-white/90 rounded-2xl p-6 backdrop-blur-sm space-y-4 text-[#4F0F5A]">
            <h2 className="text-2xl font-bold">💡 Types de billets</h2>
            <ul className="space-y-2">
              <li>
              <strong>🎫 Early :</strong> 25 € (1 j) / 50 € (2 j)
              </li>
              <li>
              <strong>🎟️ Regular :</strong> 30 € (1 j) / 55 € (2 j)
              </li>
              <li>
              <strong>🔥 Late :</strong> 35 € (1 j) / 60 € (2 j)
              </li>
            </ul>
          </div>

          <p className="text-sm opacity-90">
            💳 Paiement sécurisé via Stripe. Vous recevrez votre billet par e-mail après confirmation.
          </p>
        </div>

        {/* --- RIGHT SIDE: Form --- */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border-2 border-[#4F0F5A] scroll-animate opacity-0">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#4F0F5A]">Acheter un billet</h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
            {/* Nom */}
            <div>
              <label className="block mb-2 font-semibold text-[#4F0F5A]">Nom</label>
              <input
                type="text"
                name="purchaserName"
                value={form.purchaserName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FF8200] focus:ring-2 focus:ring-[#FF8200] bg-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold text-[#4F0F5A]">Email</label>
              <input
                type="email"
                name="purchaserEmail"
                value={form.purchaserEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FF8200] focus:ring-2 focus:ring-[#FF8200] bg-white"
              />
            </div>

            {/* Type de billet */}
            <div>
              <label className="block mb-2 font-semibold text-[#4F0F5A]">Type de billet</label>
              <select
                name="plan"
                value={form.plan}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FF8200] focus:ring-2 focus:ring-[#FF8200] bg-white"
              >
                <option value="">-- Sélectionnez une option --</option>
                <option value="early">🎫 Early - 25 € / 50 €</option>
                <option value="regular">🎟️ Regular - 30 € / 55 €</option>
                <option value="late">🔥 Late - 35 € / 60 €</option>
              </select>
            </div>

            {/* Durée */}
            <div>
              <label className="block mb-2 font-semibold text-[#4F0F5A]">Durée</label>
              <select
                name="dayOption"
                value={form.dayOption}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FF8200] focus:ring-2 focus:ring-[#FF8200] bg-white"
              >
                <option value="">-- 1 jour ou 2 jours ? --</option>
                <option value="1day">1 jour</option>
                <option value="2days">2 jours</option>
              </select>
            </div>

            {/* Quantité */}
            <div>
              <label className="block mb-2 font-semibold text-[#4F0F5A]">Quantité</label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FF8200] focus:ring-2 focus:ring-[#FF8200] bg-white"
              />
            </div>

            {/* Total */}
            <div className="text-center text-lg font-bold mt-4 text-[#4F0F5A]">
              Total : {total ? `${total} €` : "--"}
            </div>

            {/* Bouton */}
            <button
              type="submit"
              disabled={loading || !total}
              className={`w-full ${
                loading || !total
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#4F0F5A] hover:bg-[#2E0833]"
              } text-white font-bold px-6 py-3 rounded-2xl shadow-lg transition-all`}
            >
              {loading ? "Chargement..." : "Payer avec Stripe 💳"}
            </button>
          </form>

          {message && <p className="mt-4 text-center text-red-600">{message}</p>}
        </div>
      </div>
    </section>
  );
}
