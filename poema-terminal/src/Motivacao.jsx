import { useEffect, useState } from 'react';

const motivacao = [
  "rafaela@stellantis:~$ cd sonhos",
  "rafaela@stellantis:~/sonhos$ cat motivacao.txt",
  "Desde que conheci a Stellantis, me encantei com seu impacto global e visão de futuro.",
  "Vejo uma empresa que lidera a inovação em mobilidade inteligente e sustentável.",
  "Admiro os softwares embarcados, a aplicação de IA em veículos autônomos e a excelência tecnológica.",
  "Mas também admiro os valores: inclusão, sustentabilidade e responsabilidade social.",
  "Vi ações sociais reais, projetos ambientais e investimentos no futuro do planeta.",
  "Isso conversa diretamente com a Rafaela que liderou voluntariados e sempre quis transformar o mundo.",
  "Quando vejo um carro Stellantis, não vejo só tecnologia – vejo propósito.",
  "Meu desejo é contribuir com essa transformação, com ideias, código e dedicação.",
  "Não busco apenas um estágio. Busco um espaço onde posso crescer junto com algo grandioso.",
  "E sei que combino com a Stellantis porque acredito no mesmo futuro que ela quer construir.",
  "rafaela@stellantis:~/sonhos$ echo \"Quero fazer parte dessa jornada.\""
];

export default function MotivacaoStellantis() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= motivacao.length) return;

    const timeout = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, motivacao[lineIndex]]);
      setLineIndex((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [lineIndex]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-start justify-center p-8 bg-gradient-to-br from-black via-zinc-900 to-black">
      {displayedLines.map((line, index) => (
        <pre key={index} className="mb-2 text-left text-lg whitespace-pre-wrap">{line}</pre>
      ))}
          <div className="mt-6">
        <a href="/" className="underline text-sm">← Voltar à página inicial</a>
      </div>
    </div>
  );
}
