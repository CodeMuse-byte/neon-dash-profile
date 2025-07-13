
import { Download, ExternalLink } from 'lucide-react';
import GlowButton from './GlowButton';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          {/* Left Content - 70% */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-orbitron text-6xl lg:text-8xl font-bold text-glow">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Alex Chen
                </span>
              </h1>
              
              <div className="relative">
                <h2 className="font-rajdhani text-2xl lg:text-3xl text-muted-foreground">
                  <span className="text-secondary text-glow">&gt;</span> Full Stack Developer
                </h2>
                <p className="font-rajdhani text-xl lg:text-2xl text-accent text-glow mt-2">
                  Building with futuristic code
                </p>
              </div>
            </div>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary neon-glow rounded-full" />

            <p className="text-lg text-muted-foreground font-rajdhani max-w-2xl leading-relaxed">
              Crafting immersive digital experiences through cutting-edge technology. 
              Specialized in React, Node.js, and AI integration with a passion for 
              creating the future of web development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GlowButton 
                variant="primary" 
                icon={ExternalLink}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </GlowButton>
              
              <GlowButton 
                variant="secondary" 
                icon={Download}
                href="/resume.pdf"
              >
                Download Resume
              </GlowButton>
            </div>

            {/* Terminal-like status */}
            <div className="flex items-center space-x-4 pt-8 font-mono text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="text-muted-foreground">
                STATUS: Ready for new challenges
              </div>
            </div>
          </div>

          {/* Right Content - 30% */}
          <div className="lg:col-span-3 flex justify-center animate-float">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 cyber-border rounded-full overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                />
                
                {/* Neon glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-full" />
                
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full animate-spin" style={{ 
                  background: `conic-gradient(from 0deg, hsl(var(--neon-pink)), hsl(var(--neon-blue)), hsl(var(--neon-pink)))`,
                  mask: 'radial-gradient(circle, transparent 88%, black 90%)',
                  WebkitMask: 'radial-gradient(circle, transparent 88%, black 90%)'
                }} />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
