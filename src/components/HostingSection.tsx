
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, HardDrive, Database, Cpu } from 'lucide-react';

const HostingSection: React.FC = () => {
  const [storageValue, setStorageValue] = useState(50);
  const [trafficValue, setTrafficValue] = useState(100);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  // Calculate price based on storage and traffic
  const calculatePrice = () => {
    const storagePrice = storageValue * 0.3;
    const trafficPrice = trafficValue * 0.08;
    return (storagePrice + trafficPrice).toFixed(2);
  };
  
  const handleStorageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStorageValue(parseInt(e.target.value));
  };
  
  const handleTrafficChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrafficValue(parseInt(e.target.value));
  };
  
  const hostingPlans = [
    {
      id: "basic",
      name: "Básico",
      price: "29,90",
      storage: "10GB SSD",
      bandwidth: "100GB/mês",
      domains: "1 domínio",
      features: [
        "Painel de Controle Webuzo",
        "Certificado SSL Grátis",
        "Banco de Dados MySQL",
        "5 Contas de E-mail",
        "Backup Semanal",
      ],
      icon: <HardDrive className="w-6 h-6" />,
    },
    {
      id: "intermediate",
      name: "Intermediário",
      price: "59,90",
      storage: "50GB SSD",
      bandwidth: "Ilimitado",
      domains: "5 domínios",
      features: [
        "Painel de Controle Webuzo",
        "Certificado SSL Grátis",
        "Banco de Dados Ilimitados",
        "20 Contas de E-mail",
        "Backup Diário",
        "CDN Integrado",
      ],
      icon: <Database className="w-6 h-6" />,
      popular: true,
    },
    {
      id: "advanced",
      name: "Avançado",
      price: "99,90",
      storage: "100GB SSD",
      bandwidth: "Ilimitado",
      domains: "Ilimitados",
      features: [
        "Painel de Controle Webuzo",
        "Certificado SSL Wildcard",
        "Banco de Dados Ilimitados",
        "E-mails Ilimitados",
        "Backup Diário",
        "CDN Integrado",
        "Suporte Prioritário",
        "IP Dedicado",
      ],
      icon: <Server className="w-6 h-6" />,
    },
  ];
  
  const vpsPlans = [
    {
      id: "vps-basic",
      name: "VPS Startup",
      price: "99,90",
      cpu: "2 vCPU",
      ram: "4GB RAM",
      storage: "50GB SSD NVMe",
      bandwidth: "2TB",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      id: "vps-business",
      name: "VPS Business",
      price: "149,90",
      cpu: "4 vCPU",
      ram: "8GB RAM",
      storage: "100GB SSD NVMe",
      bandwidth: "4TB",
      icon: <Cpu className="w-6 h-6" />,
      popular: true,
    },
    {
      id: "vps-premium",
      name: "VPS Premium",
      price: "249,90",
      cpu: "8 vCPU",
      ram: "16GB RAM",
      storage: "200GB SSD NVMe",
      bandwidth: "8TB",
      icon: <Cpu className="w-6 h-6" />,
    },
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      }
    }),
    selected: {
      scale: 1.03,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      borderColor: "rgba(0, 240, 255, 0.5)",
    }
  };
  
  const sliderMarks = [0, 25, 50, 75, 100];
  
  return (
    <section id="hosting" className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue font-medium text-sm mb-4">
            HOSPEDAGEM
          </span>
          <h2 className="section-title mb-4">Servidores de Alta Performance</h2>
          <p className="section-subtitle mx-auto">
            Hospedagem rápida e segura para seu site ou aplicação, com recursos escaláveis e suporte técnico 24/7.
          </p>
        </div>
        
        {/* Custom Hosting Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Monte seu Plano Personalizado</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Espaço em Disco SSD (GB)
              </label>
              <div className="relative mb-4">
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={storageValue}
                  onChange={handleStorageChange}
                  className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  {[10, 50, 100, 150, 200].map((mark) => (
                    <span key={mark} className="text-xs text-gray-500">
                      {mark}GB
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-center">
                <span className="text-2xl font-bold text-neon-blue">{storageValue}GB</span>
                <span className="text-gray-500 text-sm"> espaço SSD</span>
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tráfego Mensal (GB)
              </label>
              <div className="relative mb-4">
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="50"
                  value={trafficValue}
                  onChange={handleTrafficChange}
                  className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  {[50, 150, 250, 350, 500].map((mark) => (
                    <span key={mark} className="text-xs text-gray-500">
                      {mark}GB
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-center">
                <span className="text-2xl font-bold text-neon-purple">{trafficValue}GB</span>
                <span className="text-gray-500 text-sm"> tráfego mensal</span>
              </p>
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-xl">
            <p className="text-gray-600 mb-2">Valor Estimado:</p>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              R$ {calculatePrice()}/mês
            </p>
            <p className="text-sm text-gray-500 mt-2">*Valores aproximados, sujeitos a confirmação</p>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/message/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar Orçamento Personalizado
            </a>
          </div>
        </div>
        
        {/* Webuzo Plans */}
        <h3 className="text-2xl font-bold text-center mb-8">Planos de Hospedagem Webuzo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {hostingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              animate={selectedPlan === plan.id ? "selected" : "visible"}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border ${
                plan.popular ? 'border-neon-purple' : 'border-gray-100'
              } transition-all duration-300 hover:shadow-xl`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-semibold px-4 py-1 rounded-bl-lg shadow-lg">
                    MAIS POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h4>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-neon-purple">R$ {plan.price}</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <span className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{plan.storage}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{plan.bandwidth}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{plan.domains}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://wa.me/message/your-whatsapp-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Contratar Agora
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* VPS Plans */}
        <h3 className="text-2xl font-bold text-center mb-8">Servidores VPS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vpsPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border ${
                plan.popular ? 'border-neon-purple' : 'border-gray-100'
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-semibold px-4 py-1 rounded-bl-lg shadow-lg">
                    RECOMENDADO
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h4>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-neon-purple">R$ {plan.price}</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-gray-700">
                    <span className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{plan.cpu}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{plan.ram}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{plan.storage}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{plan.bandwidth}</span>
                  </div>
                </div>
                
                <a
                  href="https://wa.me/message/your-whatsapp-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Solicitar VPS
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingSection;
