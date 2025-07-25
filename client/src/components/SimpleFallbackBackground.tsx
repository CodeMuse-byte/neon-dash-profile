const SimpleFallbackBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-muted/40"></div>
      
      {/* Simple floating particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute bg-accent/20 rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SimpleFallbackBackground;