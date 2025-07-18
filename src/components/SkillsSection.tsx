import { Code, Database, Globe, Smartphone, Server, Palette, Cloud, Shield, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: typeof Code;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  x: number;
  y: number;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    // Frontend (Pink/Red)
    { name: 'React', icon: Code, level: 95, category: 'frontend', x: 20, y: 15 },
    { name: 'Next.js', icon: Globe, level: 90, category: 'frontend', x: 50, y: 20 },
    { name: 'Tailwind', icon: Palette, level: 92, category: 'frontend', x: 15, y: 45 },
    { name: 'TypeScript', icon: Code, level: 88, category: 'frontend', x: 35, y: 55 },
    
    // Backend (Blue/Cyan)
    { name: 'Node.js', icon: Server, level: 85, category: 'backend', x: 70, y: 25 },
    { name: 'MongoDB', icon: Database, level: 78, category: 'backend', x: 80, y: 15 },
    { name: 'Express', icon: Server, level: 82, category: 'backend', x: 75, y: 50 },
    { name: 'Python', icon: Code, level: 80, category: 'backend', x: 85, y: 35 },
    
    // Tools (Purple/Gray)
    { name: 'Docker', icon: Cloud, level: 75, category: 'tools', x: 45, y: 75 },
    { name: 'AWS', icon: Shield, level: 85, category: 'tools', x: 25, y: 80 },
    { name: 'Kubernetes', icon: Server, level: 70, category: 'tools', x: 65, y: 80 },
    
    // Other (Green)
    { name: 'Three.js', icon: Zap, level: 72, category: 'other', x: 10, y: 25 },
    { name: 'AI/ML', icon: Smartphone, level: 75, category: 'other', x: 90, y: 65 }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend': return { border: 'border-pink-500', bg: 'bg-pink-500/10', text: 'text-pink-500', progress: 'from-pink-500 to-red-500' };
      case 'backend': return { border: 'border-cyan-500', bg: 'bg-cyan-500/10', text: 'text-cyan-500', progress: 'from-cyan-500 to-blue-500' };
      case 'tools': return { border: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-500', progress: 'from-purple-500 to-gray-500' };
      case 'other': return { border: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-500', progress: 'from-green-500 to-emerald-500' };
      default: return { border: 'border-primary', bg: 'bg-primary/10', text: 'text-primary', progress: 'from-primary to-secondary' };
    }
  };

  return (
    <section id="skills" className="py-24 relative px-8">
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
        <div className="relative max-w-6xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="300">
          <div className="relative h-96 lg:h-[500px] bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 grid-rows-8 h-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div key={i} className="border border-muted/20" />
                ))}
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
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
              const colors = getCategoryColor(skill.category);
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
                    <div className={`w-16 h-16 ${colors.bg} backdrop-blur-sm border-2 ${colors.border} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    {/* Pulsing Ring */}
                    <div className={`absolute inset-0 w-16 h-16 border-2 ${colors.border} opacity-50 rounded-xl animate-ping`} />
                  </div>

                  {/* Enhanced Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-2xl min-w-64">
                      <h3 className="font-orbitron text-lg font-bold text-foreground mb-2">
                        {skill.name}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-orbitron font-semibold text-muted-foreground">
                            Proficiency
                          </span>
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div
                            className={`h-full bg-gradient-to-r ${colors.progress} rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <div className={`text-xs ${colors.text} font-medium capitalize`}>
                          {skill.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="500">
          {[
            { category: 'frontend', label: 'Frontend', color: 'text-pink-500' },
            { category: 'backend', label: 'Backend', color: 'text-cyan-500' },
            { category: 'tools', label: 'Tools', color: 'text-purple-500' },
            { category: 'other', label: 'Other', color: 'text-green-500' }
          ].map((item, index) => (
            <div key={item.category} className="flex items-center gap-2" data-aos="zoom-in" data-aos-delay={600 + index * 100}>
              <div className={`w-3 h-3 rounded-full bg-current ${item.color}`} />
              <span className="font-rajdhani text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
