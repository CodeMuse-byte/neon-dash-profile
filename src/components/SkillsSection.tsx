
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface Skill {
  name: string;
  icon: typeof Code;
  level: number;
  description: string;
  x: number;
  y: number;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: 'Frontend Development',
      icon: Code,
      level: 95,
      description: 'React, Vue.js, TypeScript, Tailwind CSS',
      x: 20,
      y: 30
    },
    {
      name: 'Backend Development',
      icon: Server,
      level: 90,
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      x: 70,
      y: 20
    },
    {
      name: 'Mobile Development',
      icon: Smartphone,
      level: 85,
      description: 'React Native, Flutter, iOS, Android',
      x: 15,
      y: 70
    },
    {
      name: 'Database Design',
      icon: Database,
      level: 88,
      description: 'SQL, NoSQL, Redis, Elasticsearch',
      x: 75,
      y: 65
    },
    {
      name: 'Web Technologies',
      icon: Globe,
      level: 92,
      description: 'REST APIs, GraphQL, WebSockets, PWAs',
      x: 50,
      y: 50
    },
    {
      name: 'UI/UX Design',
      icon: Palette,
      level: 80,
      description: 'Figma, Adobe XD, Prototyping, User Research',
      x: 40,
      y: 80
    }
  ];

  return (
    <section id="skills" className="py-24 relative ml-72">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
            <span className="text-foreground">
              Technical Skills
            </span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Expertise across the full spectrum of modern web development
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" data-aos="fade-up" data-aos-delay="200" />
        </div>

        {/* Skills Map */}
        <div className="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <div className="relative h-96 lg:h-[500px] bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-8 grid-rows-6 h-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-primary/10" />
                ))}
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {skills.map((skill, index) => 
                skills.slice(index + 1).map((otherSkill, otherIndex) => (
                  <line
                    key={`${index}-${otherIndex}`}
                    x1={`${skill.x}%`}
                    y1={`${skill.y}%`}
                    x2={`${otherSkill.x}%`}
                    y2={`${otherSkill.y}%`}
                    stroke="url(#connectionGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                ))
              )}
            </svg>

            {/* Skill Nodes */}
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 100}
                >
                  {/* Skill Node */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:border-primary">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 w-16 h-16 border-2 border-primary/20 rounded-full animate-ping" />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-xl min-w-64">
                      <h3 className="font-orbitron text-sm font-bold text-foreground mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-rajdhani mb-3">
                        {skill.description}
                      </p>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-orbitron font-semibold text-foreground">
                            Proficiency
                          </span>
                          <span className="text-xs font-bold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-1">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
