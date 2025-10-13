import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'large'
}) => {
  const baseClasses = 'rounded-[15px] shadow-[0px_6px_6px_rgba(0,0,0,0.25)] cursor-pointer transition-transform duration-300 ease-in-out';
  
  const variantClasses = {
    primary: 'bg-[#08872B] text-white hover:bg-[#0a9931]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'w-[440px] h-[80px] text-[2.25rem]'
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  const buttonStyle = size === 'large' ? {
    fontFamily: "Kitten Paws, cursive",
    textShadow: "1px 1px 2px #0d6028",
    letterSpacing: "1px",
  } : {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
