
import { Home, MapPin, Badge } from 'lucide-react';
import GlowButton from './GlowButton';

const ContactSection = () => {
  const scrollToHome = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative ml-72">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4" data-aos="fade-up">
              <span className="text-foreground">
                Let's Connect
              </span>
            </h2>
            <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" data-aos="fade-up" data-aos-delay="200" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="300">
              <div>
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-6">Get In Touch</h3>
                
                {/* Status */}
                <div className="flex items-center gap-3 mb-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                  <Badge className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-rajdhani font-semibold text-foreground">Available for work</div>
                    <div className="text-sm text-muted-foreground">Open to new opportunities</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-rajdhani font-semibold text-foreground">India</div>
                    <div className="text-sm text-muted-foreground">Remote work available</div>
                  </div>
                </div>
              </div>

              {/* Home Button */}
              <div className="pt-4">
                <GlowButton
                  variant="primary"
                  icon={Home}
                  onClick={scrollToHome}
                  className="w-full justify-center"
                >
                  Back to Home
                </GlowButton>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6" data-aos="fade-left" data-aos-delay="400">
              <div>
                <label htmlFor="name" className="block text-sm font-orbitron font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-orbitron font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-orbitron font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <GlowButton
                variant="primary"
                className="w-full justify-center"
              >
                Send Message
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
