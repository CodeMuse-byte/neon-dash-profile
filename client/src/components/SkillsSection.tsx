import { Code, Database, Globe, Smartphone, Server, Palette, Cloud, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: typeof Code;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  x: number;
  y: number;
  relatedSkills?: string[];
}

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Frontend (Pink/Red)
    { name: 'React', icon: Code, level: 95, category: 'frontend', x: 20, y: 15, relatedSkills: ['Next.js', 'TypeScript', 'Node.js'] },
    { name: 'Next.js', icon: Globe, level: 90, category: 'frontend', x: 50, y: 20, relatedSkills: ['React', 'TypeScript', 'Tailwind'] },
    { name: 'Tailwind', icon: Palette, level: 92, category: 'frontend', x: 15, y: 45, relatedSkills: ['React', 'Next.js'] },
    { name: 'TypeScript', icon: Code, level: 88, category: 'frontend', x: 35, y: 55, relatedSkills: ['React', 'Next.js', 'Node.js'] },
    
    // Backend (Blue/Cyan)
    { name: 'Node.js', icon: Server, level: 85, category: 'backend', x: 70, y: 25, relatedSkills: ['Express', 'MongoDB', 'TypeScript'] },
    { name: 'MongoDB', icon: Database, level: 78, category: 'backend', x: 80, y: 15, relatedSkills: ['Node.js', 'Express'] },
    { name: 'Express', icon: Server, level: 82, category: 'backend', x: 75, y: 50, relatedSkills: ['Node.js', 'MongoDB'] },
    { name: 'Python', icon: Code, level: 80, category: 'backend', x: 85, y: 35, relatedSkills: ['AI/ML'] },
    
    // Tools (Purple/Gray)
    { name: 'Docker', icon: Cloud, level: 75, category: 'tools', x: 45, y: 75, relatedSkills: ['Kubernetes', 'AWS'] },
    { name: 'AWS', icon: Shield, level: 85, category: 'tools', x: 25, y: 80, relatedSkills: ['Docker', 'Kubernetes'] },
    { name: 'Kubernetes', icon: Server, level: 70, category: 'tools', x: 65, y: 80, relatedSkills: ['Docker', 'AWS'] },
    
    // Other (Green)
    { name: 'Three.js', icon: Zap, level: 72, category: 'other', x: 10, y: 25, relatedSkills: ['React'] },
    { name: 'AI/ML', icon: Smartphone, level: 75, category: 'other', x: 90, y: 65, relatedSkills: ['Python'] }
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

  const getRelatedSkills = (skillName: string) => {
    const skill = skills.find(s => s.name === skillName);
    return skill?.relatedSkills || [];
  };

  const isSkillRelated = (skillName: string, hoveredSkillName: string) => {
    const relatedSkills = getRelatedSkills(hoveredSkillName);
    return relatedSkills.includes(skillName);
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
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6 transition-all duration-300" data-aos="fade-up" data-aos-delay="200" />
        </div>

        {/* Skills Map */}
        <div className="relative max-w-6xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="300">
          <div className="relative h-96 lg:h-[500px] bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-500">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 grid-rows-8 h-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div key={i} className="border border-muted/20" />
                ))}
              </div>
            </div>

            {/* Base Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="activeConnectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Hover-based Connection Lines */}
              {hoveredSkill && skills.map((skill) => {
                if (skill.name === hoveredSkill) {
                  const relatedSkills = getRelatedSkills(hoveredSkill);
                  return relatedSkills.map((relatedSkillName) => {
                    const relatedSkill = skills.find(s => s.name === relatedSkillName);
                    if (!relatedSkill) return null;
                    
                    return (
                      <line
                        key={`${skill.name}-${relatedSkillName}`}
                        x1={`${skill.x}%`}
                        y1={`${skill.y}%`}
                        x2={`${relatedSkill.x}%`}
                        y2={`${relatedSkill.y}%`}
                        stroke="url(#activeConnectionGradient)"
                        strokeWidth="3"
                        className="transition-all duration-300 animate-pulse"
                        style={{
                          filter: 'drop-shadow(0 0 6px hsl(var(--primary)))'
                        }}
                      />
                    );
                  });
                }
                return null;
              })}
            </svg>

            {/* Skill Nodes */}
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const colors = getCategoryColor(skill.category);
              return (
                <div
                  key={skill.name}
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                  style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 100}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Skill Node */}
                  <div className="relative">
                    <div className={`px-4 py-2 ${colors.bg} backdrop-blur-sm border-2 ${colors.border} rounded-xl flex items-center justify-center transition-all duration-300 min-w-max ${
                      hoveredSkill === skill.name 
                        ? 'scale-125 shadow-2xl shadow-current/50' 
                        : hoveredSkill && isSkillRelated(skill.name, hoveredSkill)
                        ? 'scale-110 shadow-lg shadow-current/30'
                        : hoveredSkill
                        ? 'scale-90 opacity-50'
                        : 'hover:scale-110 hover:shadow-lg'
                    }`}>
                      <span className={`font-rajdhani font-semibold ${colors.text} text-sm whitespace-nowrap`}>
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Pulsing Ring */}
                    <div className={`absolute inset-0 border-2 ${colors.border} rounded-xl transition-all duration-300 ${
                      hoveredSkill === skill.name ? 'opacity-75 animate-ping' : 'opacity-0'
                    }`} />
                  </div>

                  {/* Enhanced Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 transition-all duration-300 pointer-events-none z-50 ${
                    hoveredSkill === skill.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg px-3 py-2 shadow-xl">
                      <div className={`text-xs ${colors.text} font-medium capitalize mb-1`}>
                        {skill.category}
                      </div>
                      {skill.relatedSkills && skill.relatedSkills.length > 0 && (
                        <div className="text-xs text-muted-foreground">
                          Related: {skill.relatedSkills.join(', ')}
                        </div>
                      )}
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
