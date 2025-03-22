
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  isTyping?: boolean;
}

const mockResponses: Record<string, string> = {
  'olá': 'Olá! Como posso ajudar você hoje?',
  'oi': 'Olá! Como posso ajudar você hoje?',
  'sites': 'Sim! Criamos sites institucionais, lojas virtuais, sistemas personalizados e muito mais. Tem algo específico em mente?',
  'quero um site': 'Temos três opções de sites, veja qual combina com você:\n✅ Básico – R$ 999,90 → Até 5 páginas, responsivo, SEO básico.\n✅ Profissional – R$ 1.999,90 → Até 10 páginas, blog, formulário de contato.\n✅ Premium – R$ 3.499,90 → Design exclusivo, SEO avançado, chatbot integrado.',
  'hospedagem': 'Sim! Oferecemos planos com Webuzo:\n✅ Básico (R$ 29,90/mês) – 10GB SSD, SSL grátis.\n✅ Intermediário (R$ 59,90/mês) – 50GB SSD, banco de dados ilimitado.\n✅ Avançado (R$ 99,90/mês) – 100GB SSD, suporte prioritário.',
  'seo': 'Oferecemos estratégias para melhorar seu ranking no Google!\n✅ Básico (R$ 500/mês) → Análise técnica + otimização.\n✅ Intermediário (R$ 1.000/mês) → Estratégia completa + link building.\n✅ Avançado (R$ 2.000/mês) → SEO contínuo + relatórios detalhados.',
  'anúncio': 'Temos planos sob medida para anúncios pagos:\n✅ Básico (R$ 600/mês + investimento) → 1 campanha + segmentação.\n✅ Intermediário (R$ 1.000/mês + investimento) → 2 campanhas + otimização semanal.\n✅ Avançado (R$ 2.000/mês + investimento) → Estratégia completa + funil de vendas.',
  'contato': 'Você pode nos chamar pelo WhatsApp ou e-mail.\n📧 E-mail: contato@webdezign.com.br\n📲 WhatsApp: Clique no botão flutuante para falar com a gente!',
  'planos': 'Temos diversos planos para diferentes necessidades. Você está interessado em qual serviço específico? Sites, hospedagem, marketing digital ou outro?'
};

const ChatBot: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Olá! Sou o assistente virtual da Wz WebDezign. Como posso ajudar você hoje?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Simulate bot typing and response
  const simulateBotResponse = (userInput: string) => {
    // First add a typing indicator
    const typingId = Date.now().toString() + '-typing';
    setMessages(prev => [...prev, { id: typingId, type: 'bot', isTyping: true, text: '' }]);
    
    // Find a response or use default
    let responseText = 'Não entendi completamente. Pode reformular ou escolher um dos nossos tópicos: sites, hospedagem, SEO ou contato?';
    
    // Check for keyword matches
    for (const [keyword, response] of Object.entries(mockResponses)) {
      if (userInput.toLowerCase().includes(keyword.toLowerCase())) {
        responseText = response;
        break;
      }
    }
    
    // Simulate typing delay (between 1 and 3 seconds)
    const typingTime = 1000 + Math.random() * 2000;
    setTimeout(() => {
      // Remove typing indicator and add actual response
      setMessages(prev => 
        prev.filter(msg => msg.id !== typingId)
          .concat({ id: Date.now().toString(), type: 'bot', text: responseText })
      );
    }, typingTime);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now().toString(), type: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input field
    setInput('');
    
    // Get bot response
    simulateBotResponse(input);
  };
  
  // Format messages with line breaks
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md mx-auto h-[90vh] flex flex-col bg-white rounded-xl shadow-xl overflow-hidden animate-slide-in-right">
        {/* Chat header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Assistente WZ</h3>
              <p className="text-xs opacity-80">Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-white/20 transition-colors duration-300"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-neon-blue text-white rounded-tr-none'
                      : 'bg-white shadow-md rounded-tl-none'
                  }`}
                >
                  {message.isTyping ? (
                    <div className="flex items-center space-x-1 h-6">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    <div className="text-sm">{formatMessage(message.text)}</div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Chat input */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 input-field text-sm"
              autoFocus
            />
            <button
              type="submit"
              className="p-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon hover:shadow-neon-hover transition-all duration-300 hover:scale-105"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
