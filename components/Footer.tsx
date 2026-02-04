import React from 'react';

export const Footer: React.FC = () => {
  const logoSrc = "/Logo.png";

  return (
    <>
      {/* Dark CTA Banner Section */}
      <section className="bg-brand-charcoal py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,1000 C300,800 400,950 700,700 C1000,450 1000,0 1000,0" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0,800 C300,600 400,750 700,500 C1000,250 1000,-200 1000,-200" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">Ready to strengthen your financial foundation?</h2>
              <p className="text-xl text-white/70 font-light">Let us help you achieve clarity, compliance and sustainable growth.</p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 sm:px-10 py-4 rounded-lg border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all duration-300 text-center text-sm sm:text-base whitespace-nowrap"
            >
              Request a Consultation →
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-white border-t border-brand-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="col-span-2 sm:col-span-2 md:col-span-1">
              <img 
                src={logoSrc} 
                alt="JM Moses and Associates" 
                className="h-12 w-auto mb-8 rounded-lg"
              />
              <p className="text-brand-grey text-sm leading-relaxed">
                Trusted accounting, tax, audit and advisory services for corporates, SMEs and individuals.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-brand-charcoal">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold text-brand-grey">
                <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-brand-red transition-colors">Services</a></li>
                <li><a href="#leadership" className="hover:text-brand-red transition-colors">Our Team</a></li>
                <li><a href="#assessment" className="hover:text-brand-red transition-colors">Assessment</a></li>
                <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-brand-charcoal">Resources</h4>
              <ul className="space-y-4 text-sm font-bold text-brand-grey">
                <li><a href="#" className="hover:text-brand-red transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Style Guide</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Licensing</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Legal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-brand-charcoal">Social</h4>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-lg border border-brand-border flex items-center justify-center text-brand-charcoal hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">X</a>
                 <a href="#" className="w-10 h-10 rounded-lg border border-brand-border flex items-center justify-center text-brand-charcoal hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">in</a>
                 <a href="#" className="w-10 h-10 rounded-lg border border-brand-border flex items-center justify-center text-brand-charcoal hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">Ig</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-xs font-bold text-brand-warmGrey uppercase tracking-widest">
              &copy; {new Date().getFullYear()} JM Moses and Associates. All rights reserved.
            </span>
            <div className="flex gap-8 text-xs font-bold text-brand-warmGrey uppercase tracking-widest">
              <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-red transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};