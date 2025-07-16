
const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-glow mb-4" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto neon-glow rounded-full" data-aos="fade-up" data-aos-delay="100" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content Card */}
          <div className="cyber-border bg-card/30 backdrop-blur-sm rounded-2xl p-8 mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-64 h-64">
                  <div className="w-full h-full border-2 border-primary/30 rounded-2xl overflow-hidden shadow-xl shadow-primary/20 transform hover:scale-105 transition-all duration-300">
                    <img
                      src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                      alt="Alex Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-bounce" />
                </div>
              </div>

              {/* Right - About Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-orbitron text-2xl font-bold text-primary text-glow mb-4">
                    Hey, I'm Alex Chen
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-rajdhani text-lg mb-4">
                    A passionate <span className="text-secondary text-glow">Full Stack Developer</span> with 5+ years of experience 
                    crafting digital experiences that make a difference. I specialize in building scalable 
                    applications with modern technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-rajdhani text-lg">
                    When I'm not coding, you can find me exploring the latest in AI, contributing 
                    to open source projects, or experimenting with new frameworks that shape the future of development.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/10 rounded-lg border border-border/30">
                    <div className="text-2xl font-orbitron font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground font-rajdhani">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-muted/10 rounded-lg border border-border/30">
                    <div className="text-2xl font-orbitron font-bold text-secondary">110+</div>
                    <div className="text-sm text-muted-foreground font-rajdhani">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
            <div className="cyber-border bg-card/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-orbitron font-bold text-foreground mb-2">Frontend</h4>
              <p className="text-muted-foreground text-sm font-rajdhani">React, Vue, Next.js, TypeScript</p>
            </div>

            <div className="cyber-border bg-card/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow-blue">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-orbitron font-bold text-foreground mb-2">Backend</h4>
              <p className="text-muted-foreground text-sm font-rajdhani">Node.js, Python, PostgreSQL, MongoDB</p>
            </div>

            <div className="cyber-border bg-card/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h4 className="font-orbitron font-bold text-foreground mb-2">Cloud</h4>
              <p className="text-muted-foreground text-sm font-rajdhani">AWS, Docker, Kubernetes, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
