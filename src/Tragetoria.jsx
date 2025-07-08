import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MinhaTrajetoria() {
  const blocos = [
    {
      img: 'ufes.jpg',
      alt: 'Aprovação UFES',
      texto:
        'Em 2020, fui aprovada na UFES para o curso de Engenharia de Petróleo. Foi um período de grandes descobertas e crescimento pessoal. Lá, tive meu primeiro contato com o mundo universitário e comecei a construir minha trajetória acadêmica com dedicação e propósito.'
    },
    {
      img: 'spe.jpg',
      alt: 'Capítulo Estudantil SPE',
      texto:
        'Durante o curso, atuei como trainee e assessora de Ações Sociais no Capítulo Estudantil SPE. Organizei campanhas de doações e projetos filantrópicos, aprendendo a liderar com empatia.'
    },
    {
      img: 'energy.jpg',
      alt: 'Energy Júnior',
      texto:
        'Atuei como Assessora de Projetos de Petróleo na Energy Jr, sendo responsável por contribuir com o desenvolvimento dos projetos relacionados à área petrolífera. Participei de eventos do MEJ (Movimento Empresa Júnior) e workshops da área de Engenharia e Tecnologia, aprofundando meu interesse por inovação e impacto social.'
    },
    {
      img: 'adapti.jpg',
      alt: 'Adapti',
      texto:
        'Atuei como assessora de desenvolvimento web na Adapti, uma empresa júnior que atendia clientes reais com soluções em sites e sistemas desenvolvidos sob contrato, oferecendo preços acessíveis ao mercado. Lá, participei ativamente de projetos comerciais concretos, com entregas de verdade, e pude aprimorar minhas habilidades em PHP orientado a objetos. A experiência foi essencial para entender as demandas reais do mercado e fortalecer minha autonomia e responsabilidade técnica.'
    },
    {
      img: 'construsite.jpg',
      alt: 'Construsite Brasil',
      texto:
        'Na Construsite Brasil, desenvolvi sites e sistemas em PHP com Laravel em um ambiente profissional estruturado por metodologias ágeis. Participei de sprints, dailys e ciclos de entregas com prazos bem definidos. Além de produzir código, contribuí com a equipe ensinando os fundamentos de PHP para novos estagiários, o que reforçou minha comunicação e domínio técnico. Fui constantemente desafiada a aprender novas tecnologias, como Docker e integrações com APIs, o que acelerou minha curva de aprendizado e ampliou minha visão sobre desenvolvimento moderno.'
    },
    {
      img: 'leadtax.jpg',
      alt: 'Leadtax',
      texto:
        'Na Leadtax, trabalhei como desenvolvedora júnior criando automações (RPAs) para facilitar processos em hospitais, como abertura de autorizações, faturamento, conciliação de dados e envio de recursos para glosas. Tudo isso foi feito usando a linguagem PHP com o framework Laravel. Nesse projeto, aprendi a lidar com leitura de documentos, manipulação de arquivos, automações em páginas web usando XPath e também com arquivos XML, especialmente no padrão TISS — muito usado na área da saúde. Além de corrigir erros, participei ativamente do desenvolvimento de novos robôs que automatizavam tarefas repetitivas dos hospitais, ajudando a tornar os processos mais rápidos, seguros e eficientes.'
    },
    {
      img: 'str.jpg',
      alt: 'STR Sistemas',
      texto:
        'Atualmente, estou como estagiária de QA na STR Sistemas. Aprendo sobre qualidade de software, testes manuais e automatizados (cypress, selenium), e colaboro para entregar sistemas mais seguros e eficientes.'
    }
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? blocos.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === blocos.length - 1 ? 0 : prev + 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-green-400 p-6 flex flex-col items-center font-sans"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Minha Trajetória</h1>

      {/* Carrossel */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
        <div className="relative h-[550px] md:h-[500px]">
          <img
            src={`${import.meta.env.BASE_URL}${blocos[current].img}`}
            alt={blocos[current].alt}
            className="w-full h-full object-cover transition duration-500"
            loading="lazy"
          />

          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-green-400 hover:text-green-300 z-10"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-green-400 hover:text-green-300 z-10"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>

        {/* Legenda */}
        <div className="bg-zinc-800 p-6 text-center">
          <h2 className="text-2xl font-semibold mb-3 text-green-300">{blocos[current].alt}</h2>
          <p className="text-lg leading-relaxed">{blocos[current].texto}</p>
        </div>
      </div>

      {/* Voltar */}
      <Link
        to="/"
        className="mt-16 underline text-sm hover:text-green-300 transition"
      >
        ← Voltar à página inicial
      </Link>

      {/* Footer */}
      <footer className="mt-24 border-t border-zinc-700 pt-6 pb-10 text-center text-sm text-zinc-400 w-full">
        <p>© 2025 Rafaela Ribeiro. Todos os direitos reservados.</p>
        <div className="mt-2 flex justify-center gap-6 text-green-400">
          <a href="https://github.com/RafaelaRibe1ro" target="_blank" className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/rafaela-ribeiro-5422061a5" target="_blank" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </motion.div>
  );
}
