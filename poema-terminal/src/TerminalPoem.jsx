import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const lines = [
  "rafaela@stellantis:~$ whoami",
  "rafaela@stellantis:~$ poetry start",
  "Do interior de Minas parti, com coragem no coração,",
  "Buscando sonhos maiores, segui minha vocação.",
  "Lá no Espírito Santo, a Engenharia de Petróleo me acolheu,",
  "Mas foi em meio a códigos que meu verdadeiro brilho cresceu.",
  "Entre aulas e voluntariado, fui traçando meu caminho,",
  "Coordenando ações sociais, doando afeto e carinho.",
  "Descobri na tecnologia uma paixão que fez sentido,",
  "Transformar ideias em soluções – esse é meu destino preferido.",
  "Voltei pra BH decidida, com garra no olhar,",
  "E na Engenharia de Software começei a me reinventar.",
  "Fiz estágio, projetos, códigos e documentação,",
  "Cada passo com propósito, com foco e dedicação.",
  "Hoje essa Rafaela, criativa, curiosa, está pronta pra evoluir,",
  "E cada desafio que chega é mais uma chance de construir.",
  "Busco no estágio não só aprender, mas também contribuir,",
  "Com tudo que sou e o que ainda vou descobrir.",
  "E é quando vejo a Stellantis que meu olhar se ilumina,",
  "Uma gigante que transforma, inova e ensina.",
  "Me encantei pelos carros, pelos softwares, pela visão,",
  "De um futuro inteligente, guiado por inovação.",
  "Vejo veículos autônomos e IA sendo aplicada,",
  "Tudo isso não é só tecnologia — é esperança conectada.",
  "E mais do que motores, há valores que me inspiram:",
  "Sustentabilidade, inclusão e ações que realmente viram.",
  "Uma empresa que se importa com o planeta e com o outro,",
  "Que planta mobilidade limpa e colhe um amanhã mais justo e solto.",
  "Por isso, venho inteira — com verdade, paixão e vontade,",
  "Querendo viver a Stellantis com propósito e intensidade.",
  "rafaela@stellantis:~$ apply --to Stellantis",
  "Feito com paixão, propósito e muito código :)"
];

export default function TerminalPoem() {
  const [started, setStarted] = useState(false);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const audioContextRef = useRef(null);
  const gainNodeRef = useRef(null);
  const sourceRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!started || lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    const interval = setInterval(() => {
      if (charIndex < currentLine.length) {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] = (updated[lineIndex] || '') + currentLine[charIndex];
          return updated;
        });
        setCharIndex((prev) => prev + 1);

        if (gainNodeRef.current && audioContextRef.current) {
          gainNodeRef.current.gain.setValueAtTime(0.5, audioContextRef.current.currentTime);
        }
      } else {
        clearInterval(interval);
        if (gainNodeRef.current && audioContextRef.current) {
          gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current.currentTime);
        }
        setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [started, lineIndex, charIndex]);

  const handleStart = async () => {
    setStarted(true);

    // Exibe imediatamente a primeira letra da primeira linha
    setDisplayedLines([lines[0][0]]);
    setCharIndex(1);
    setLineIndex(0);

    const context = new (window.AudioContext || window.webkitAudioContext)();
    const gainNode = context.createGain();
    const response = await fetch('/typing-sound.mp3');
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await context.decodeAudioData(arrayBuffer);
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = true;
    source.connect(gainNode).connect(context.destination);
    source.start(0);
    gainNode.gain.setValueAtTime(0, context.currentTime);

    audioContextRef.current = context;
    gainNodeRef.current = gainNode;
    sourceRef.current = source;
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center p-6 relative">
      {!started ? (
        <div className="flex flex-col items-center space-y-6">
          <img src="/terminal-icon.png" alt="terminal icon" className="w-48 animate-pulse" />
          <button
            onClick={handleStart}
            className="text-green-400 border border-green-400 px-6 py-3 rounded hover:bg-green-400 hover:text-black transition"
          >
            CLIQUE AQUI PARA VER O POEMA
          </button>
        </div>
      ) : (
        <>
          <div className="w-full max-w-4xl">
            {displayedLines.map((line, index) => (
              <pre key={index} className="mb-1 text-left whitespace-pre-wrap text-lg">{line}</pre>
            ))}
          </div>

          {/* Links laterais */}
          <div className="absolute right-4 top-10 flex flex-col space-y-3 text-sm items-end">
            <a href="/sobre" className="underline">Sobre mim</a>
            <a href="/stellantis" className="underline">Por que a Stellantis?</a>
            <a href="https://github.com/RafaelaRibe1ro" target="_blank" className="underline">GitHub</a>
            <a href="https://www.linkedin.com/in/rafaela-ribeiro-5422061a5" target="_blank" className="underline">LinkedIn</a>
            <a href="/" className="underline text-sm">← Voltar à página inicial</a>
          </div>
        </>
      )}
    </div>
  );
}
