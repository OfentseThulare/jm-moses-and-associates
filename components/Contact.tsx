import React, { useState } from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Accounting',
    message: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-0 bg-white">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        
        {/* Left Side: Image Content */}
        <div className="w-full lg:w-1/2 relative bg-brand-charcoal flex items-center justify-center p-12 lg:p-24 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" 
            alt="Consultant in meeting" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="relative z-10 max-w-md text-white">
             <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Contact Us</span>
             <h2 className="text-5xl font-serif font-bold mb-8 leading-tight">Get a free consultation</h2>
             <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
               Discuss your compliance needs with a qualified professional. We respond within 24 hours.
             </p>
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center font-bold">@</div>
                  <a href="mailto:info@jmmoses.co.za" className="text-lg hover:text-brand-red transition-colors font-medium">info@jmmoses.co.za</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center font-bold">P</div>
                  <a href="tel:+27110000000" className="text-lg hover:text-brand-red transition-colors font-medium">+27 (0) 11 000 0000</a>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 bg-brand-offWhite p-12 lg:p-24 flex items-center">
          <div className="w-full max-w-xl mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-4xl font-serif font-bold text-brand-charcoal mb-4">Message Sent</h3>
                <p className="text-brand-grey text-lg">We will reach out to you shortly with clear next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-3 uppercase tracking-widest">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full p-4 bg-white border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all shadow-sm"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-3 uppercase tracking-widest">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="contact@email.com"
                      className="w-full p-4 bg-white border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all shadow-sm"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-3 uppercase tracking-widest">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+27 (0) ..."
                      className="w-full p-4 bg-white border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all shadow-sm"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal mb-3 uppercase tracking-widest">Interest</label>
                    <select 
                      className="w-full p-4 bg-white border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all shadow-sm appearance-none"
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option>Accounting</option>
                      <option>Tax Services</option>
                      <option>Internal Audit</option>
                      <option>Consulting</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-3 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full p-4 bg-white border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all shadow-sm"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-lg border border-brand-border">
                  <input 
                    required 
                    type="checkbox" 
                    id="consent-contact"
                    className="mt-1 h-5 w-5 text-brand-red border-brand-border rounded focus:ring-brand-red"
                    checked={formData.consent}
                    onChange={e => setFormData({...formData, consent: e.target.checked})}
                  />
                  <label htmlFor="consent-contact" className="text-sm text-brand-grey leading-relaxed">
                    I consent to processing my information for responding to my enquiry.
                  </label>
                </div>

                <Button type="submit" variant="secondary" className="w-full py-5 text-lg">
                  Get in Touch →
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};