
const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark canvas background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Large geometric star shapes */}
      <div className="absolute inset-0">
        {/* Large polygon star - top left */}
        <div 
          className="absolute w-32 h-32 opacity-20 animate-float"
          style={{
            top: '10%',
            left: '15%',
            transform: 'rotate(15deg)',
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '0s'
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-sm"
               style={{
                 clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
               }}
          />
        </div>

        {/* Medium polygon star - top right */}
        <div 
          className="absolute w-24 h-24 opacity-25 animate-pulse-glow"
          style={{
            top: '20%',
            right: '20%',
            transform: 'rotate(-20deg)',
            animation: 'float 6s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-accent/40 blur-[2px]"
               style={{
                 clipPath: 'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%)'
               }}
          />
        </div>

        {/* Large diamond star - bottom left */}
        <div 
          className="absolute w-28 h-28 opacity-15"
          style={{
            bottom: '25%',
            left: '10%',
            transform: 'rotate(45deg)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '4s'
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-accent/30 to-primary/30 blur-sm"
               style={{
                 clipPath: 'polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%)'
               }}
          />
        </div>

        {/* Medium hexagon star - center right */}
        <div 
          className="absolute w-20 h-20 opacity-20"
          style={{
            top: '50%',
            right: '8%',
            transform: 'rotate(30deg)',
            animation: 'float 7s ease-in-out infinite reverse',
            animationDelay: '1s'
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/35 to-secondary/25 blur-[1px]"
               style={{
                 clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
               }}
          />
        </div>

        {/* Small subtle geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 opacity-10"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: 'float 12s ease-in-out infinite',
              animationDelay: `${Math.random() * 6}s`
            }}
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/15 blur-[0.5px]"
              style={{
                clipPath: i % 2 === 0 
                  ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  : 'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeometricBackground;
