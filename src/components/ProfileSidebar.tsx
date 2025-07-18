
import { User, Briefcase, DollarSign, FileText, Package, BookOpen, Mail, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSidebar = () => {
  const [activeItem, setActiveItem] = useState('About');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: 'About', isActive: true },
    { icon: Briefcase, label: 'Skills' },
    { icon: DollarSign, label: 'Projects', badge: '16' },
    { icon: FileText, label: 'Testimonials' },
    { icon: Mail, label: 'Contact' },
  ];

  const socialIcons = [
    { icon: '💬', color: 'text-green-500' },
    { icon: '📷', color: 'text-pink-500' },
    { icon: '🐦', color: 'text-blue-500' },
    { icon: '💼', color: 'text-blue-600' },
  ];

  const scrollToSection = (label: string) => {
    const sectionMap: { [key: string]: string } = {
      'About': 'home',
      'Skills': 'skills',
      'Projects': 'projects',
      'Testimonials': 'testimonials',
      'Contact': 'contact',
    };

    const sectionId = sectionMap[label];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveItem(label);
        // Hide sidebar after clicking menu item
        setIsOpen(false);
      }
    }
  };

  const handlePhotoClick = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // Dispatch custom event to notify parent component
    window.dispatchEvent(new CustomEvent('sidebarToggle'));
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-[60] w-10 h-10 bg-card border border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-105"
        aria-label="Toggle sidebar"
      >
        <div className="flex flex-col space-y-1">
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-400"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-screen w-72 bg-card border-r border-border shadow-lg z-50 overflow-hidden flex flex-col transition-transform duration-400 ease-in-out will-change-transform ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
      {/* Profile Header */}
      <div className="p-8 text-center border-b border-border">
        <div 
          className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-6 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handlePhotoClick}
        >
          <img
            src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
            alt="Chris Evans"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Chris Evans</h2>
        <p className="text-sm text-muted-foreground mb-6">Senior Software Engineer</p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-3">
          {socialIcons.map((social, index) => (
            <button
              key={index}
              className="w-10 h-10 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors"
            >
              <span className={`text-sm ${social.color}`}>{social.icon}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="p-6 flex-1 flex flex-col">
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.label)}
                className={`w-full flex items-center px-4 py-4 rounded-xl text-left transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                    : 'hover:bg-accent text-foreground hover:scale-[1.02]'
                }`}
              >
                <Icon className="w-5 h-5 mr-4" />
                <span className="flex-1 font-medium">{item.label}</span>
                {item.badge && (
                  <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Hire Me Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center hover:scale-[1.02] shadow-lg shadow-blue-500/25 mt-auto">
          <ExternalLink className="w-4 h-4 mr-2" />
          Hire Me
        </button>
      </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
