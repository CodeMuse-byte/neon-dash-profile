
import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  className = '',
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center px-6 py-3 font-medium
    border rounded-lg transition-all duration-400 font-rajdhani will-change-transform
    hover:scale-105 active:scale-95 hover:shadow-xl hover:-translate-y-1
    transform-gpu
  `;

  const variantClasses = {
    primary: `
      bg-primary text-primary-foreground border-primary
      hover:bg-primary/90 hover:shadow-primary/30 hover:shadow-2xl
    `,
    secondary: `
      bg-secondary text-secondary-foreground border-border
      hover:bg-accent hover:shadow-secondary/30 hover:shadow-xl
    `,
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
    </>
  );

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

export default GlowButton;
