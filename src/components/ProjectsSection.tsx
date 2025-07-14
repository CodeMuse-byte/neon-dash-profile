
import { ExternalLink, Github } from 'lucide-react';
import GlowButton from './GlowButton';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'NeuroSync Dashboard',
      description: 'AI-powered analytics platform with real-time data visualization and machine learning insights. Built with React, Python, and TensorFlow.',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      github: 'https://github.com',
      live: 'https://neurosync-demo.com',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: '2',
      title: 'CyberCommerce',
      description: 'Next-generation e-commerce platform with AR product visualization and blockchain-based payments.',
      tech: ['Next.js', 'Three.js', 'Solidity', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://cybercommerce-demo.com',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Quantum Chat',
      description: 'Encrypted messaging app with quantum-resistant cryptography and end-to-end security protocols.',
      tech: ['React Native', 'Node.js', 'WebRTC', 'MongoDB'],
      github: 'https://github.com',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: '4',
      title: 'SpacePort API',
      description: 'Microservices architecture for space mission management with real-time telemetry and mission control.',
      tech: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
      github: 'https://github.com',
      live: 'https://spaceport-api.com',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-glow mb-4" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Project Archive
            </span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg" data-aos="fade-up" data-aos-delay="100">
            Featured developments from the digital frontier
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto neon-glow rounded-full mt-4" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                grid lg:grid-cols-2 gap-8 items-center
                ${index % 2 === 1 ? 'lg:direction-rtl' : ''}
              `}
              data-aos="fade-up"
              data-aos-delay={300 + index * 200}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={400 + index * 200}>
                <div className="cyber-border rounded-lg overflow-hidden bg-card/20 backdrop-blur-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-orbitron font-bold text-white text-glow">
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-delay={500 + index * 200}>
                <div>
                  <h3 className="font-orbitron text-2xl lg:text-3xl font-bold text-glow mb-3" data-aos="fade-up" data-aos-delay={600 + index * 200}>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h3>
                  
                  <div className="cyber-border bg-card/30 backdrop-blur-sm rounded-lg p-6" data-aos="fade-up" data-aos-delay={700 + index * 200}>
                    <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div data-aos="fade-up" data-aos-delay={800 + index * 200}>
                  <h4 className="font-orbitron text-sm font-bold text-secondary text-glow mb-3">
                    TECH_STACK:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted/30 border border-primary/30 rounded-lg text-sm font-rajdhani text-foreground hover:neon-glow-blue transition-all duration-300"
                        data-aos="zoom-in"
                        data-aos-delay={900 + index * 200 + techIndex * 100}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay={1000 + index * 200}>
                  {project.github && (
                    <GlowButton
                      variant="secondary"
                      icon={Github}
                      href={project.github}
                      className="flex-1"
                    >
                      Source Code
                    </GlowButton>
                  )}
                  
                  {project.live && (
                    <GlowButton
                      variant="primary"
                      icon={ExternalLink}
                      href={project.live}
                      className="flex-1"
                    >
                      Live Demo
                    </GlowButton>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
          <p className="text-muted-foreground font-rajdhani text-lg mb-6" data-aos="fade-up" data-aos-delay="400">
            Want to see more projects or collaborate?
          </p>
          <div data-aos="fade-up" data-aos-delay="500">
            <GlowButton
              variant="primary"
              icon={Github}
              href="https://github.com"
            >
              View All Projects
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
