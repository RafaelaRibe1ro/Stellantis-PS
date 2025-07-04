import { useEffect, useState } from 'react';

export default function MotivacaoStellantis() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center p-8 text-center">
      {showText && (
        <>
          <p className="text-lg max-w-4xl">
            Desde que conheci a Stellantis, fui profundamente impactada por sua grandiosidade, propósito e visão de futuro. Não é apenas uma multinacional automotiva — é uma força propulsora de transformação social, ambiental e tecnológica. A capacidade da empresa de liderar a inovação em mobilidade inteligente, desenvolver veículos autônomos, aplicar inteligência artificial e investir em softwares embarcados é inspiradora para quem, como eu, respira tecnologia.
            <br /><br />
            Mas o que mais me atrai são os valores que conduzem cada projeto da Stellantis: sustentabilidade real, inclusão que vai além do discurso e um compromisso genuíno com a responsabilidade social. Ver uma empresa investir em energia limpa, economia circular, mobilidade acessível e ações sociais tangíveis faz com que eu me sinta em sintonia com seu propósito. Eu também acredito que inovação de verdade só acontece quando se pensa no coletivo — no planeta, nas pessoas, nas próximas gerações.
            <br /><br />
            Por isso, a Stellantis é mais que uma empresa dos meus sonhos: é um espelho da profissional que desejo ser. Contribuir com ideias, com meu código, com meu olhar curioso e com minha sede de evolução seria um privilégio!
          </p>
          <div className="mt-6">
            <a href="/" className="underline text-sm">← Voltar à página inicial</a>
          </div>
        </>
      )}
    </div>
  );
}
