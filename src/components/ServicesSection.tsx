
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShoppingCart, PaintBucket } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: Array<{ name: string; price: string }>;
}

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("websites");
  
  const services: Service[] = [
    {
      id: "websites",
      title: "Sites Institucionais",
      description: "Criamos sites profissionais e otimizados para diferentes segmentos, com design exclusivo e alta performance.",
      icon: <Globe className="w-6 h-6" />,
      examples: [
        { name: "Advocacia", price: "a partir de R$ 1.499,90" },
        { name: "Contabilidade", price: "a partir de R$ 1.299,90" },
        { name: "Clínicas", price: "a partir de R$ 1.699,90" },
        { name: "Consultorias", price: "a partir de R$ 1.499,90" },
        { name: "Arquitetura", price: "a partir de R$ 1.799,90" },
        { name: "Imobiliária", price: "a partir de R$ 2.199,90" },
      ],
    },
    {
      id: "ecommerce",
      title: "Lojas Virtuais",
      description: "Soluções completas de e-commerce para vender online com segurança, integração com meios de pagamento e gestão de estoque.",
      icon: <ShoppingCart className="w-6 h-6" />,
      examples: [
        { name: "Loja Básica", price: "a partir de R$ 2.999,90" },
        { name: "Loja Intermediária", price: "a partir de R$ 4.999,90" },
        { name: "Loja Avançada", price: "a partir de R$ 7.999,90" },
        { name: "Marketplace", price: "a partir de R$ 12.999,90" },
        { name: "Dropshipping", price: "a partir de R$ 3.499,90" },
        { name: "Assinaturas", price: "a partir de R$ 5.499,90" },
      ],
    },
    {
      id: "branding",
      title: "Artes Gráficas & Branding",
      description: "Design profissional para sua marca, incluindo logotipos, identidade visual, materiais impressos e digitais.",
      icon: <PaintBucket className="w-6 h-6" />,
      examples: [
        { name: "Logotipo", price: "a partir de R$ 499,90" },
        { name: "Identidade Visual", price: "a partir de R$ 1.299,90" },
        { name: "Cartão de Visita", price: "a partir de R$ 199,90" },
        { name: "Folder/Flyer", price: "a partir de R$ 249,90" },
        { name: "Social Media Kit", price: "a partir de R$ 599,90" },
        { name: "Catálogo Digital", price: "a partir de R$ 899,90" },
      ],
    },
  ];
  
  const activeService = services.find(service => service.id === activeTab) || services[0];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue font-medium text-sm mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="section-title mb-4">Soluções para seu negócio</h2>
          <p className="section-subtitle mx-auto">
            Desenvolvemos experiências digitais completas, desde a concepção da marca até implementação de sistemas avançados.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service Tabs */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4 mb-8 lg:mb-0 overflow-x-auto pb-4 lg:pb-0">
            {services.map((service) => (
              <button
                key={service.id}
                className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-purple shadow-lg'
                    : 'bg-white/80 hover:bg-white hover:shadow-lg border-l-4 border-transparent'
                }`}
                onClick={() => setActiveTab(service.id)}
              >
                <div className={`p-3 rounded-lg ${
                  activeTab === service.id 
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {service.icon}
                </div>
                <div className="text-left">
                  <h3 className={`font-bold text-lg ${
                    activeTab === service.id ? 'text-neon-purple' : 'text-gray-800'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                    {service.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Service Details */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{activeService.title}</h3>
                  <p className="text-gray-600">{activeService.description}</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white">
                  {activeService.icon}
                </div>
              </div>
              
              <h4 className="font-semibold text-lg mb-4 text-gray-700">Opções Disponíveis:</h4>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {activeService.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card-glass p-4 flex justify-between items-center group hover:bg-gradient-to-r hover:from-neon-blue/5 hover:to-neon-purple/5"
                  >
                    <div>
                      <h5 className="font-medium text-gray-800">{example.name}</h5>
                      <p className="text-neon-purple font-semibold">{example.price}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-white transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="mt-8 flex justify-center">
                <a
                  href="https://wa.me/message/your-whatsapp-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Ver Demonstração
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
