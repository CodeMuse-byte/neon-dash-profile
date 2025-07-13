
import { useState, useEffect } from 'react';
import { Github, Linkedin, Moon, Sun, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border cyber-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Navigation Links */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300
                  ${isActive 
                    ? 'text-primary text-glow' 
                    : 'text-muted-foreground hover:text-foreground hover:text-glow'
                  }
                `}
              >
                <Icon size={18} />
                <span className="font-orbitron text-sm font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary neon-glow rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right - Social Icons & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted/20 hover:bg-muted/40 hover:neon-glow-blue transition-all duration-300"
          >
            <Github size={20} />
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted/20 hover:bg-muted/40 hover:neon-glow-blue transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg bg-muted/20 hover:bg-muted/40 hover:neon-glow transition-all duration-300"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
