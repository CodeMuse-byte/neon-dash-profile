
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const GlowButton = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  onClick, 
  className = '',
  href 
}: GlowButtonProps) => {
  const baseClasses = `
    group relative px-8 py-4 rounded-lg font-orbitron font-medium 
    transition-all duration-300 transform hover:scale-105 
    flex items-center justify-center space-x-2
    ${className}
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-primary to-secondary text-white
      hover:neon-glow hover:shadow-lg
      border border-primary/20 cyber-border
    `,
    secondary: `
      bg-transparent border-2 border-primary text-primary
      hover:bg-primary hover:text-white hover:neon-glow
      cyber-border
    `
  };

  const content = (
    <>
      {Icon && <Icon size={20} className="group-hover:animate-pulse" />}
      <span className="text-glow">{children}</span>
      
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {content}
    </button>
  );
};

export default GlowButton;
