
import { Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import GlowButton from './GlowButton';
import ProfileSidebar from './ProfileSidebar';
import GeometricBackground from './GeometricBackground';
import ThemeControls from './ThemeControls';

const HeroSection = () => {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      {/* Enhanced Geometric Background */}
      <GeometricBackground />
      
      {/* Profile Sidebar */}
      <ProfileSidebar />
      
      <div className="container mx-auto px-4 z-10 max-w-full">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center min-h-[80vh] ml-80">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-8 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="400">
            <div className="space-y-6 lg:space-y-8 text-center px-4 lg:px-8">
              <div data-aos="fade-up" data-aos-delay="500">
                <p className="font-rajdhani text-base lg:text-lg text-muted-foreground uppercase tracking-wider">
                  HI, I'M A FREELANCER
                </p>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600">
                <h1 className="font-orbitron text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse bg-300% animate-gradient-x">
                    Designer
                  </span>
                  <span className="text-muted-foreground">|</span>
                </h1>
              </div>

              <div data-aos="fade-up" data-aos-delay="700">
                <p className="text-base lg:text-lg text-muted-foreground font-rajdhani leading-relaxed max-w-2xl mx-auto">
                  I'm a software engineer specializing in scalable web apps.
                  Explore my{' '}
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold cursor-pointer hover:animate-pulse transition-all">
                    blog
                  </span>
                  ,{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold cursor-pointer hover:animate-pulse transition-all">
                    project portfolio
                  </span>
                  {' '}and{' '}
                  <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-semibold cursor-pointer hover:animate-pulse transition-all">
                    online resume
                  </span>
                  .
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 justify-center" data-aos="fade-up" data-aos-delay="800">
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
                    <div className="text-2xl lg:text-4xl xl:text-5xl font-orbitron font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
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

          {/* Right Avatar */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-end relative" data-aos="fade-left" data-aos-delay="600">
            {/* Theme Controls - Top Right */}
            <div className="absolute top-0 right-0 z-10">
              <ThemeControls />
            </div>
            
            <div className="relative">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 animate-float">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card border border-border transform transition-all duration-700 hover:scale-105 hover:rotate-2">
                  <img
                    src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                    alt="Developer Character"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-black/5" />
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
