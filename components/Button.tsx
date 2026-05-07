import React from 'react';
import { ButtonVariant } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  isLoading = false,
  className = '',
  ...props 
}) => {
  
  const baseClasses = "btn-pop px-6 py-3 rounded-xl font-bold border-b-4 transition-all active:translate-y-1 active:border-b-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-display text-lg";
  
  const variants = {
    [ButtonVariant.PRIMARY]: "bg-pop-orange text-white border-pop-orange-shadow shadow-orange hover:brightness-110",
    [ButtonVariant.SECONDARY]: "bg-pop-blue text-white border-pop-blue-shadow shadow-blue hover:brightness-110",
    [ButtonVariant.SUCCESS]: "bg-pop-green text-white border-pop-green-shadow shadow-green hover:brightness-110",
    [ButtonVariant.PURPLE]: "bg-pop-purple text-white border-pop-purple-shadow shadow-purple hover:brightness-110",
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></div>
        </div>
      ) : children}
    </button>
  );
};