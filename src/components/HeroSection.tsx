
import { Download, ExternalLink, ArrowLeft, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlowButton from './GlowButton';

const HeroSection = () => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, active: true },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Works', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      {/* Floating Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/cover')}
        className="absolute top-8 left-8 z-20 p-3 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <div className="container mx-auto px-4 z-10 max-w-full">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center min-h-[80vh]">
          {/* Left Sidebar Navigation - Far Left */}
          <div className="col-span-12 lg:col-span-2 xl:col-span-2" data-aos="fade-right" data-aos-delay="100">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-border">
              {/* Profile */}
              <div className="text-center mb-6 lg:mb-8" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-3 lg:mb-4 border border-border rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                    alt="Alex Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-orbitron text-sm lg:text-lg font-bold text-foreground">Alex Chen</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">Senior Software Engineer</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-1 lg:space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center justify-between w-full p-2 lg:p-3 rounded-lg transition-all duration-300 ${
                        item.active 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      data-aos="fade-up" 
                      data-aos-delay={300 + index * 50}
                    >
                      <div className="flex items-center space-x-2 lg:space-x-3">
                        <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                        <span className="font-rajdhani text-sm lg:text-base">{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Hire Me Button */}
              <div className="mt-6 lg:mt-8" data-aos="fade-up" data-aos-delay="700">
                <button className="w-full py-2 lg:py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-rajdhani font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 text-sm lg:text-base">
                  ✈ Hire Me
                </button>
              </div>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="400">
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
          <div className="col-span-12 lg:col-span-3 xl:col-span-3 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="600">
            <div className="relative">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-border">
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
