import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Leadership } from './components/Leadership';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Assessment } from './components/Assessment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-charcoal selection:bg-brand-softRed selection:text-brand-charcoal">
      <Header />
      <main>
        <Hero />
        <Services />
        <Leadership />
        <WhyChooseUs />
        <Assessment />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;