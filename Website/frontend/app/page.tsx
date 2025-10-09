export default function Home() {
    return (
      <section className="text-center py-20 bg-gradient-to-b from-bleu via-mauve to-orange">
        <h1 className="text-5xl font-extrabold mb-6">Belfield Festival 2025 🦢</h1>
        <p className="text-lg mb-8">
          Les 15 & 16 août – Parc de la Lère, Caussade
        </p>
        <a
          href="/billetterie"
          className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Réserver ma place
        </a>
      </section>
    );
  }
  