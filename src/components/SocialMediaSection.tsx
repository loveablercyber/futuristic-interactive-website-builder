
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, BarChart3, Search } from 'lucide-react';

const SocialMediaSection: React.FC = () => {
  const [posts, setPosts] = useState(4);
  const [investment, setInvestment] = useState(500);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram", "facebook"]);
  
  const platforms = [
    { id: "instagram", name: "Instagram", icon: <Instagram className="w-6 h-6" /> },
    { id: "facebook", name: "Facebook", icon: <Facebook className="w-6 h-6" /> },
    { id: "linkedin", name: "LinkedIn", icon: <Linkedin className="w-6 h-6" /> },
    { id: "twitter", name: "Twitter", icon: <Twitter className="w-6 h-6" /> },
    { id: "youtube", name: "YouTube", icon: <Youtube className="w-6 h-6" /> },
  ];
  
  const handlePlatformToggle = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(selectedPlatforms.filter(id => id !== platformId));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platformId]);
    }
  };
  
  const handlePostsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosts(parseInt(e.target.value));
  };
  
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestment(parseInt(e.target.value));
  };
  
  // Calculate estimated reach based on selected parameters
  const calculateReach = () => {
    const baseReach = 1000;
    const platformMultiplier = selectedPlatforms.length * 0.8;
    const postsMultiplier = posts * 0.7;
    const investmentMultiplier = investment / 100;
    
    const totalReach = Math.floor(baseReach * platformMultiplier * postsMultiplier * investmentMultiplier);
    return totalReach.toLocaleString();
  };
  
  // Calculate engagement based on reach
  const calculateEngagement = () => {
    const reach = parseInt(calculateReach().replace(/,/g, ''));
    return Math.floor(reach * 0.05).toLocaleString();
  };
  
  const seoPlans = [
    {
      name: "SEO Básico",
      price: "R$ 500/mês",
      features: [
        "Análise técnica do site",
        "Otimização on-page",
        "Pesquisa de palavras-chave",
        "Relatório mensal de resultados",
      ]
    },
    {
      name: "SEO Intermediário",
      price: "R$ 1.000/mês",
      popular: true,
      features: [
        "Análise técnica avançada",
        "Otimização on-page completa",
        "Estratégia de conteúdo",
        "Link building básico",
        "Otimização de conversão",
        "Relatórios quinzenais",
      ]
    },
    {
      name: "SEO Avançado",
      price: "R$ 2.000/mês",
      features: [
        "Auditoria técnica profunda",
        "Otimização on-page premium",
        "Estratégia de conteúdo avançada",
        "Link building avançado",
        "SEO local e Google Meu Negócio",
        "Otimização para voz e mobile",
        "Relatórios semanais com insights",
      ]
    }
  ];
  
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
    <section id="social" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue font-medium text-sm mb-4">
            MARKETING DIGITAL
          </span>
          <h2 className="section-title mb-4">Redes Sociais & SEO</h2>
          <p className="section-subtitle mx-auto">
            Aumente sua presença online com estratégias de marketing digital que convertem visitantes em clientes.
          </p>
        </div>
        
        {/* Social Media Simulator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Simulador de Alcance nas Redes Sociais</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gray-700">Selecione as Plataformas:</h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => handlePlatformToggle(platform.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      selectedPlatforms.includes(platform.id)
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white border-transparent'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-neon-blue'
                    }`}
                  >
                    {platform.icon}
                    <span>{platform.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postagens por Semana: <span className="text-neon-purple font-bold">{posts}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="7"
                      step="1"
                      value={posts}
                      onChange={handlePostsChange}
                      className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2">
                      {[1, 2, 3, 4, 5, 6, 7].map((mark) => (
                        <span key={mark} className="text-xs text-gray-500">
                          {mark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investimento Mensal em Ads: <span className="text-neon-purple font-bold">R$ {investment}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="100"
                      value={investment}
                      onChange={handleInvestmentChange}
                      className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2">
                      {['R$0', 'R$500', 'R$1000', 'R$1500', 'R$2000'].map((mark) => (
                        <span key={mark} className="text-xs text-gray-500">
                          {mark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-6 text-gray-700">Simulação de Resultados:</h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 text-sm">Alcance Estimado Mensal</span>
                    <span className="text-gray-600 text-sm">100%</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-neon-blue mr-2" />
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-neon-blue to-neon-purple h-full"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                    <span className="ml-3 font-bold text-neon-blue">{calculateReach()}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 text-sm">Engajamento Estimado</span>
                    <span className="text-gray-600 text-sm">5%</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-neon-purple mr-2" />
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-neon-purple to-neon-pink h-full"
                        style={{ width: '5%' }}
                      ></div>
                    </div>
                    <span className="ml-3 font-bold text-neon-purple">{calculateEngagement()}</span>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Resumo da Estratégia:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-1">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {selectedPlatforms.length} plataformas selecionadas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-1">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {posts} posts semanais ({posts * 4} posts mensais)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-1">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-gray-600">
                        Investimento mensal de R$ {investment} em anúncios
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/message/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar Proposta Personalizada
            </a>
          </div>
        </div>
        
        {/* SEO Plans */}
        <h3 className="text-2xl font-bold text-center mb-8">Estratégias de SEO</h3>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {seoPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border ${
                plan.popular ? 'border-neon-purple' : 'border-gray-100'
              } transition-all duration-300 hover:shadow-xl`}
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
                    <Search className="w-6 h-6" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h4>
                <div className="flex items-baseline mb-6">
                  <span className="text-2xl font-bold text-neon-purple">{plan.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 mr-2 mt-1">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
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
                  Contratar
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
