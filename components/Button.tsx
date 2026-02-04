import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red disabled:opacity-50 disabled:cursor-not-allowed rounded-lg tracking-wide uppercase";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-brightRed hover:shadow-lg hover:-translate-y-0.5 border border-transparent",
    secondary: "bg-brand-charcoal text-white hover:bg-black border border-transparent shadow-sm hover:shadow-lg hover:-translate-y-0.5",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-charcoal transition-all duration-300"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};