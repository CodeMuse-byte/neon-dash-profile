
const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-glow mb-4" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Identity
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto neon-glow rounded-full" data-aos="fade-up" data-aos-delay="100" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Personal Info */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
            <div className="cyber-border bg-card/50 backdrop-blur-sm rounded-lg p-8" data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-orbitron text-2xl font-bold text-primary mb-6 text-glow">
                PERSONAL DATA
              </h3>
              
              <div className="space-y-4 font-rajdhani">
                <div className="flex justify-between items-center py-2 border-b border-border/50" data-aos="fade-up" data-aos-delay="400">
                  <span className="text-muted-foreground">NAME:</span>
                  <span className="text-foreground font-medium">Alex Chen</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-border/50" data-aos="fade-up" data-aos-delay="450">
                  <span className="text-muted-foreground">ROLE:</span>
                  <span className="text-secondary text-glow">Full Stack Developer</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-border/50" data-aos="fade-up" data-aos-delay="500">
                  <span className="text-muted-foreground">LOCATION:</span>
                  <span className="text-foreground font-medium">San Francisco, CA</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-border/50" data-aos="fade-up" data-aos-delay="550">
                  <span className="text-muted-foreground">EXPERIENCE:</span>
                  <span className="text-accent text-glow">5+ Years</span>
                </div>
                
                <div className="flex justify-between items-center py-2" data-aos="fade-up" data-aos-delay="600">
                  <span className="text-muted-foreground">STATUS:</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-glow">Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-muted-foreground leading-relaxed font-rajdhani text-lg" data-aos="fade-up" data-aos-delay="700">
              <p className="mb-4">
                Passionate about creating immersive digital experiences that push the boundaries 
                of what's possible on the web. I specialize in building scalable applications 
                with modern technologies and a focus on user experience.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest in AI, contributing 
                to open source projects, or experimenting with new frameworks and tools that 
                shape the future of development.
              </p>
            </div>
          </div>

          {/* Right - Holographic Display */}
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <div className="cyber-border bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden">
              {/* Hologram effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
              
              {/* Scanning lines effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
              
              <div className="relative z-10 text-center">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <img
                    src="/placeholder.svg"
                    alt="Holographic profile"
                    className="w-full h-full object-cover rounded-lg opacity-80"
                  />
                  
                  {/* Hologram grid overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent" 
                       style={{
                         backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 124, 0.1) 2px, rgba(255, 0, 124, 0.1) 4px)'
                       }} />
                </div>
                
                <h4 className="font-orbitron text-xl font-bold text-primary text-glow mb-2">
                  ALEX_CHEN.EXE
                </h4>
                <p className="text-muted-foreground font-mono text-sm">
                  Version 2024.1.0
                </p>
                <p className="text-secondary text-glow font-mono text-xs mt-2">
                  {'> Ready for deployment'}
                </p>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
