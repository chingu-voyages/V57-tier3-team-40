import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center' | 'right';
  color?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = '',
  size = 'large',
  align = 'left',
  color = '#104C35'
}) => {
  const baseClasses = 'text-[#104C35] font-semibold lg:font-medium';
  
  const sizeClasses = {
    small: 'text-2xl lg:text-3xl xl:text-4xl',
    medium: 'text-3xl lg:text-4xl xl:text-5xl',
    large: 'text-3xl lg:text-4xl xl:text-5xl'
  };
  
  const alignClasses = {
    left: 'text-center lg:text-left',
    center: 'text-center',
    right: 'text-center lg:text-right'
  };

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${alignClasses[align]}
    ${className}
  `.trim();

  return (
    <h2 
      className={combinedClasses}
      style={{ color }}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
