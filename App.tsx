import React, { useState } from 'react';
// FIX: Removed 'Check' as it is not an exported member of './components/Icons'. Also removed unused 'Gift' import.
import { CheckCircle, Zap, Bot, Users, Film, Smartphone, Windows, Rocket, MessageSquare, Code, CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4, ChevronDown } from './components/Icons';

const WHATSAPP_LINK = "https://wa.me/5521998484383?text=Tenho%20interesse%20no%20rob%C3%B4%20divulgador";

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
    <div className="flex-shrink-0 text-green-400">{icon}</div>
    <p className="text-gray-200">{title}</p>
  </div>
);

const BonusItem: React.FC<{ icon: React.ReactNode; text: string; }> = ({ icon, text }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0 pt-1 text-yellow-400">{icon}</div>
    <span className="text-gray-300">{text}</span>
  </li>
);

const SocialProof = () => (
  <section id="social-proof" className="mt-16 sm:mt-24">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-gray-400 tracking-wider uppercase">
          Confiado por centenas de empresas
        </h2>
        <div className="mt-8 flex justify-center items-center flex-wrap gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-6 text-gray-500">
          <CompanyLogo1 className="h-8 w-auto hover:text-gray-300 transition-colors" />
          <CompanyLogo2 className="h-8 w-auto hover:text-gray-300 transition-colors" />
          <CompanyLogo3 className="h-8 w-auto hover:text-gray-300 transition-colors" />
          <CompanyLogo4 className="h-8 w-auto hover:text-gray-300 transition-colors" />
        </div>
    </div>
  </section>
);

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "É seguro usar o Robô Divulgador? Corro risco de ser banido?",
      answer: "Totalmente seguro! Utilizamos a API oficial do WhatsApp, seguindo todas as diretrizes para garantir a segurança da sua conta. Nosso sistema Anti-Ban 2025 é constantemente atualizado para prevenir qualquer tipo de bloqueio."
    },
    {
      question: "O que preciso para rodar o robô? Funciona no meu celular?",
      answer: "Você pode rodar o Robô Divulgador tanto em celulares com sistema Android quanto em computadores com Windows. A instalação é simples e nosso suporte auxilia em todo o processo."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte 24h, 7 dias por semana, diretamente comigo via WhatsApp. Qualquer dúvida, problema ou sugestão, estarei à disposição para ajudar você a ter a melhor experiência possível."
    },
    {
      question: "Posso enviar mídias como fotos e áudios?",
      answer: "Sim! O robô tem suporte completo para envio de imagens, vídeos e áudios, permitindo que suas campanhas de divulgação sejam muito mais dinâmicas e atrativas para seus clientes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mt-16 sm:mt-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-700 pb-4">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{faq.question}</span>
              <ChevronDown className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
              <p className="text-gray-400">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default function App() {
  const features = [
    { icon: <Zap size={24} />, title: "Dispara mensagens em massa para contatos e grupos." },
    { icon: <CheckCircle size={24} />, title: "API oficial Anti-Ban 2025." },
    { icon: <Bot size={24} />, title: "Chat bot Auto atendimento." },
    { icon: <Users size={24} />, title: "Atendimento ao cliente." },
    { icon: <Film size={24} />, title: "Envia Foto, Áudio & Vídeo." },
    { icon: <div className="flex space-x-2"><Smartphone size={24} /><Windows size={24} /></div>, title: "Roda em Celular Android e Windows." }
  ];

  const bonuses = [
    { icon: <Rocket size={20} />, text: "+100 Mil grupos de Divulgação." },
    { icon: <Bot size={20} />, text: "Robô WhatsApp" },
    { icon: <Bot size={20} />, text: "Robô Telegram." },
    { icon: <Bot size={20} />, text: "Robô Messenger." },
    { icon: <MessageSquare size={20} />, text: "Suporte 24h direto comigo no WhatsApp." }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),#000)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

        <main className="container mx-auto px-6 pb-24 pt-10 sm:pt-16 lg:pt-24">
          <header className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
              <span className="text-green-400">Robô</span> Divulgador
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300">
              Automatize suas vendas e alcance milhares de pessoas no WhatsApp sem esforço! 🤖
            </p>
          </header>

          <section id="features" className="mt-16 sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} />
              ))}
            </div>
          </section>

          <section id="bonuses" className="mt-16 sm:mt-24 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-yellow-400/30">
              <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
                Bônus Exclusivos! 🎁
              </h2>
              <ul className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <BonusItem key={index} icon={bonus.icon} text={bonus.text} />
                ))}
              </ul>
            </div>
          </section>

          <SocialProof />

          <FaqSection />

          <section id="offer" className="mt-16 sm:mt-24 text-center">
            <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-2xl shadow-lg border border-green-400/30">
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">
                🔥 Oferta ÚNICA
              </h2>
              <p className="mt-2 text-xl font-semibold text-gray-200">De Lançamento</p>
              <p className="mt-4 text-gray-400">Aproveite condições especiais por tempo limitado. Fale conosco e garanta já o seu!</p>
            </div>
          </section>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-80 backdrop-blur-sm border-t border-green-400/20">
          <div className="container mx-auto">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-400/50"
            >
              <Code size={24} />
              <span>🧑🏻‍💻 SAIBA MAIS</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}