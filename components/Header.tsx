import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoSrc = "/Logo.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={logoSrc} 
              alt="JM Moses and Associates" 
              className={`h-12 w-auto rounded-lg transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            {[
              { label: 'Home', target: 'home' },
              { label: 'Services', target: 'services' },
              { label: 'Our Team', target: 'leadership' },
              { label: 'Assessment', target: 'assessment' },
              { label: 'Contact', target: 'contact' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.target === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
                  else scrollToSection(item.target);
                }}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  isScrolled ? 'text-brand-charcoal hover:text-brand-red' : 'text-white hover:text-brand-softRed'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant={isScrolled ? "secondary" : "outline"} 
              className="ml-6 px-6 py-2.5 text-xs"
            >
              Book a Consultation →
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-brand-charcoal' : 'text-white'} p-2 transition-colors`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-brand-border shadow-2xl py-8 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-6 px-8">
            {[
              { label: 'Home', target: 'home' },
              { label: 'Services', target: 'services' },
              { label: 'Our Team', target: 'leadership' },
              { label: 'Assessment', target: 'assessment' },
              { label: 'Contact', target: 'contact' }
            ].map((item) => (
               <button
                 key={item.label}
                 onClick={() => {
                   if (item.target === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
                   else scrollToSection(item.target);
                 }}
                 className="text-left text-brand-charcoal font-bold uppercase tracking-widest text-lg"
               >
                 {item.label}
               </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} variant="primary" className="w-full">
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};