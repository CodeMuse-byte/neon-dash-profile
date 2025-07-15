
import { useEffect } from 'react';
import { ArrowRight, User, Cpu } from 'lucide-react';
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
      {/* Enhanced Floating Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        
        {/* More small stars */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-accent/30 rounded-full animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
        
        {/* Additional tiny stars */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`tiny-${i}`}
            className="absolute w-0.5 h-0.5 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Microchip Icon */}
      <div className="absolute top-8 right-8 z-20">
        <div className="group relative p-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
          <Cpu className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-secondary animate-pulse" />
          <div className="absolute -top-12 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-card border border-border rounded-lg px-3 py-2 text-sm font-orbitron text-primary whitespace-nowrap">
              👾 Hi!
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Title */}
            <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h1 className="font-orbitron text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                  THE DEV
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-pulse">
                  DIARIES
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <p className="font-rajdhani text-xl lg:text-2xl text-muted-foreground animate-fade-in">
                Crafting clean code with creativity
              </p>
            </div>

            {/* Buttons */}
            <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 ease-out space-y-4 lg:space-y-0 lg:space-x-6 lg:flex">
              <button
                onClick={handleStartStory}
                className="group relative w-full lg:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-rajdhani text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 border border-primary/50 transform hover:rotate-1"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Start Story</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                </div>
              </button>

              <button
                onClick={handleSkipToPortfolio}
                className="group relative w-full lg:w-auto px-8 py-4 bg-card border border-border text-card-foreground rounded-lg font-rajdhani text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 transform hover:-rotate-1"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Skip to Portfolio</span>
                  <User className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
              </button>
            </div>
          </div>

          {/* Photo and Avatar Container */}
          <div className="animate-on-load opacity-0 scale-95 transition-all duration-700 ease-out lg:justify-self-end">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 rounded-full blur-2xl scale-110 animate-pulse"></div>
              
              {/* Main Profile Image Container with 3D Animation */}
              <div className="relative w-full max-w-sm aspect-square mx-auto lg:mx-0">
                <div className="relative w-full h-full border border-border rounded-full overflow-hidden bg-gradient-to-tr from-muted to-card transform transition-all duration-1000 hover:scale-110 hover:rotate-12 animate-float" 
                     style={{
                       animation: 'float 6s ease-in-out infinite, rotate3d 10s linear infinite'
                     }}>
                  <img
                    src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                    alt="Developer Avatar"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-full"></div>
                </div>
                
                {/* Rounded Avatar positioned to the right of the photo */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-16 border-2 border-primary/50 rounded-full overflow-hidden bg-card shadow-lg shadow-primary/30 animate-bounce">
                  <img
                    src="/lovable-uploads/77bc05c6-2eec-4cd4-be5b-029327875129.png"
                    alt="Mini Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
