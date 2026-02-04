import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920"
          alt="Professional team collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Financial clarity. Compliance. Growth.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light">
            We partner with businesses and individuals to maintain financial order, ensure compliance and support sustainable growth — through integrated accounting, tax, audit and advisory services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button onClick={scrollToContact} variant="outline" className="group">
              Contact Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button onClick={scrollToContact} variant="primary">
              Book a Consultation →
            </Button>
          </div>
        </div>
      </div>

      {/* Slanted Bottom Edge */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      ></div>
    </section>
  );
};
