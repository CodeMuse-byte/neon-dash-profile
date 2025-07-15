
import { Download, ExternalLink, ArrowLeft, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlowButton from './GlowButton';

const HeroSection = () => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, active: true },
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
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50"></div>
      </div>
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/cover')}
        className="absolute top-8 left-8 z-20 p-3 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-6" data-aos="fade-right" data-aos-delay="100">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
              {/* Profile */}
              <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="200">
                <div className="w-20 h-20 mx-auto mb-4 border border-border rounded-full overflow-hidden">
                  <img
                    src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                    alt="Alex Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-foreground">Alex Chen</h3>
                <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-300 ${
                        item.active 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      data-aos="fade-up" 
                      data-aos-delay={300 + index * 50}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={18} />
                        <span className="font-rajdhani">{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Hire Me Button */}
              <div className="mt-8" data-aos="fade-up" data-aos-delay="700">
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-rajdhani font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
                  ✈ Hire Me
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-8" data-aos="fade-up" data-aos-delay="400">
            <div className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="500">
                <p className="font-rajdhani text-lg text-muted-foreground uppercase tracking-wider">
                  HI, I'M A FREELANCER
                </p>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600">
                <h1 className="font-orbitron text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Designer
                  </span>
                  <span className="text-foreground">|</span>
                </h1>
              </div>

              <div data-aos="fade-up" data-aos-delay="700">
                <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
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
              <div className="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up" data-aos-delay="800">
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
              <div className="grid grid-cols-3 gap-8 pt-8" data-aos="fade-up" data-aos-delay="900">
                {[
                  { number: '5', label: 'Years of\nExperience' },
                  { number: '110', label: 'Projects\nCompleted' },
                  { number: '6k', label: 'Clients\nWorldwide' }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center" data-aos="zoom-in" data-aos-delay={1000 + index * 100}>
                    <div className="text-4xl lg:text-5xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-rajdhani whitespace-pre-line mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="lg:col-span-3 flex justify-center" data-aos="fade-left" data-aos-delay="600">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
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
