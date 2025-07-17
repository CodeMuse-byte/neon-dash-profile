
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Outstanding work on our web platform. The attention to detail and technical expertise exceeded our expectations. Delivered on time and within budget.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'Incredible problem-solving skills and modern development practices. The application architecture is robust and scalable. Highly recommend!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'Design Director',
      company: 'Creative Studios',
      content: 'Perfect blend of technical skills and creative vision. The user interface is intuitive and beautiful. A pleasure to work with.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Founder',
      company: 'InnovateLab',
      content: 'Exceptional developer who understands business needs. The project was delivered ahead of schedule with amazing quality.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      role: 'Marketing Head',
      company: 'Digital Agency',
      content: 'Amazing work! The website performance improved dramatically and user engagement increased by 300%. Fantastic results!',
      rating: 5,
      avatar: '👩‍📈'
    },
    {
      id: '6',
      name: 'Alex Johnson',
      role: 'Tech Lead',
      company: 'WebSolutions',
      content: 'Great collaboration and excellent code quality. The project architecture is clean and maintainable. Would work again!',
      rating: 5,
      avatar: '👨‍🔧'
    }
  ];

  // Duplicate testimonials for endless scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 relative ml-72 overflow-hidden">
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

        {/* Endless Rotating Reviews */}
        <div className="relative" data-aos="fade-up" data-aos-delay="300">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:pause-scroll">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 mx-4"
              >
                <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/60" />
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground font-rajdhani leading-relaxed mb-6 text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-orbitron font-bold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground font-rajdhani">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
