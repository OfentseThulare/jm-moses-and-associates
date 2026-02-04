import React, { useState } from 'react';
import { Button } from './Button';
import { ChevronRight, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Do you have up-to-date monthly management accounts?",
    options: [
      { label: "Yes, reviewed monthly", score: 10 },
      { label: "Irregularly / Sometimes", score: 5 },
      { label: "No / Once a year only", score: 0 }
    ]
  },
  {
    id: 2,
    text: "Are your tax submissions (VAT, PAYE, CIT) currently up to date?",
    options: [
      { label: "Yes, fully compliant", score: 10 },
      { label: "Mostly, some outstanding", score: 5 },
      { label: "No, significantly behind", score: 0 }
    ]
  },
  {
    id: 3,
    text: "Do you have a documented risk register?",
    options: [
      { label: "Yes, updated regularly", score: 10 },
      { label: "Informal understanding only", score: 4 },
      { label: "No", score: 0 }
    ]
  },
  {
    id: 4,
    text: "Are personal and business finances strictly separated?",
    options: [
      { label: "Yes, completely separate", score: 10 },
      { label: "Mostly, some mix", score: 5 },
      { label: "No, one bank account", score: 0 }
    ]
  },
  {
    id: 5,
    text: "Do you have signed employment contracts for all staff?",
    options: [
      { label: "Yes, for everyone", score: 10 },
      { label: "For most senior staff", score: 5 },
      { label: "No / Verbal agreements", score: 0 }
    ]
  },
  {
    id: 6,
    text: "Is there a formal process for approving expenses?",
    options: [
      { label: "Yes, strict approval chain", score: 10 },
      { label: "Informal approval", score: 5 },
      { label: "No specific process", score: 0 }
    ]
  },
  {
    id: 7,
    text: "Do you review your cash flow forecast weekly?",
    options: [
      { label: "Yes, weekly review", score: 10 },
      { label: "Monthly or ad-hoc", score: 5 },
      { label: "No forecast in place", score: 0 }
    ]
  },
  {
    id: 8,
    text: "Are your annual financial statements signed off within 6 months of year-end?",
    options: [
      { label: "Yes, always", score: 10 },
      { label: "Sometimes late", score: 5 },
      { label: "Often very late", score: 0 }
    ]
  },
  {
    id: 9,
    text: "Do you have off-site backups of your financial data?",
    options: [
      { label: "Yes, automated cloud backup", score: 10 },
      { label: "Manual backup occasionally", score: 5 },
      { label: "No backups", score: 0 }
    ]
  },
  {
    id: 10,
    text: "Is your CIPC annual duty payment current?",
    options: [
      { label: "Yes", score: 10 },
      { label: "Not sure", score: 2 },
      { label: "No", score: 0 }
    ]
  }
];

type ViewState = 'intro' | 'questions' | 'capture' | 'results';

