
import { useState } from 'react';
import { Send, MapPin, Mail, Github, Linkedin, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlowButton from './GlowButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
      
      {/* Home Button - Bottom Right */}
      <button
        onClick={() => navigate('/')}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Go to home"
      >
        <Home className="w-6 h-6" />
      </button>
      
      <div className="container mx-auto px-6 relative z-10 ml-80">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse" data-aos="fade-up">
            Initialize Contact
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg" data-aos="fade-up" data-aos-delay="100">
            Ready to start a new mission together?
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto neon-glow rounded-full mt-4" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Terminal Form */}
          <div className="cyber-border bg-card/20 backdrop-blur-sm rounded-lg overflow-hidden" data-aos="fade-right" data-aos-delay="300">
            {/* Terminal Header */}
            <div className="bg-muted/20 border-b border-border px-6 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="font-mono text-sm text-muted-foreground ml-4">
                  contact_terminal.exe
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono">
              <div className="text-primary text-glow mb-4">
                <span className="text-secondary">{'>'}</span> Establishing secure connection...
              </div>
              <div className="text-green-400 mb-6">
                <span className="text-secondary">{'>'}</span> Connection established. Ready for transmission.
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-secondary text-glow text-sm mb-2">
                    {'>'} IDENTIFY_USER:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="
                      w-full bg-transparent border-2 border-primary/30 rounded-lg px-4 py-3
                      text-foreground font-rajdhani text-lg
                      focus:border-primary focus:neon-glow outline-none
                      transition-all duration-300
                    "
                    placeholder="Enter your designation..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-secondary text-glow text-sm mb-2">
                    {'>'} CONTACT_FREQUENCY:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="
                      w-full bg-transparent border-2 border-primary/30 rounded-lg px-4 py-3
                      text-foreground font-rajdhani text-lg
                      focus:border-primary focus:neon-glow outline-none
                      transition-all duration-300
                    "
                    placeholder="your.signal@domain.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-secondary text-glow text-sm mb-2">
                    {'>'} MESSAGE_PAYLOAD:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="
                      w-full bg-transparent border-2 border-primary/30 rounded-lg px-4 py-3
                      text-foreground font-rajdhani text-lg resize-none
                      focus:border-primary focus:neon-glow outline-none
                      transition-all duration-300
                    "
                    placeholder="Compose your transmission..."
                    required
                  />
                </div>

                <GlowButton
                  variant="primary"
                  icon={Send}
                  className={`w-full ${isSubmitting ? 'opacity-50' : ''}`}
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
                </GlowButton>
              </form>

              {isSubmitting && (
                <div className="mt-4 text-accent text-glow animate-pulse">
                  <span className="text-secondary">{'>'}</span> Encrypting message...
                  <br />
                  <span className="text-secondary">{'>'}</span> Establishing quantum tunnel...
                  <br />
                  <span className="text-secondary">{'>'}</span> Message transmitted successfully!
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
            <div className="cyber-border bg-card/20 backdrop-blur-sm rounded-lg p-8" data-aos="fade-up" data-aos-delay="400">
              <h3 className="font-orbitron text-xl font-bold text-primary text-glow mb-6">
                CONTACT_INFO
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="500">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center neon-glow">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="600">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center neon-glow-blue">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">alex.chen@futurecode.dev</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="650">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">@alexchen-dev</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="700">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Github className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-rajdhani font-semibold text-foreground">GitHub</h4>
                    <p className="text-muted-foreground">@alexchen-dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-border/50 pt-8">
        <div className="container mx-auto px-6 ml-80">
          <div className="text-center text-muted-foreground font-mono text-sm">
            <p className="mb-2">
              <span className="text-secondary">{'>'}</span> System initialized by Chris Evans © 2024
            </p>
            <p>
              <span className="text-secondary">{'>'}</span> Built with React • Three.js • Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
