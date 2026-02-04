import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const Leadership: React.FC = () => {
  const julianSrc = "/1517661173990.jpeg";

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="leadership" className="py-32 bg-brand-offWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-6 border-2 border-brand-red/10 rounded-lg z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={julianSrc}
                  alt="Julian Moses CA(SA), Managing Partner"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Leadership & Experience</span>
            <h2 className="text-5xl font-serif font-bold text-brand-charcoal mb-2">Built on expertise. Driven by integrity.</h2>
            <p className="text-xl text-brand-grey mb-10 font-medium italic">Founded by Julian Moses CA(SA)</p>

            <div className="space-y-6 text-brand-grey text-lg leading-relaxed mb-12">
              <p>
                JM Moses and Associates was founded with a clear purpose: to provide corporates and SMEs with dependable accounting, tax and advisory services that genuinely support better decision-making.
              </p>
              <p>
                Our team of Chartered Accountants and auditors brings extensive industry experience to every engagement. We uphold the highest ethical standards and take pride in delivering work that is thorough, transparent and aligned with our clients' goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-6 border-b border-brand-border pb-3">Our Values</h3>
                <ul className="space-y-4">
                  {['Commitment to integrity', 'Client-centric service', 'Proactive, clear communication'].map((item, i) => (
                    <li key={i} className="flex items-center text-brand-grey font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center mr-3">
                        <CheckCircle2 size={12} className="text-brand-red" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-6 border-b border-brand-border pb-3">Credentials</h3>
                <ul className="space-y-4">
                  {['Registered auditors & tax experts', 'Members of SAICA', 'Certified Fraud Examiners'].map((item, i) => (
                    <li key={i} className="flex items-center text-brand-grey font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center mr-3">
                        <CheckCircle2 size={12} className="text-brand-red" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button onClick={scrollToContact} variant="secondary" className="px-12">
              Work With Us →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
