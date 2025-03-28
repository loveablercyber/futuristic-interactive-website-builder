
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import FloatingButtons from '@/components/FloatingButtons';
import ChatBot from '@/components/ChatBot';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HostingSection from '@/components/HostingSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import SystemsSection from '@/components/SystemsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

// Import CSS
import '../index.css';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading for a smoother entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);
  
  const handleRequestQuote = () => {
    window.open('https://wa.me/message/your-whatsapp-number', '_blank');
  };
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: 'easeInOut' }
            }}
            className="fixed inset-0 bg-dark z-50 flex flex-col items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-50 blur-xl animate-pulse"></div>
              <img 
                src="https://placehold.co/200x80/121212/FFFFFF?text=Wz+WebDezign" 
                alt="Wz WebDezign Logo" 
                className="h-16 relative z-10"
              />
            </div>
            <div className="mt-8 w-32 h-1 bg-dark-light rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: 'easeInOut' 
                }}
                className="h-full w-16 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Interactive Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection onRequestQuote={handleRequestQuote} />
        <ServicesSection />
        <HostingSection />
        <SocialMediaSection />
        <SystemsSection />
        <PortfolioSection />
        <ProcessSection />
        <FaqSection />
        <Footer />
      </main>
      
      {/* Floating Buttons */}
      <FloatingButtons openChat={openChat} />
      
      {/* ChatBot */}
      <AnimatePresence mode="wait">
        {isChatOpen && <ChatBot isOpen={isChatOpen} onClose={closeChat} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
