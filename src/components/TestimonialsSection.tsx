
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// 3D Testimonial Card Component
const FloatingCard = ({ position, testimonial, index }: { 
  position: [number, number, number], 
  testimonial: any, 
  index: number 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2 + index) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3 + index) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + index) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 2.5, 0.1]} />
      <meshPhongMaterial 
        color={index === 0 ? '#ff007c' : index === 1 ? '#00cfff' : '#9333ea'} 
        transparent 
        opacity={0.7} 
      />
    </mesh>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content: "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made our project a huge success.",
      avatar: "SJ",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Alex was a game-changer for our startup. He not only built a robust application but also provided valuable insights for our tech stack.",
      avatar: "MR",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Design Lead",
      company: "Creative Agency",
      content: "Alex perfectly translated our designs into pixel-perfect, responsive web applications. His collaboration and communication skills are top-notch.",
      avatar: "EC",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 h-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff007c" />
          <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00cfff" />
          <directionalLight position={[0, 5, 5]} intensity={0.4} color="#ffffff" />
          
          {testimonials.map((testimonial, index) => (
            <FloatingCard
              key={testimonial.id}
              position={[(index - 1) * 4, 0, -2] as [number, number, number]}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 bg-gradient-to-b from-background/90 via-background/95 to-background/90">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-glow mb-4" data-aos="fade-up">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-muted-foreground font-rajdhani text-lg" data-aos="fade-up" data-aos-delay="100">
              What clients say about working with me
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto neon-glow rounded-full mt-4" data-aos="fade-up" data-aos-delay="200" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="cyber-border bg-card/30 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-500 hover:bg-card/40 animate-float"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transform: `perspective(1000px) rotateY(${index * 5 - 5}deg)`
                }}
                data-aos="fade-up" 
                data-aos-delay={300 + index * 100}
              >
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl animate-pulse-glow" style={{animationDelay: `${i * 0.1}s`}}>★</span>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground font-rajdhani text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-orbitron font-bold neon-glow">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-foreground text-glow">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm font-rajdhani">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
            <div className="cyber-border bg-card/20 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto animate-pulse-glow">
              <h3 className="font-orbitron text-2xl font-bold text-primary text-glow mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground font-rajdhani text-lg mb-6">
                Let's create something amazing together. I'm always excited to take on new challenges.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-rajdhani font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 neon-glow"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
