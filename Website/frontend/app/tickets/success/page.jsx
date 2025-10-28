export default function TicketSuccessPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Merci pour votre achat !</h1>
        <p className="text-gray-700 mb-6">
          Votre paiement a bien été reçu.  
          Vous recevrez un email de confirmation sous peu.
        </p>
        <a
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Retour à l’accueil
        </a>
      </div>
    </section>
  );
}
