export default function CancelPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">❌ Paiement annulé</h1>
        <p className="text-lg mb-6">
          Votre paiement n’a pas été complété.<br />
          Vous pouvez réessayer à tout moment.
        </p>
        <a
          href="/ticket"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Revenir à la page billet
        </a>
      </div>
    </section>
  );
}
