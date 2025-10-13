import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = '',
  size = 'large',
  color,
  weight = 'normal'
}) => {
  const baseClasses = '';
  
  const sizeClasses = {
    small: 'text-sm lg:text-base',
    medium: 'text-base lg:text-lg',
    large: 'lg:text-[1.15rem] xl:text-[1.25rem]'
  };
  
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${weightClasses[weight]}
    ${className}
  `.trim();

  return (
    <p 
      className={combinedClasses}
      style={{ color }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
