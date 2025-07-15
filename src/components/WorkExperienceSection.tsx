
import { Calendar, MapPin, ExternalLink, Building, Star } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
  website?: string;
}

const WorkExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: 'Jan 2022 - Present',
      description: 'Lead development of scalable web applications and mentor junior developers in a fast-paced startup environment.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on critical product features',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      website: 'https://techcorp.com'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      location: 'New York, NY',
      duration: 'Jun 2020 - Dec 2021',
      description: 'Developed and maintained multiple client projects using modern web technologies and agile methodologies.',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'GCP', 'Kubernetes'],
      achievements: [
        'Built 15+ successful client projects from concept to deployment',
        'Reduced bug reports by 50% through comprehensive testing',
        'Mentored 3 junior developers'
      ]
    },
    {
      id: '3',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      duration: 'Mar 2019 - May 2020',
      description: 'Focused on creating responsive and accessible user interfaces for various web applications.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      achievements: [
        'Improved user engagement by 35% through UI/UX enhancements',
        'Implemented responsive design across all company products',
        'Collaborated with design team to create design system'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Floating Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Professional journey building innovative solutions and leading development teams
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={300 + index * 200}
              >
                {/* Modern Card Design */}
                <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                            <Building className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-orbitron text-xl lg:text-2xl font-bold text-foreground mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <span className="font-rajdhani text-lg font-semibold text-primary">
                                  {exp.company}
                                </span>
                                {exp.website && (
                                  <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary hover:text-primary transition-colors"
                                  >
                                    <ExternalLink size={16} />
                                  </a>
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground bg-muted/20 px-4 py-2 rounded-xl border border-border/50">
                        <Calendar size={16} />
                        <span className="font-rajdhani font-medium">{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-rajdhani leading-relaxed mb-8 text-lg">
                      {exp.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-orbitron text-sm font-bold text-secondary mb-4 flex items-center gap-2">
                          <Star size={16} />
                          TECHNOLOGIES
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-3 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl text-sm font-rajdhani text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-105"
                              data-aos="zoom-in"
                              data-aos-delay={500 + index * 200 + techIndex * 50}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-orbitron text-sm font-bold text-secondary mb-4 flex items-center gap-2">
                          <Star size={16} />
                          KEY ACHIEVEMENTS
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-3 text-muted-foreground font-rajdhani"
                              data-aos="fade-left"
                              data-aos-delay={600 + index * 200 + achievementIndex * 100}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
