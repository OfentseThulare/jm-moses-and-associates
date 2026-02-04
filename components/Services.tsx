import React from 'react';
import { Calculator, FileText, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-10 rounded-lg border border-brand-border hover:border-transparent hover:shadow-2xl transition-all duration-500 group flex flex-col items-start">
    <div className="w-16 h-16 bg-brand-offWhite rounded-full flex items-center justify-center text-brand-red mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">{title}</h3>
    <p className="text-brand-grey leading-relaxed mb-8 flex-grow">{description}</p>
    <button className="flex items-center text-brand-charcoal font-bold text-sm uppercase tracking-wider group/link">
      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
    </button>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      description: "Clean records and decision-ready financial statements that support your daily operations and give you confidence in your numbers.",
      icon: <Calculator />
    },
    {
      title: "Tax Services",
      description: "Full compliance support and strategic planning to minimise liabilities, with clear documentation and timely submissions.",
      icon: <FileText />
    },
    {
      title: "Internal Audit",
      description: "Independent reviews that strengthen internal controls, manage risk and improve governance across your organisation.",
      icon: <ShieldCheck />
    },
    {
      title: "Business Consulting",
      description: "Practical advice and analysis to improve performance, sharpen strategy and drive sustainable profitability.",
      icon: <TrendingUp />
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal leading-tight mb-6">Integrated solutions for every stage of your business</h2>
          <p className="text-brand-grey text-lg font-light leading-relaxed">
            We deliver flexible, enterprise-grade accounting and advisory services tailored for corporates and SMEs — so you can focus on running your business while we handle the numbers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
