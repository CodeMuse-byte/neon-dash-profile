
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
    <section id="projects" className="py-24 relative px-8">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
            <span className="text-foreground">
              Project Archive
            </span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Featured developments from the digital frontier
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                {/* Project Image */}
                <div className="flex-1 relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    {project.featured && (
                      <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-orbitron font-bold text-primary-foreground">
                          FEATURED
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-orbitron text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-orbitron text-sm font-bold text-primary mb-4">
                      TECH STACK
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-sm font-rajdhani text-foreground hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {project.github && (
                      <GlowButton
                        variant="secondary"
                        icon={Github}
                        href={project.github}
                      >
                        Source Code
                      </GlowButton>
                    )}
                    
                    {project.live && (
                      <GlowButton
                        variant="primary"
                        icon={ExternalLink}
                        href={project.live}
                      >
                        Live Demo
                      </GlowButton>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="600">
          <p className="text-muted-foreground font-rajdhani text-lg mb-6">
            Want to see more projects or collaborate?
          </p>
          <GlowButton
            variant="primary"
            icon={Github}
            href="https://github.com"
          >
            View All Projects
          </GlowButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
