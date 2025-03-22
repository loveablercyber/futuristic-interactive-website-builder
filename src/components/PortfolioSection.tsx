
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  before?: string;
  after?: string;
}

const PortfolioSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeProjectCategory, setActiveProjectCategory] = useState('all');
  const [compareSlider, setCompareSlider] = useState(50);
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      role: "CEO",
      company: "Silva Advogados",
      text: "A Wz WebDezign transformou completamente a presença digital do nosso escritório. O site ficou elegante, profissional e começamos a receber muito mais contatos de potenciais clientes. Recomendo sem hesitar!",
      rating: 5,
      image: "https://placehold.co/100x100/0F0F0F/FFFFFF?text=AS",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Proprietário",
      company: "Restaurante Sabor & Arte",
      text: "Precisávamos de um sistema de delivery eficiente e a equipe da Wz desenvolveu uma solução perfeita para nosso restaurante. O sistema é fácil de usar e melhorou significativamente nossa operação.",
      rating: 4,
      image: "https://placehold.co/100x100/0F0F0F/FFFFFF?text=CM",
    },
    {
      id: 3,
      name: "Mariana Costa",
      role: "Diretora de Marketing",
      company: "BelezaTotal",
      text: "A gestão de redes sociais feita pela Wz aumentou nossa base de seguidores em 300% em apenas 6 meses. O engajamento é excelente e as vendas online cresceram significativamente. Parceiros de confiança!",
      rating: 5,
      image: "https://placehold.co/100x100/0F0F0F/FFFFFF?text=MC",
    },
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Site Institucional para Escritório de Advocacia",
      category: "websites",
      image: "https://placehold.co/600x400/0F0F0F/FFFFFF?text=Projeto+Advocacia",
    },
    {
      id: 2,
      title: "E-commerce para Loja de Roupas",
      category: "ecommerce",
      image: "https://placehold.co/600x400/0F0F0F/FFFFFF?text=Projeto+E-commerce",
    },
    {
      id: 3,
      title: "Sistema de Agendamento para Clínica",
      category: "systems",
      image: "https://placehold.co/600x400/0F0F0F/FFFFFF?text=Projeto+Clínica",
    },
    {
      id: 4,
      title: "Identidade Visual para Startup",
      category: "branding",
      image: "https://placehold.co/600x400/0F0F0F/FFFFFF?text=Projeto+Branding",
    },
    {
      id: 5,
      title: "Blog para Site de Notícias",
      category: "websites",
      image: "https://placehold.co/600x400/0F0F0F/FFFFFF?text=Projeto+Blog",
    },
    {
      id: 6,
      title: "App de Delivery para Restaurante",
      category: "systems",
      image: "https://placehold.co/600x400/0F0F0F/FFFFFF?text=Projeto+Delivery",
    },
  ];
  
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Reformulação de Site para Consultoria",
      before: "https://placehold.co/800x500/0F0F0F/FFFFFF?text=Antes",
      after: "https://placehold.co/800x500/7B61FF/FFFFFF?text=Depois",
    },
    {
      id: 2,
      title: "Rebranding Completo para Loja",
      before: "https://placehold.co/800x500/0F0F0F/FFFFFF?text=Antes",
      after: "https://placehold.co/800x500/7B61FF/FFFFFF?text=Depois",
    },
    {
      id: 3,
      title: "Otimização de Performance de E-commerce",
      before: "https://placehold.co/800x500/0F0F0F/FFFFFF?text=Antes",
      after: "https://placehold.co/800x500/7B61FF/FFFFFF?text=Depois",
    },
  ];
  
  // Filter projects by category
  const filteredProjects = activeProjectCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeProjectCategory);
  
  // Navigation for testimonials
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Navigation for before/after projects
  const nextBeforeAfter = () => {
    setActiveBeforeAfter((prev) => (prev + 1) % beforeAfterProjects.length);
  };
  
  const prevBeforeAfter = () => {
    setActiveBeforeAfter((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  };
  
  // Handle compare slider change
  const handleCompareSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompareSlider(parseInt(e.target.value));
  };
  
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue font-medium text-sm mb-4">
            PORTFÓLIO
          </span>
          <h2 className="section-title mb-4">Nossos Trabalhos</h2>
          <p className="section-subtitle mx-auto">
            Confira alguns dos nossos projetos mais recentes e as transformações digitais que proporcionamos aos nossos clientes.
          </p>
        </div>
        
        {/* Before/After Slider */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Transformações Digitais</h3>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] md:h-[500px]">
              {/* Before Image */}
              <div className="absolute inset-0">
                <img
                  src={beforeAfterProjects[activeBeforeAfter].before}
                  alt="Antes"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* After Image (with clip-path for slider effect) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `polygon(0 0, ${compareSlider}% 0, ${compareSlider}% 100%, 0 100%)`,
                }}
              >
                <img
                  src={beforeAfterProjects[activeBeforeAfter].after}
                  alt="Depois"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Slider Control */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full max-w-3xl px-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={compareSlider}
                    onChange={handleCompareSliderChange}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full appearance-none h-1 bg-white rounded-full outline-none pointer-events-auto"
                    style={{
                      background: 'linear-gradient(to right, rgba(0, 240, 255, 0.7), rgba(123, 97, 255, 0.7))',
                    }}
                  />
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-20 bg-white rounded-full shadow-lg pointer-events-auto"
                    style={{ left: `calc(${compareSlider}% - 12px)` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1 h-10 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/70 text-white rounded-lg">
                Antes
              </div>
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg">
                Depois
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold text-center mb-2">
                {beforeAfterProjects[activeBeforeAfter].title}
              </h4>
              
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={prevBeforeAfter}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2">
                  {beforeAfterProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveBeforeAfter(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === activeBeforeAfter
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple'
                          : 'bg-gray-300'
                      }`}
                      aria-label={`Ir para projeto ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <button
                  onClick={nextBeforeAfter}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  aria-label="Próximo projeto"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Portfolio Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Galeria de Projetos</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProjectCategory === 'all'
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-neon-blue'
              }`}
              onClick={() => setActiveProjectCategory('all')}
            >
              Todos
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProjectCategory === 'websites'
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-neon-blue'
              }`}
              onClick={() => setActiveProjectCategory('websites')}
            >
              Sites
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProjectCategory === 'ecommerce'
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-neon-blue'
              }`}
              onClick={() => setActiveProjectCategory('ecommerce')}
            >
              E-commerce
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProjectCategory === 'systems'
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-neon-blue'
              }`}
              onClick={() => setActiveProjectCategory('systems')}
            >
              Sistemas
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProjectCategory === 'branding'
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-neon-blue'
              }`}
              onClick={() => setActiveProjectCategory('branding')}
            >
              Branding
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2 py-1 bg-neon-blue/80 text-white text-xs rounded-full mb-2">{project.category}</span>
                  <h3 className="text-white font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">O Que Nossos Clientes Dizem</h3>
          
          <div className="relative bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 rounded-2xl p-8 md:p-12">
            <Quote size={60} className="absolute top-6 left-6 text-neon-blue/10" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center mb-8">
                <div className="mb-4 relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 right-0 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full p-1 shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[activeTestimonial].role} - {testimonials[activeTestimonial].company}</p>
                  <div className="flex justify-center space-x-1 mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className={index < testimonials[activeTestimonial].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-center text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex space-x-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === activeTestimonial
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple'
                          : 'bg-gray-300'
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
