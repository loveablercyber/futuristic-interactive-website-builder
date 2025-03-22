
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FaqItem[] = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto. Sites institucionais simples podem levar de 7 a 15 dias, enquanto e-commerces e sistemas mais complexos podem levar de 30 a 60 dias. Durante a fase de briefing, estabelecemos um cronograma detalhado para seu projeto."
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Trabalhamos com um sistema de entrada + parcelas. Normalmente, 40% do valor é pago na aprovação do projeto e o restante pode ser parcelado durante ou após a conclusão. Oferecemos condições especiais para pagamento à vista e aceitamos diversas formas de pagamento, incluindo cartão de crédito, boleto e PIX."
    },
    {
      question: "Vocês oferecem suporte após a entrega do projeto?",
      answer: "Sim! Todos os nossos projetos incluem um período de garantia e suporte. Além disso, oferecemos planos de manutenção mensal que incluem atualizações, backup, segurança e pequenas alterações. Nosso suporte está disponível 24/7 para emergências e em horário comercial para questões rotineiras."
    },
    {
      question: "Como funciona a hospedagem de sites?",
      answer: "Nossa hospedagem utiliza servidores de alta performance com SSD, oferecendo segurança e velocidade para seu site. Os planos incluem certificado SSL, backup diário e suporte técnico. Você pode escolher entre diferentes planos conforme sua necessidade de espaço, tráfego e recursos."
    },
    {
      question: "É possível fazer modificações no site depois de pronto?",
      answer: "Absolutamente! Oferecemos treinamento para que você possa gerenciar conteúdos básicos, além de planos de manutenção para atualizações e modificações contínuas. Alterações estruturais mais significativas são orçadas separadamente, sempre com condições especiais para clientes."
    },
    {
      question: "Como saber qual tipo de site ou sistema é ideal para meu negócio?",
      answer: "Nossa equipe realiza uma análise detalhada das necessidades do seu negócio, público-alvo e objetivos para recomendar a solução mais adequada. Oferecemos uma consultoria inicial gratuita para entender seu projeto e apresentar as melhores opções tecnológicas e estratégicas."
    },
    {
      question: "Quais tecnologias vocês utilizam no desenvolvimento?",
      answer: "Trabalhamos com as tecnologias mais modernas do mercado, incluindo WordPress, React, Node.js, PHP, Laravel, entre outras. Escolhemos a stack tecnológica ideal para cada projeto, priorizando performance, segurança e facilidade de manutenção."
    },
    {
      question: "Como funciona a gestão de redes sociais?",
      answer: "Nosso serviço de gestão de redes sociais inclui planejamento estratégico, criação de conteúdo, design de posts, programação e análise de resultados. Trabalhamos com pacotes personalizados baseados na frequência de postagens e plataformas desejadas, sempre alinhados com seus objetivos de marketing."
    },
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue font-medium text-sm mb-4">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="section-title mb-4">Dúvidas Comuns</h2>
          <p className="section-subtitle mx-auto">
            Respostas para as perguntas mais frequentes sobre nossos serviços, processos e tecnologias.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-xl shadow-md overflow-hidden border transition-all duration-300 ${
                  openIndex === index ? 'border-neon-blue' : 'border-gray-100'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className={`font-semibold text-lg ${
                    openIndex === index ? 'text-neon-blue' : 'text-gray-800'
                  }`}>
                    {item.question}
                  </h3>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    openIndex === index 
                      ? 'bg-neon-blue text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Não encontrou a resposta que procurava? Entre em contato conosco!
            </p>
            <a
              href="https://wa.me/message/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
