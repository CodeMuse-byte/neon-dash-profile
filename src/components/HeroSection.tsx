
import { Download, ExternalLink, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GlowButton from './GlowButton';
import ThemeToggle from './ThemeToggle';
import SocialIcons from './SocialIcons';
import GeometricBackground from './GeometricBackground';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, active: true },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhotoClick = () => {
    navigate('/cover');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      {/* Enhanced Geometric Background */}
      <GeometricBackground />
      
      <div className="container mx-auto px-4 z-10 max-w-full">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center min-h-[80vh]">
          {/* Modern Left Sidebar - Removed margins */}
          <div className="col-span-12 lg:col-span-3 xl:col-span-3" data-aos="fade-right" data-aos-delay="100">
            <div className="sticky top-8 bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border/50 shadow-2xl shadow-black/20">
              {/* Avatar Section - Clickable */}
              <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="200">
                <div 
                  className="relative w-20 h-20 mx-auto mb-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setIsAvatarHovered(true)}
                  onMouseLeave={() => setIsAvatarHovered(false)}
                  onClick={handlePhotoClick}
                >
                  <div className="w-full h-full border-2 border-primary/30 rounded-full overflow-hidden shadow-lg shadow-primary/20">
                    <img
                      src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                      alt="Alex Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Waving hand emoji overlay */}
                  <div className={`absolute -top-1 -right-1 text-2xl transition-all duration-300 ${
                    isAvatarHovered ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-75'
                  }`}>
                    👋
                  </div>
                </div>
                
                {/* Name and Role */}
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-2 tracking-wide">
                  Alex Chen
                </h3>
                <p className="text-sm text-muted-foreground font-rajdhani font-light tracking-wider">
                  Senior Software Engineer
                </p>
              </div>

              {/* Social Icons */}
              <div className="mb-8" data-aos="fade-up" data-aos-delay="300">
                <SocialIcons />
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2 mb-8">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center w-full p-3 rounded-xl transition-all duration-300 group ${
                        item.active 
                          ? 'bg-primary/20 text-primary border border-primary/30 shadow-md shadow-primary/10' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/30 hover:border-muted-foreground/20 border border-transparent'
                      }`}
                      data-aos="fade-up" 
                      data-aos-delay={400 + index * 50}
                    >
                      <Icon className="w-5 h-5 mr-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-rajdhani text-base font-medium tracking-wide">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Hire Button */}
              <div className="space-y-4" data-aos="fade-up" data-aos-delay="700">
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-rajdhani font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 text-base tracking-wide">
                  ✈ Hire Me
                </button>
              </div>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-6 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="400">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left px-4 lg:px-8">
              <div data-aos="fade-up" data-aos-delay="500">
                <p className="font-rajdhani text-base lg:text-lg text-muted-foreground uppercase tracking-wider">
                  HI, I'M A FREELANCER
                </p>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600">
                <h1 className="font-orbitron text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Designer
                  </span>
                  <span className="text-foreground">|</span>
                </h1>
              </div>

              <div data-aos="fade-up" data-aos-delay="700">
                <p className="text-base lg:text-lg text-muted-foreground font-rajdhani leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I'm a software engineer specializing in scalable web apps.
                  Explore my{' '}
                  <span className="text-primary underline cursor-pointer hover:text-secondary transition-colors">
                    blog
                  </span>
                  ,{' '}
                  <span className="text-primary underline cursor-pointer hover:text-secondary transition-colors">
                    project portfolio
                  </span>
                  {' '}and{' '}
                  <span className="text-primary underline cursor-pointer hover:text-secondary transition-colors">
                    online resume
                  </span>
                  .
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800">
                <GlowButton 
                  variant="primary" 
                  icon={ExternalLink}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  → View Portfolio
                </GlowButton>
                
                <GlowButton 
                  variant="secondary" 
                  icon={Download}
                  href="/resume.pdf"
                >
                  📄 View Resume
                </GlowButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8" data-aos="fade-up" data-aos-delay="900">
                {[
                  { number: '5', label: 'Years of\nExperience' },
                  { number: '110', label: 'Projects\nCompleted' },
                  { number: '6k', label: 'Clients\nWorldwide' }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center" data-aos="zoom-in" data-aos-delay={1000 + index * 100}>
                    <div className="text-2xl lg:text-4xl xl:text-5xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-muted-foreground font-rajdhani whitespace-pre-line mt-1 lg:mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Avatar - Far Right */}
          <div className="col-span-12 lg:col-span-3 xl:col-span-3 flex justify-center lg:justify-end relative" data-aos="fade-left" data-aos-delay="600">
            {/* Theme Toggle - Top Right */}
            <div className="absolute top-0 right-0 z-10">
              <ThemeToggle />
            </div>
            
            <div className="relative">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 animate-float">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-border transform transition-all duration-700 hover:scale-105 hover:rotate-2">
                  <img
                    src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                    alt="Developer Character"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
