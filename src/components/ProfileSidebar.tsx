
import { User, Briefcase, DollarSign, FileText, Package, BookOpen, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSidebar = () => {
  const [activeItem, setActiveItem] = useState('About');
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
      }
    }
  };

  const handlePhotoClick = () => {
    navigate('/');
  };

  return (
    <div className="fixed left-6 top-6 bottom-6 w-72 bg-card border border-border rounded-2xl shadow-lg z-50 overflow-hidden">
      {/* Profile Header */}
      <div className="p-6 text-center border-b border-border">
        <div 
          className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto mb-4 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handlePhotoClick}
        >
          <img
            src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
            alt="Chris Evans"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-1">Chris Evans</h2>
        <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-3 mt-4">
          {socialIcons.map((social, index) => (
            <button
              key={index}
              className="w-8 h-8 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors"
            >
              <span className={`text-sm ${social.color}`}>{social.icon}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.label)}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                  isActive 
                    ? 'bg-green-500 text-white' 
                    : 'hover:bg-accent text-foreground'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
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
        <div className="mt-6">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
            <ExternalLink className="w-4 h-4 mr-2" />
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
