
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-dark relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-60 h-60 rounded-full bg-neon-purple/5 blur-3xl"></div>
        <div className="absolute right-20 bottom-40 w-40 h-40 rounded-full bg-neon-pink/5 blur-3xl"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="https://placehold.co/200x80/121212/FFFFFF?text=Wz+WebDezign" 
                alt="Wz WebDezign Logo" 
                className="h-10"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Transformamos sua presença digital com soluções tecnológicas inovadoras e design de alta qualidade.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-dark-light flex items-center justify-center text-gray-300 hover:bg-neon-blue hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-dark-light flex items-center justify-center text-gray-300 hover:bg-neon-blue hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-dark-light flex items-center justify-center text-gray-300 hover:bg-neon-blue hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-dark-light flex items-center justify-center text-gray-300 hover:bg-neon-blue hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-dark-light flex items-center justify-center text-gray-300 hover:bg-neon-blue hover:text-white transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                { label: "Sites Institucionais", link: "#services" },
                { label: "Lojas Virtuais", link: "#services" },
                { label: "Sistemas Personalizados", link: "#systems" },
                { label: "Hospedagem", link: "#hosting" },
                { label: "Marketing Digital", link: "#social" },
                { label: "Design Gráfico", link: "#services" },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mr-2"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-neon-blue mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  Av. Principal, 1000 - Sala 205<br />
                  Centro, Cidade - Estado
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-neon-blue mr-3 flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                  (12) 3456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-neon-blue mr-3 flex-shrink-0" size={18} />
                <a href="mailto:contato@webdezign.com.br" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                  contato@webdezign.com.br
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Receba novidades e dicas exclusivas para impulsionar seu negócio digital.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="flex-grow px-4 py-2 bg-dark-light text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded-r-lg hover:shadow-neon transition-all duration-300"
                >
                  Enviar
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-xs">
              Ao assinar, você concorda com nossa Política de Privacidade.
            </p>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="py-8 border-t border-dark-light mb-8">
          <h4 className="text-white text-center font-medium mb-6">Tecnologias & Parceiros</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "https://placehold.co/120x40/1E1E1E/CCCCCC?text=WordPress",
              "https://placehold.co/120x40/1E1E1E/CCCCCC?text=React",
              "https://placehold.co/120x40/1E1E1E/CCCCCC?text=Google",
              "https://placehold.co/120x40/1E1E1E/CCCCCC?text=AWS",
              "https://placehold.co/120x40/1E1E1E/CCCCCC?text=Stripe",
            ].map((logo, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img src={logo} alt={`Partner ${index + 1}`} className="h-10" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-dark-light pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} WZ WebDezign. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 text-sm hover:text-neon-blue transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-neon-blue transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-neon-blue transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
