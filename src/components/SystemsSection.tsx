
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, ShoppingBag, Calendar, FileText, Users, BarChart } from 'lucide-react';

interface SystemCard {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
}

const SystemsSection: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  
  const systems: SystemCard[] = [
    {
      id: "crm",
      title: "CRM Completo",
      description: "Sistema de gestão de relacionamento com clientes para acompanhar leads, oportunidades e vendas.",
      price: "a partir de R$ 2.499,90",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Gestão de contatos e leads",
        "Pipeline de vendas",
        "Automação de marketing",
        "Relatórios detalhados",
        "Integração com e-mail",
        "App mobile (Android/iOS)"
      ],
      popular: true,
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: "Plataforma de loja virtual completa com gestão de produtos, pedidos e pagamentos.",
      price: "a partir de R$ 3.999,90",
      icon: <ShoppingBag className="w-6 h-6" />,
      features: [
        "Cadastro ilimitado de produtos",
        "Gestão de estoque",
        "Múltiplos meios de pagamento",
        "Cálculo de frete automático",
        "Marketing integrado",
        "Painel administrativo"
      ],
    },
    {
      id: "delivery",
      title: "Sistema de Delivery",
      description: "Solução completa para gerenciar pedidos online, entregas e pagamentos para restaurantes e lojas.",
      price: "a partir de R$ 2.799,90",
      icon: <Box className="w-6 h-6" />,
      features: [
        "Cardápio digital",
        "Pedidos online",
        "Gestão de entregas",
        "Pagamento integrado",
        "Cupons de desconto",
        "App personalizado"
      ],
    },
    {
      id: "agenda",
      title: "Sistema de Agendamento",
      description: "Plataforma para gerenciar horários, consultas e compromissos para clínicas e profissionais.",
      price: "a partir de R$ 1.999,90",
      icon: <Calendar className="w-6 h-6" />,
      features: [
        "Agenda online",
        "Confirmação automática",
        "Lembretes por SMS/E-mail",
        "Histórico de atendimentos",
        "Pagamento antecipado",
        "Personalização completa"
      ],
    },
    {
      id: "erp",
      title: "ERP Básico",
      description: "Sistema integrado para gestão empresarial, com módulos financeiros, estoque e vendas.",
      price: "a partir de R$ 4.999,90",
      icon: <BarChart className="w-6 h-6" />,
      features: [
        "Controle financeiro",
        "Gestão de estoque",
        "Emissão de NF-e",
        "Fluxo de caixa",
        "Relatórios gerenciais",
        "Múltiplos usuários"
      ],
    },
    {
      id: "os",
      title: "Sistema de Ordens de Serviço",
      description: "Controle completo de serviços, com acompanhamento de status, prazos e valores.",
      price: "a partir de R$ 2.299,90",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Cadastro de clientes",
        "Orçamentos digitais",
        "Acompanhamento de serviços",
        "Notificações automáticas",
        "Histórico de atendimentos",
        "Avaliações de clientes"
      ],
    },
  ];
  
  const handleSystemClick = (id: string) => {
    setSelectedSystem(id === selectedSystem ? null : id);
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
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
      }
    })
  };
  
  return (
    <section id="systems" className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue font-medium text-sm mb-4">
            SISTEMAS
          </span>
          <h2 className="section-title mb-4">Sistemas Prontos</h2>
          <p className="section-subtitle mx-auto">
            Soluções de software sob medida para otimizar processos e impulsionar o crescimento do seu negócio.
          </p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              custom={index}
              variants={itemVariants}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 ${
                selectedSystem === system.id
                  ? 'border-neon-purple scale-105 shadow-xl'
                  : 'border-gray-100 hover:shadow-xl'
              } ${system.popular ? 'md:col-span-2 lg:col-span-1 relative' : ''}`}
              onClick={() => handleSystemClick(system.id)}
            >
              {system.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-semibold px-4 py-1 rounded-bl-lg shadow-lg">
                    MAIS VENDIDO
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{system.title}</h3>
                    <p className="text-gray-600 text-sm">{system.description}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    selectedSystem === system.id 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {system.icon}
                  </div>
                </div>
                
                <div className="mt-4 mb-4">
                  <span className="text-neon-purple font-bold">{system.price}</span>
                  <span className="text-gray-500 text-sm"> (licença vitalícia)</span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  selectedSystem === system.id ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-700 mb-3">Funcionalidades:</h4>
                    <ul className="space-y-2">
                      {system.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-1">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 flex justify-between">
                      <a
                        href="#"
                        className="text-neon-blue font-medium text-sm flex items-center hover:underline"
                      >
                        Ver demonstração
                        <ArrowRight size={14} className="ml-1" />
                      </a>
                      
                      <a
                        href="https://wa.me/message/your-whatsapp-number"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSystemClick(system.id);
                  }}
                  className={`mt-4 w-full text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedSystem === system.id 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {selectedSystem === system.id ? 'Menos Detalhes' : 'Ver Detalhes'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Não encontrou o sistema que precisa? Criamos soluções personalizadas para seu negócio!
          </p>
          <a
            href="https://wa.me/message/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Sistema Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
