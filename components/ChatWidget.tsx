import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! Welcome to JM Moses and Associates. How can we help you with your compliance today?", sender: 'agent' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isOffline] = useState(true); // Default to offline to demonstrate the "leave a message" feature
  const [step, setStep] = useState<'chat' | 'email'>('chat');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const newMsg: Message = { id: Date.now(), text: userText, sender: 'user' };
    
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");

    // Simulate bot/offline logic response
    if (isOffline && step === 'chat') {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: "Our agents are currently unavailable. Please leave your email address so we can get back to you.", 
          sender: 'agent' 
        }]);
        setStep('email');
      }, 1000);
    } else if (step === 'email') {
      // Simple email validation check (very basic)
      if (userText.includes('@')) {
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            text: "Thank you. We'll be in touch shortly.", 
            sender: 'agent' 
          }]);
          setStep('chat'); 
        }, 1000);
      } else {
         setTimeout(() => {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            text: "Please enter a valid email address.", 
            sender: 'agent' 
          }]);
        }, 500);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden border border-brand-border flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-brand-charcoal p-4 flex justify-between items-center text-white">
            <div>
              <h3 className="font-serif font-semibold tracking-wide">JM Moses Support</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`w-2 h-2 rounded-full ${isOffline ? 'bg-brand-warmGrey' : 'bg-green-500'}`}></span>
                <span className="text-xs text-brand-border/80">{isOffline ? 'Leave a message' : 'Online'}</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-brand-border/60 hover:text-white transition-colors"
            >
              <Minus size={20} />
            </button>
          </div>

          {/* Chat Body - Soft Red Tint Background */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-[#DCC9C8] flex flex-col space-y-4 scrollbar-thin scrollbar-thumb-brand-charcoal/20">
             <div className="text-center text-xs text-brand-charcoal/50 my-2">Today</div>
             {messages.map((msg) => (
               <div 
                 key={msg.id} 
                 className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${
                   msg.sender === 'user'
                     ? 'bg-brand-charcoal text-white self-end rounded-br-sm'
                     : 'bg-white text-brand-charcoal self-start rounded-bl-sm border border-white/50'
                 }`}
               >
                 {msg.text}
               </div>
             ))}
             <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="bg-white p-3 border-t border-brand-border">
            <div className="flex items-center gap-2 bg-brand-offWhite rounded-lg px-4 py-2 border border-transparent focus-within:border-brand-charcoal/20 transition-all">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={step === 'email' ? "Enter your email..." : "Type your message..."}
                className="flex-1 bg-transparent border-none outline-none text-sm text-brand-charcoal placeholder:text-brand-warmGrey"
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim()}
                className="text-brand-charcoal hover:text-brand-red disabled:opacity-30 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Launcher Button - Charcoal for initiation */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          isOpen 
            ? 'bg-brand-grey text-white rotate-90' 
            : 'bg-brand-charcoal text-white hover:bg-brand-charcoal/90'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};