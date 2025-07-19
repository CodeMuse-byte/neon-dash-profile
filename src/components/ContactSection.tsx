
import { Home, MapPin, Badge, Mail, MessageSquare, Send, Paperclip } from 'lucide-react';
import { useState } from 'react';
import GlowButton from './GlowButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachment: null as File | null
  });

  const scrollToHome = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      attachment: file
    });
  };

  return (
    <section id="contact" className="py-24 relative px-8">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6" data-aos="fade-right" data-aos-delay="300">
              {/* Status Card */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Badge className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-foreground">Available for Work</h3>
                    <p className="text-sm text-muted-foreground">Open to new opportunities</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-rajdhani text-green-500">Online now</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-foreground">Location</h3>
                    <p className="text-muted-foreground">India • Remote Available</p>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 hover:border-primary/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-rajdhani font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@example.com</p>
                  </div>
                </div>
              </div>

              {/* Home Button */}
              <div className="pt-4">
                <GlowButton
                  variant="secondary"
                  icon={Home}
                  onClick={scrollToHome}
                  className="w-full justify-center"
                >
                  Back to Home
                </GlowButton>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" data-aos="fade-left" data-aos-delay="400">
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="font-orbitron text-xl font-bold text-foreground">Send Message</h3>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-orbitron font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-orbitron font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-orbitron font-semibold text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project requirements, timeline, and budget..."
                    />
                  </div>

                  {/* File Attachment */}
                  <div>
                    <label htmlFor="attachment" className="block text-sm font-orbitron font-semibold text-foreground mb-2">
                      Attachment (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="attachment"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                      />
                      <label
                        htmlFor="attachment"
                        className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-xl text-muted-foreground hover:border-primary focus:border-primary cursor-pointer transition-colors flex items-center gap-3"
                      >
                        <Paperclip className="w-5 h-5" />
                        <span className="flex-1">
                          {formData.attachment ? formData.attachment.name : 'Click to attach a file'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <GlowButton
                    variant="primary"
                    icon={Send}
                    className="w-full justify-center text-lg py-4"
                  >
                    Send Message
                  </GlowButton>
                </div>
              </div>
            </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6 transition-all duration-300" data-aos="fade-up" data-aos-delay="200" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

  )
}