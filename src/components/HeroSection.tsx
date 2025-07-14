
import { Download, ExternalLink, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlowButton from './GlowButton';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/cover')}
        className="absolute top-8 left-8 z-20 p-3 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-6" data-aos="fade-right" data-aos-delay="100">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
              {/* Profile */}
              <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="200">
                <div className="w-20 h-20 mx-auto mb-4 cyber-border rounded-full overflow-hidden">
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
                {[
                  { name: 'About Us', active: true },
                  { name: 'Portfolio', count: '16' },
                  { name: 'Services & Pricing' },
                  { name: 'Resume' },
                  { name: 'Products' },
                  { name: 'Blog' },
                  { name: 'Contact' }
                ].map((item, index) => (
                  <div 
                    key={item.name}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      item.active 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    data-aos="fade-up" 
                    data-aos-delay={300 + index * 50}
                  >
                    <span className="font-rajdhani">{item.name}</span>
                    {item.count && (
                      <span className="text-xs bg-background/20 px-2 py-1 rounded">
                        {item.count}
                      </span>
                    )}
                  </div>
                ))}
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
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow">
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
            <div className="relative animate-float">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Character Illustration */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border">
                  <img
                    src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                    alt="Developer Character"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="1200">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
