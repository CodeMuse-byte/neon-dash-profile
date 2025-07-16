
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
    <section id="testimonials" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg" data-aos="fade-up" data-aos-delay="100">
            What clients say about working with me
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:scale-105 transition-all duration-500 hover:bg-card/90 hover:shadow-lg"
              data-aos="fade-up" 
              data-aos-delay={300 + index * 100}
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground font-rajdhani text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-orbitron font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-foreground">{testimonial.name}</h4>
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
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-border">
            <h3 className="font-orbitron text-2xl font-bold text-primary mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground font-rajdhani text-lg mb-6">
              Let's create something amazing together. I'm always excited to take on new challenges.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-rajdhani font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
