
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface Skill {
  name: string;
  icon: typeof Code;
  level: number;
  description: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: 'Frontend Development',
      icon: Code,
      level: 95,
      description: 'React, Vue.js, TypeScript, Tailwind CSS'
    },
    {
      name: 'Backend Development',
      icon: Server,
      level: 90,
      description: 'Node.js, Python, PostgreSQL, MongoDB'
    },
    {
      name: 'Mobile Development',
      icon: Smartphone,
      level: 85,
      description: 'React Native, Flutter, iOS, Android'
    },
    {
      name: 'Database Design',
      icon: Database,
      level: 88,
      description: 'SQL, NoSQL, Redis, Elasticsearch'
    },
    {
      name: 'Web Technologies',
      icon: Globe,
      level: 92,
      description: 'REST APIs, GraphQL, WebSockets, PWAs'
    },
    {
      name: 'UI/UX Design',
      icon: Palette,
      level: 80,
      description: 'Figma, Adobe XD, Prototyping, User Research'
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-lg font-bold text-foreground">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground font-rajdhani mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Skill Level */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-orbitron font-semibold text-foreground">
                      Proficiency
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
