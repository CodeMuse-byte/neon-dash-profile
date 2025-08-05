import { Code, Database, Globe, Smartphone, Server, Palette, Cloud, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: typeof Code;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Frontend (Pink/Red)
    { name: 'React', icon: Code, level: 95, category: 'frontend' },
    { name: 'Next.js', icon: Globe, level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', icon: Palette, level: 92, category: 'frontend' },
    { name: 'TypeScript', icon: Code, level: 88, category: 'frontend' },
    { name: 'Vue.js', icon: Code, level: 85, category: 'frontend' },
    { name: 'JavaScript', icon: Code, level: 93, category: 'frontend' },
    
    // Backend (Blue/Cyan)
    { name: 'Node.js', icon: Server, level: 85, category: 'backend' },
    { name: 'MongoDB', icon: Database, level: 78, category: 'backend' },
    { name: 'Express.js', icon: Server, level: 82, category: 'backend' },
    { name: 'Python', icon: Code, level: 80, category: 'backend' },
    { name: 'PostgreSQL', icon: Database, level: 83, category: 'backend' },
    { name: 'GraphQL', icon: Database, level: 75, category: 'backend' },
    
    // Tools (Purple/Gray)
    { name: 'Docker', icon: Cloud, level: 75, category: 'tools' },
    { name: 'AWS', icon: Shield, level: 85, category: 'tools' },
    { name: 'Git', icon: Code, level: 90, category: 'tools' },
    { name: 'Webpack', icon: Code, level: 78, category: 'tools' },
    { name: 'Jest', icon: Code, level: 82, category: 'tools' },
    
    // Other (Green)
    { name: 'Three.js', icon: Zap, level: 72, category: 'other' },
    { name: 'AI/ML', icon: Smartphone, level: 75, category: 'other' },
    { name: 'Redux', icon: Code, level: 80, category: 'other' },
    { name: 'Figma', icon: Palette, level: 85, category: 'other' }
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

  const skillsByCategory = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other')
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

        {/* Skills Grid by Category */}
        <div className="max-w-6xl mx-auto space-y-12" data-aos="fade-up" data-aos-delay="300">
          {Object.entries(skillsByCategory).map(([categoryName, categorySkills], categoryIndex) => {
            const colors = getCategoryColor(categoryName);
            return (
              <div key={categoryName} className="space-y-6" data-aos="fade-up" data-aos-delay={400 + categoryIndex * 100}>
                <div className="flex items-center gap-3">
                  <h3 className={`font-orbitron text-xl font-bold capitalize ${colors.text}`}>
                    {categoryName}
                  </h3>
                  <div className={`flex-1 h-px bg-gradient-to-r ${colors.progress} opacity-30`} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`group relative p-6 bg-card/30 backdrop-blur-sm border ${colors.border} rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-current/20`}
                        data-aos="zoom-in"
                        data-aos-delay={500 + categoryIndex * 100 + index * 50}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 ${colors.bg} rounded-lg`}>
                            <Icon className={`w-6 h-6 ${colors.text}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-rajdhani font-semibold text-foreground text-lg">
                              {skill.name}
                            </h4>
                            <p className={`text-sm ${colors.text} capitalize`}>
                              {skill.category}
                            </p>
                          </div>
                        </div>
                        
                        {/* Skill Level Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Proficiency</span>
                            <span className={`text-sm font-semibold ${colors.text}`}>{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted/30 rounded-full h-2">
                            <div 
                              className={`h-2 bg-gradient-to-r ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-16" data-aos="fade-up" data-aos-delay="600">
          {[
            { category: 'frontend', label: 'Frontend', color: 'text-pink-500', bg: 'bg-pink-500/10' },
            { category: 'backend', label: 'Backend', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
            { category: 'tools', label: 'Tools', color: 'text-purple-500', bg: 'bg-purple-500/10' },
            { category: 'other', label: 'Other', color: 'text-green-500', bg: 'bg-green-500/10' }
          ].map((item, index) => (
            <div key={item.category} className={`flex items-center gap-3 px-4 py-2 ${item.bg} rounded-lg border border-current/20`} data-aos="zoom-in" data-aos-delay={700 + index * 100}>
              <div className={`w-3 h-3 rounded-full bg-current ${item.color}`} />
              <span className="font-rajdhani text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
