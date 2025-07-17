
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
    <section id="projects" className="py-24 relative ml-72">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-orbitron font-bold text-primary-foreground">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-rajdhani leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-orbitron text-xs font-bold text-primary mb-3">
                    TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted/30 border border-border rounded-lg text-sm font-rajdhani text-foreground hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <GlowButton
                      variant="secondary"
                      icon={Github}
                      href={project.github}
                      className="flex-1 justify-center"
                    >
                      Source Code
                    </GlowButton>
                  )}
                  
                  {project.live && (
                    <GlowButton
                      variant="primary"
                      icon={ExternalLink}
                      href={project.live}
                      className="flex-1 justify-center"
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
