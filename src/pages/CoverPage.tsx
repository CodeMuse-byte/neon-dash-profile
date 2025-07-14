import { useEffect } from 'react';
import { ArrowRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoverPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Staggered animations on load
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        el.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
      }, index * 200 + 500);
    });
  }, []);

  const handleStartStory = () => {
    navigate('/portfolio');
  };

  const handleSkipToPortfolio = () => {
    navigate('/portfolio#projects');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Tech Background with Glow */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/6 right-1/6 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Title */}
            <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h1 className="font-orbitron text-5xl lg:text-7xl font-bold text-glow">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  THE DEV
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                  DIARIES
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <p className="font-rajdhani text-xl lg:text-2xl text-muted-foreground">
                Crafting clean code with creativity
              </p>
            </div>

            {/* Buttons */}
            <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 ease-out space-y-4 lg:space-y-0 lg:space-x-6 lg:flex">
              <button
                onClick={handleStartStory}
                className="group relative w-full lg:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-rajdhani text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 border border-primary/50"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Start Story</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
              </button>

              <button
                onClick={handleSkipToPortfolio}
                className="group relative w-full lg:w-auto px-8 py-4 bg-card border border-border text-card-foreground rounded-lg font-rajdhani text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Skip to Portfolio</span>
                  <User className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
              </button>
            </div>
          </div>

          {/* Avatar Illustration */}
          <div className="animate-on-load opacity-0 scale-95 transition-all duration-700 ease-out lg:justify-self-end">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 rounded-full blur-2xl"></div>
              
              {/* Avatar Container */}
              <div className="relative w-full h-full cyber-border rounded-full overflow-hidden bg-gradient-to-tr from-muted to-card">
                <img
                  src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                  alt="Developer Avatar"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;