
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
      
      <div className="container mx-auto px-4 z-10 max-w-4xl">
        <div className="text-center space-y-8" data-aos="fade-up" data-aos-delay="400">
          {/* Greeting */}
          <div data-aos="fade-up" data-aos-delay="500">
            <p className="font-rajdhani text-lg text-muted-foreground uppercase tracking-wider">
              HI, I'M A FREELANCER
            </p>
          </div>
          
          {/* Main Heading with Typing Animation */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h1 className="font-orbitron text-5xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <TypingAnimation 
                text="Designer"
                className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
              />
            </h1>
          </div>

          {/* Description */}
          <div data-aos="fade-up" data-aos-delay="700">
            <p className="text-lg lg:text-xl text-muted-foreground font-rajdhani leading-relaxed max-w-3xl mx-auto">
              I'm a software engineer specializing in scalable web applications.
              Explore my portfolio of innovative projects and cutting-edge solutions
              that push the boundaries of modern web development.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center" data-aos="fade-up" data-aos-delay="800">
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="900">
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
      </div>
    </section>
  );
};

export default HeroSection;
