import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  to?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  to, 
  className = '',
  type = 'button',
  disabled = false
}) => {
  // Base styles: Shape, typography, and basic transitions
  // Added hover:scale-105 for the slight expansion requirement
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 font-medium tracking-wide text-sm uppercase disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95";
  
  const variants = {
    // Primary: Gold background, dark text. 
    // Uses .btn-glow-animate from index.html for the pulsing shadow.
    primary: "bg-[#e7c8a0] text-stone-900 hover:bg-[#dcb585] btn-glow-animate",
    
    // Outline: Border only initially.
    // On hover: Fills with gold, dark text, and also gets the glow.
    outline: "border border-[#e7c8a0] text-[#e7c8a0] hover:bg-[#e7c8a0] hover:text-stone-900 btn-glow-animate",
    
    // Ghost: Minimalist, just text change. No expansion or glow to keep it subtle (usually for secondary links).
    // If client wanted *all* buttons including ghost to glow, we'd add it here, but usually 'buttons' implies the pill shapes.
    // I will keep ghost simple but add a subtle color shift.
    ghost: "text-stone-300 hover:text-[#e7c8a0] hover:bg-white/5"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;