export const Assessment: React.FC = () => {
  const [view, setView] = useState<ViewState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '', consent: false });

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setView('capture');
    }
  };

  const calculateScore = () => {
    const total = answers.reduce((a, b) => a + b, 0);
    return total;
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadData.consent) {
      setView('results');
    }
  };

  const score = calculateScore();

  const getResultContent = (score: number) => {
    if (score >= 80) {
      return {
        level: "High Compliance Readiness",
        desc: "Your business shows strong governance.",
        recommendations: [
          "Review advanced tax planning opportunities.",
          "Conduct a specialized internal audit for efficiency.",
          "Consider succession planning strategies."
        ]
      };
    } else if (score >= 50) {
      return {
        level: "Moderate Compliance",
        desc: "Good foundations, but gaps exist.",
        recommendations: [
          "Formalize your expense approval processes.",
          "Ensure all tax submissions are brought up to date.",
          "Implement a weekly cash flow review routine."
        ]
      };
    } else {
      return {
        level: "Critical Attention Needed",
        desc: "Significant risks identified in your compliance.",
        recommendations: [
          "Immediate review of tax compliance status.",
          "Separate business and personal banking immediately.",
          "Establish basic monthly management reporting."
        ]
      };
    }
  };

  const result = getResultContent(score);

  return (
    <section id="assessment" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Assessment Tool</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-4 sm:mb-6">Compliance Readiness Score</h2>
          <p className="text-brand-grey text-lg max-w-2xl mx-auto font-light">
            A quick check-up for SMEs to highlight financial and compliance risks. Know your score and get actionable recommendations to strengthen your financial governance.
          </p>
        </div>

        <div className="bg-[#F9F9F9] rounded-xl p-5 sm:p-8 md:p-16 transition-all shadow-sm border border-brand-border">
          
          {view === 'intro' && (
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm text-brand-red">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6">Are your numbers decision-ready?</h3>
              <p className="text-brand-grey text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">This 2-minute assessment will highlight key areas of risk in your financial governance and compliance status.</p>
              <Button onClick={() => setView('questions')} variant="secondary" className="w-full sm:w-auto px-12">
                Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {view === 'questions' && (
            <div>
              <div className="mb-12">
                <div className="flex justify-between text-xs font-bold text-brand-warmGrey mb-4 uppercase tracking-widest">
                  <span>Question {currentQuestionIndex + 1} / {questions.length}</span>
                  <span>{Math.round(((currentQuestionIndex) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-brand-border h-1 rounded-full overflow-hidden">
                  <div 
                    className="bg-brand-red h-full transition-all duration-500"
                    style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8 sm:mb-12 text-brand-charcoal leading-tight">
                {questions[currentQuestionIndex].text}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestionIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left px-4 py-4 sm:px-8 sm:py-6 bg-white border-2 border-transparent rounded-lg hover:border-brand-red hover:shadow-xl transition-all duration-300 flex justify-between items-center group"
                  >
                    <span className="text-brand-charcoal font-bold text-base sm:text-lg group-hover:text-brand-red">{option.label}</span>
                    <div className="w-10 h-10 rounded-full bg-brand-offWhite flex items-center justify-center text-brand-warmGrey group-hover:bg-brand-red group-hover:text-white transition-all">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {view === 'capture' && (
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-4 sm:mb-6">Assessment Complete</h3>
              <p className="text-center text-brand-grey mb-10 text-lg">Enter your details to view your compliance score and priority recommendations.</p>
              <form onSubmit={handleLeadSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-widest">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full p-4 bg-white border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                    value={leadData.name}
                    onChange={e => setLeadData({...leadData, name: e.target.value})}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-widest">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full p-4 bg-white border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                    value={leadData.email}
                    onChange={e => setLeadData({...leadData, email: e.target.value})}
                    placeholder="contact@email.com"
                  />
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-brand-border mt-4">
                  <input 
                    required 
                    type="checkbox" 
                    id="consent-assess"
                    className="mt-1 h-5 w-5 text-brand-red border-brand-border rounded focus:ring-brand-red"
                    checked={leadData.consent}
                    onChange={e => setLeadData({...leadData, consent: e.target.checked})}
                  />
                  <label htmlFor="consent-assess" className="text-sm text-brand-grey leading-relaxed">
                    I consent to JM Moses and Associates processing my information for the purpose of responding to my enquiry.
                  </label>
                </div>
                <Button type="submit" className="w-full mt-6 py-4">View My Results →</Button>
              </form>
            </div>
          )}

          {view === 'results' && (
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center mb-10">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-brand-border"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={377}
                    strokeDashoffset={377 - (377 * score) / 100}
                    className="text-brand-red transition-all duration-1000"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-4xl font-bold text-brand-charcoal">{score}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-4">{result.level}</h3>
              <p className="text-brand-grey text-lg mb-12 max-w-xl mx-auto">{result.desc}</p>
              
              <div className="text-left bg-white p-6 sm:p-10 rounded-lg border border-brand-border mb-12 shadow-sm">
                <h4 className="font-bold text-brand-red mb-6 flex items-center uppercase tracking-widest text-xs">
                  <AlertCircle size={18} className="mr-2" /> 
                  Priority Recommendations
                </h4>
                <ul className="space-y-4">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-brand-red mt-2.5 mr-4 flex-shrink-0"></div>
                      <span className="text-brand-charcoal font-medium text-base sm:text-lg">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} variant="primary" className="px-12">
                  Book a Consult
                </Button>
                <button 
                  onClick={() => {
                    setView('intro');
                    setCurrentQuestionIndex(0);
                    setAnswers([]);
                    setLeadData({name: '', email: '', phone: '', consent: false});
                  }}
                  className="px-8 py-3.5 text-sm font-bold text-brand-warmGrey hover:text-brand-red uppercase tracking-widest transition-colors"
                >
                  Retake Test
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};