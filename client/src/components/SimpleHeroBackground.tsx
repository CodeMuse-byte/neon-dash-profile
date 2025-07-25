const SimpleHeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      {/* Animated geometric shapes using CSS */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-16 h-16 bg-secondary/10 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-primary/15 rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`hero-particle-${i}`}
          className="absolute bg-accent/20 rounded-full animate-float"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SimpleHeroBackground;