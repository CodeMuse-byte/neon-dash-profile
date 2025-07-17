
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Outstanding work on our web platform. The attention to detail and technical expertise exceeded our expectations. Delivered on time and within budget.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'Incredible problem-solving skills and modern development practices. The application architecture is robust and scalable. Highly recommend!',
      rating: 5
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'Design Director',
      company: 'Creative Studios',
      content: 'Perfect blend of technical skills and creative vision. The user interface is intuitive and beautiful. A pleasure to work with.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
            <span className="text-foreground">
              Client Testimonials
            </span>
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            What clients say about working with me
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/60" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-orbitron font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground font-rajdhani">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
