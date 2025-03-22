
import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 -z-20 bg-gradient-radial from-white via-white to-gray-50"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-75 blur-lg"></div>
          <img 
            src="https://placehold.co/200x80/121212/FFFFFF?text=Wz+WebDezign" 
            alt="Wz WebDezign Logo" 
            className="h-20 relative z-10"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl"
        >
          <span className="block">Transformamos sua</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
            presença digital
          </span>
          <span className="block">com tecnologia de ponta!</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl"
        >
          Design futurista, experiência imersiva e soluções tecnológicas para elevar seu negócio a outro nível.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <button
            onClick={onRequestQuote}
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10">Solicitar Orçamento</span>
            <span className="absolute inset-0 -z-1 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
          </button>
          
          <a
            href="#services"
            className="btn-outline"
          >
            Conhecer Serviços
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center max-w-4xl"
        >
          {[
            { number: "500+", label: "Clientes Atendidos" },
            { number: "10+", label: "Anos de Experiência" },
            { number: "99%", label: "Satisfação Garantida" },
            { number: "24/7", label: "Suporte Técnico" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-gray-500 text-sm mb-2">Role para descobrir</p>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 bg-neon-blue rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
