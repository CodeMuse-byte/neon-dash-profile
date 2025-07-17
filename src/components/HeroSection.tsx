
import { Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import GlowButton from './GlowButton';
import ThreeDBackground from './ThreeDBackground';
import TypingAnimation from './TypingAnimation';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      {/* 3D Background */}
      <ThreeDBackground />
      
      <div className="container mx-auto px-4 z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8" data-aos="fade-up" data-aos-delay="400">
            {/* Greeting */}
            <div data-aos="fade-up" data-aos-delay="500">
              <p className="font-rajdhani text-lg text-muted-foreground uppercase tracking-wider">
                HI, I'M A FREELANCER
              </p>
            </div>
            
            {/* Main Heading with Typing Animation */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h1 className="font-orbitron text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <TypingAnimation 
                  text="Designer"
                  className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
                />
              </h1>
            </div>

            {/* Description */}
            <div data-aos="fade-up" data-aos-delay="700">
              <p className="text-lg lg:text-xl text-muted-foreground font-rajdhani leading-relaxed">
                I'm a software engineer specializing in scalable web applications.
                Explore my portfolio of innovative projects and cutting-edge solutions
                that push the boundaries of modern web development.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8" data-aos="fade-up" data-aos-delay="800">
              <GlowButton 
                variant="primary" 
                icon={ExternalLink}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4"
              >
                Explore Projects
              </GlowButton>
              
              <GlowButton 
                variant="secondary" 
                icon={Download}
                href="/resume.pdf"
                className="text-lg px-8 py-4"
              >
                View Resume
              </GlowButton>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="600">
            <div className="relative">
              {/* Main Photo */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 backdrop-blur-sm">
                  <img
                    src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                    alt="Chris Evans - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-xl flex items-center justify-center animate-bounce">
                  <span className="text-2xl">💻</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 backdrop-blur-sm border border-secondary/30 rounded-xl flex items-center justify-center animate-pulse">
                  <span className="text-2xl">🚀</span>
                </div>
                
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center animate-ping">
                  <span className="text-lg">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="900">
          {[
            { number: '5+', label: 'Years\nExperience' },
            { number: '110+', label: 'Projects\nCompleted' },
            { number: '6K+', label: 'Clients\nWorldwide' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center" data-aos="zoom-in" data-aos-delay={1000 + index * 100}>
              <div className="text-3xl lg:text-5xl font-orbitron font-black text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-rajdhani whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
