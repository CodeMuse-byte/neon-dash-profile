
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

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
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg" data-aos="fade-up" data-aos-delay="100">
            Professional journey and key accomplishments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 200}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" 
                       style={{ top: '1.5rem' }}></div>

                  {/* Experience card */}
                  <div className="md:ml-20 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="font-orbitron text-xl lg:text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
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
                      
                      <div className="flex items-center gap-2 text-muted-foreground bg-muted/20 px-3 py-1 rounded-lg">
                        <Calendar size={14} />
                        <span className="text-sm font-rajdhani">{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-rajdhani leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-orbitron text-sm font-bold text-secondary mb-3">
                        TECHNOLOGIES:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted/30 border border-primary/20 rounded-lg text-sm font-rajdhani text-foreground hover:border-primary/50 transition-all duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={400 + index * 200 + techIndex * 50}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-orbitron text-sm font-bold text-secondary mb-3">
                        KEY ACHIEVEMENTS:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-3 text-muted-foreground font-rajdhani"
                            data-aos="fade-left"
                            data-aos-delay={500 + index * 200 + achievementIndex * 100}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
