
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  href,
  className = '',
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center px-6 py-3 font-medium
    border rounded-lg transition-all duration-300 font-rajdhani
    hover:scale-105 active:scale-95
  `;

  const variantClasses = {
    primary: `
      bg-primary text-primary-foreground border-primary
      hover:bg-primary/90
    `,
    secondary: `
      bg-secondary text-secondary-foreground border-border
      hover:bg-accent
    `,
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

export default GlowButton;
