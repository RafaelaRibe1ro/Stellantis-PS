import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center p-6">
      <img
        src={`${import.meta.env.BASE_URL}terminal-icon.png`}
        alt="Ícone de terminal"
        className="w-48 animate-pulse mb-8"
        loading="lazy"
      />

      <Link
        to="/poema"
        className="text-green-400 border border-green-400 px-6 py-3 rounded hover:bg-green-400 hover:text-black transition"
      >
        VISUALIZAR MINHA APRESENTAÇÃO
      </Link>
      <Link
        to="/trajetoria"
        className="mt-4 text-green-400 border border-green-400 px-6 py-3 rounded hover:bg-green-400 hover:text-black transition"
      >
        VISUALIZAR MINHA TRAJETÓRIA
      </Link>

    </main>
  );
}
