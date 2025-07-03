import { useEffect, useState } from 'react';

const sobreMim = [
  "rafaela@stellantis:~$ cd perfil",
  "rafaela@stellantis:~/perfil$ cat bio.txt",
  "Meu nome é Rafaela Oliveira Ribeiro.",
  "Tenho 23 anos e sou de Belo Horizonte - MG, com raízes no interior de Minas.",
  "Atualmente curso Engenharia de Software na PUC Minas, com previsão de formatura em 2027.",
  "Minha jornada começou na Engenharia de Petróleo, mas descobri na tecnologia meu verdadeiro caminho.",
  "Sou apaixonada por resolver problemas, aprender coisas novas e transformar ideias em soluções.",
  "Já atuei como estagiária, desenvolvedora back-end, voluntária e líder de ações sociais.",
  "Participei de projetos acadêmicos incríveis como o QuelCaramel e o RoomBookings.",
  "Tenho cursos em programação orientada a objetos, Laravel, Java, React, além de inglês avançado e Excel.",
  "Trago comigo não só conhecimento técnico, mas também empatia, criatividade e senso de colaboração.",
  "rafaela@stellantis:~/perfil$ echo \"Pronta para um novo desafio!\""
];

export default function SobreMim() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= sobreMim.length) return;

    const timeout = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, sobreMim[lineIndex]]);
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
