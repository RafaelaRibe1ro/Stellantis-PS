import React from 'react';
import { Link } from 'react-router-dom';

export default function SobreMim() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center p-8 bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="max-w-4xl text-center text-lg leading-relaxed">
        <p className="mb-4">
          Tenho 23 anos e atualmente curso Engenharia de Software na PUC Minas. Antes disso, vivi uma experiência transformadora ao estudar por três anos Engenharia de Petróleo no Espírito Santo. Foi lá que descobri uma vocação mais profunda: a tecnologia. Entre fórmulas e cálculos, encontrei na programação um novo mundo, onde criatividade e lógica se unem para resolver problemas reais.
        </p>
        <p className="mb-4">
          Sou movida por propósito. Na universidade, assumi a liderança de ações sociais no Capítulo Estudantil da SPE, coordenando campanhas de doações e impactando diretamente a vida de muitas pessoas. Essa experiência fortaleceu minha empatia, proatividade e senso de responsabilidade.
        </p>
        <p className="mb-4">
          Minha trajetória profissional reflete essa busca por evolução contínua. Fui assessora de desenvolvimento na Adapti, onde desenvolvia sites e sistemas em PHP com Laravel. Depois, atuei como estagiária na Construsite Brasil, lidando com projetos reais e desafiadores. Em seguida, fui desenvolvedora júnior na Leadtax, desenvolvendo automações para serviços de hospitais. Mais recentemente, integrei a equipe da STR Sistemas como estagiária de QA, ampliando minha visão sobre qualidade de software e testes.
        </p>
        <p>
          Essas vivências me ensinaram mais do que linguagens de programação — me ensinaram a escutar, adaptar, construir em equipe e crescer com cada desafio. Hoje, trago comigo essa bagagem técnica, humana e criativa, pronta para contribuir com projetos que realmente façam a diferença.
        </p>
        <div className="mt-8">
          <Link to="/" className="underline text-sm">← Voltar à página inicial</Link>
        </div>
      </div>
    </div>
  );
}
