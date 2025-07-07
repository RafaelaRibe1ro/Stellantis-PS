import { Link } from 'react-router-dom';

export default function MinhaTrajetoria() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8 flex flex-col items-center">
      <h1 className="text-3xl mb-10">Minha Trajetória</h1>

      <div className="w-full max-w-5xl space-y-12">
        {/* Bloco 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 h-64 bg-zinc-800 flex items-center justify-center">
            {/* Imagem aqui futuramente */}
            <span className="text-zinc-400">[Imagem da UFES]</span>
          </div>
          <div className="w-full md:w-1/2 text-lg leading-relaxed">
            {/* Texto aqui futuramente */}
            <p>[Resumo dessa fase da trajetória]</p>
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="w-full md:w-1/2 h-64 bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400">[Imagem da mudança para BH]</span>
          </div>
          <div className="w-full md:w-1/2 text-lg leading-relaxed">
            <p>[Resumo dessa fase da trajetória]</p>
          </div>
        </div>

        {/* Você pode repetir os blocos acima conforme for adicionando novas fases */}
      </div>

      <Link
        to="/"
        className="mt-12 underline text-sm hover:text-green-300 transition"
      >
        ← Voltar à página inicial
      </Link>
    </div>
  );
}
