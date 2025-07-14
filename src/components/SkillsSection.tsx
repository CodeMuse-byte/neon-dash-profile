import { useEffect, useRef, useState } from 'react';

interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  x: number;
  y: number;
  connections: string[];
}

const SkillsSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Frontend cluster
    { id: 'react', name: 'React', level: 95, category: 'frontend', x: 200, y: 150, connections: ['nextjs', 'typescript'] },
    { id: 'nextjs', name: 'Next.js', level: 90, category: 'frontend', x: 350, y: 180, connections: ['react', 'nodejs'] },
    { id: 'typescript', name: 'TypeScript', level: 88, category: 'frontend', x: 250, y: 280, connections: ['react', 'nodejs'] },
    { id: 'tailwind', name: 'Tailwind', level: 92, category: 'frontend', x: 150, y: 250, connections: ['react'] },
    
    // Backend cluster
    { id: 'nodejs', name: 'Node.js', level: 85, category: 'backend', x: 500, y: 200, connections: ['express', 'mongodb'] },
    { id: 'express', name: 'Express', level: 82, category: 'backend', x: 580, y: 280, connections: ['nodejs', 'mongodb'] },
    { id: 'mongodb', name: 'MongoDB', level: 78, category: 'backend', x: 620, y: 150, connections: ['nodejs', 'express'] },
    { id: 'python', name: 'Python', level: 80, category: 'backend', x: 700, y: 220, connections: ['ai'] },
    
    // Tools cluster
    { id: 'docker', name: 'Docker', level: 75, category: 'tools', x: 400, y: 350, connections: ['kubernetes'] },
    { id: 'kubernetes', name: 'Kubernetes', level: 70, category: 'tools', x: 520, y: 380, connections: ['docker'] },
    { id: 'aws', name: 'AWS', level: 85, category: 'tools', x: 300, y: 380, connections: ['docker'] },
    
    // Other
    { id: 'ai', name: 'AI/ML', level: 75, category: 'other', x: 750, y: 300, connections: ['python'] },
    { id: 'threejs', name: 'Three.js', level: 72, category: 'other', x: 100, y: 180, connections: ['react'] },
  ];

  const categoryColors = {
    frontend: '#ff007c',
    backend: '#00cfff',
    tools: '#714b67',
    other: '#22c55e'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      skills.forEach(skill => {
        skill.connections.forEach(connectionId => {
          const connectedSkill = skills.find(s => s.id === connectionId);
          if (connectedSkill) {
            ctx.beginPath();
            ctx.moveTo(skill.x, skill.y);
            ctx.lineTo(connectedSkill.x, connectedSkill.y);
            ctx.strokeStyle = hoveredSkill === skill.id || hoveredSkill === connectionId 
              ? categoryColors[skill.category] 
              : 'rgba(255, 0, 124, 0.2)';
            ctx.lineWidth = hoveredSkill === skill.id || hoveredSkill === connectionId ? 2 : 1;
            ctx.stroke();
            
            // Add glow effect for active connections
            if (hoveredSkill === skill.id || hoveredSkill === connectionId) {
              ctx.shadowColor = categoryColors[skill.category];
              ctx.shadowBlur = 10;
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
          }
        });
      });
    };

    drawConnections();
  }, [hoveredSkill, skills]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-glow mb-4" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skill Network
            </span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg" data-aos="fade-up" data-aos-delay="100">
            Interactive technology ecosystem
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto neon-glow rounded-full mt-4" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          {/* Canvas for connections */}
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />

          {/* Skill nodes */}
          <div className="relative h-96 lg:h-[400px]">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ 
                  left: `${(skill.x / 800) * 100}%`, 
                  top: `${(skill.y / 400) * 100}%` 
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                data-aos="zoom-in"
                data-aos-delay={400 + index * 100}
              >
                <div 
                  className={`
                    relative cyber-border rounded-lg px-4 py-2 
                    transition-all duration-300 transform group-hover:scale-110
                    ${hoveredSkill === skill.id ? 'neon-glow z-20' : 'bg-card/80 backdrop-blur-sm'}
                  `}
                  style={{
                    borderColor: categoryColors[skill.category],
                    backgroundColor: hoveredSkill === skill.id 
                      ? `${categoryColors[skill.category]}20` 
                      : undefined
                  }}
                >
                  <div className="text-center">
                    <h4 className="font-orbitron text-sm font-bold text-foreground">
                      {skill.name}
                    </h4>
                    <div className="flex items-center justify-center mt-1">
                      <div className="w-12 h-1 bg-border/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: categoryColors[skill.category]
                          }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground ml-2 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Pulsing dot indicator */}
                  <div 
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: categoryColors[skill.category] }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-12" data-aos="fade-up" data-aos-delay="800">
            {Object.entries(categoryColors).map(([category, color], index) => (
              <div key={category} className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay={900 + index * 100}>
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="font-rajdhani text-sm text-muted-foreground capitalize">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
