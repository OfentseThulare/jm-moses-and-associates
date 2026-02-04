import React from 'react';
import { Award, Users, Shield, Headphones } from 'lucide-react';

interface ReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Reason: React.FC<ReasonProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-6">
    <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red flex-shrink-0">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <div>
      <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-2">{title}</h3>
      <p className="text-brand-grey leading-relaxed">{description}</p>
    </div>
  </div>
);

export const WhyChooseUs: React.FC = () => {
  const reasons: ReasonProps[] = [
    {
      icon: <Award />,
      title: "Decades of Experience",
      description: "Deep expertise built over years of working with Johannesburg businesses, from owner-managed SMEs to established corporates."
    },
    {
      icon: <Users />,
      title: "Personalised Service, Big-Firm Capability",
      description: "We combine the attention and responsiveness of a dedicated team with the technical depth and rigour of a larger practice."
    },
    {
      icon: <Shield />,
      title: "Regulatory Compliance Expertise",
      description: "We stay ahead of South African tax law, IFRS standards and governance requirements so our clients never fall behind."
    },
    {
      icon: <Headphones />,
      title: "Your Trusted Advisors",
      description: "We work alongside you as a long-term partner — not just at year-end, but throughout the year with proactive guidance and support."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="w-full lg:w-5/12">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal leading-tight mb-6">
              A partner that helps your business flourish
            </h2>
            <p className="text-brand-grey text-lg font-light leading-relaxed">
              We go beyond compliance. Our role is to provide the financial clarity and strategic insight that enable you to make confident decisions and grow sustainably.
            </p>
          </div>
          <div className="w-full lg:w-7/12 space-y-10">
            {reasons.map((reason, index) => (
              <Reason key={index} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
