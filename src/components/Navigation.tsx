
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems: NavItem[] = [
    { id: 'hero', label: 'Início', icon: '🏠' },
    { id: 'services', label: 'Serviços', icon: '🛠️' },
    { id: 'hosting', label: 'Hospedagem', icon: '☁️' },
    { id: 'social', label: 'Redes Sociais', icon: '📱' },
    { id: 'systems', label: 'Sistemas', icon: '💻' },
    { id: 'portfolio', label: 'Portfólio', icon: '🎨' },
    { id: 'process', label: 'Como Trabalhamos', icon: '📋' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
    { id: 'contact', label: 'Contato', icon: '📞' },
  ];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };
  
  // Handle scroll event to determine active section and navbar style
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 300;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);
  
  // Variants for animations
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };
  
  return (
    <>
      {/* Desktop Navigation - Vertical on the right */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 shadow-glass hover:shadow-neon-hover'
              }`}
              aria-label={item.label}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="absolute right-full mr-4 whitespace-nowrap bg-white/90 backdrop-blur-sm py-2 px-4 rounded-lg shadow-glass opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Navigation - Top Bar with Hamburger Menu */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/100x40/7B61FF/FFFFFF?text=Wz" alt="Wz WebDezign Logo" className="h-10" />
          </div>
          
          <button 
            onClick={toggleMenu} 
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-glass text-dark hover:shadow-neon-hover transition-all duration-300"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl py-4 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button 
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="mr-4 text-xl">{item.icon}</span>
                    <span className="text-lg font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
