
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Lightbulb, Code, CheckCircle } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Briefing",
      description: "Entendemos suas necessidades por meio de uma reunião detalhada e análise do seu mercado.",
      icon: <ClipboardList className="w-6 h-6" />,
      color: "from-neon-blue to-blue-400",
    },
    {
      id: 2,
      title: "Design",
      description: "Criamos protótipos e layouts exclusivos, alinhados com sua identidade visual e objetivos.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-neon-purple to-purple-400",
    },
    {
      id: 3,
      title: "Desenvolvimento",
      description: "Codificamos seu projeto com as melhores tecnologias, garantindo performance e segurança.",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-neon-blue",
    },
    {
      id: 4,
      title: "Testes & Lançamento",
      description: "Realizamos testes rigorosos, ajustes finais e colocamos seu projeto no ar com todo suporte.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <section id="process" className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue font-medium text-sm mb-4">
            METODOLOGIA
          </span>
          <h2 className="section-title mb-4">Como Trabalhamos</h2>
          <p className="section-subtitle mx-auto">
            Nossa metodologia de trabalho é focada em resultados, com um processo transparente e colaborativo para garantir sua satisfação.
          </p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-green-400 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div key={step.id} variants={itemVariants} className="relative">
                  {/* Timeline node */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
                      <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">{step.id}</span>
                    </div>
                  </div>
                  
                  {/* Card pointing up or down */}
                  <div className={`relative mt-8 bg-white rounded-2xl shadow-lg p-6 ${
                    index % 2 === 0 ? 'mt-10' : 'mt-40'
                  }`}>
                    <div className="absolute inset-0 rounded-2xl opacity-10 bg-gradient-to-r"></div>
                    <div className={`w-14 h-14 rounded-2xl mb-4 bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile steps */}
          <div className="lg:hidden space-y-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${step.color}`}></div>
                <div className="p-6 pl-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg mr-3`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      <span className="text-sm bg-gray-100 rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">{step.id}</span>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Resultados que Entregamos</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso processo foi desenvolvido para garantir que cada projeto seja entregue com a máxima qualidade, dentro do prazo e orçamento estabelecidos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { value: "99%", label: "Satisfação dos Clientes", description: "Nossos clientes nos avaliam com excelência" },
              { value: "100%", label: "Projetos no Prazo", description: "Cumprimos rigorosamente os prazos acordados" },
              { value: "24/7", label: "Suporte Contínuo", description: "Estamos sempre disponíveis para ajudar" },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-r hover:from-neon-blue/5 hover:to-neon-purple/5 transition-colors duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mb-2">
                  {stat.value}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h4>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
