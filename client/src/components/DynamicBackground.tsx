import { useTheme } from '../contexts/ThemeContext';

// Earth Lines Sphere background
const EarthLinesBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `
        linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}></div>
    {/* Floating orbs */}
    {[...Array(15)].map((_, i) => (
      <div
        key={`earth-${i}`}
        className="absolute rounded-full bg-primary/20 animate-float"
        style={{
          width: `${Math.random() * 6 + 4}px`,
          height: `${Math.random() * 6 + 4}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${6 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

// Abstract Ball background
const AbstractBallBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/15 via-background to-primary/15"></div>
    {/* Large central orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"></div>
    {/* Floating geometric shapes */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`abstract-${i}`}
        className={`absolute bg-accent/20 animate-bounce ${
          i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rotate-45' : 'rounded-lg'
        }`}
        style={{
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 20 + 10}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

// Water Waves background
const WaterWavesBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-background to-cyan-500/10"></div>
    {/* Wave patterns */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
    {/* Bubbles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={`wave-${i}`}
        className="absolute rounded-full bg-cyan-400/30 animate-bounce"
        style={{
          width: `${Math.random() * 8 + 3}px`,
          height: `${Math.random() * 8 + 3}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

// Liquids Wavy background
const LiquidsWavyBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10"></div>
    {/* Liquid drops */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <div
          key={`liquid-${i}`}
          className="absolute bg-gradient-to-b from-primary/40 to-secondary/40 rounded-full blur-sm animate-float"
          style={{
            width: `${Math.random() * 30 + 20}px`,
            height: `${Math.random() * 40 + 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// Solid Color background
const SolidColorBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-background"></div>
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
  </div>
);

// Simple Strings background
const SimpleStringsBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background"></div>
    {/* String-like lines */}
    <div className="absolute inset-0 opacity-10">
      {[...Array(25)].map((_, i) => (
        <div
          key={`string-${i}`}
          className="absolute bg-primary/60"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: '1px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
    {/* Connection points */}
    {[...Array(15)].map((_, i) => (
      <div
        key={`point-${i}`}
        className="absolute w-1 h-1 bg-secondary/40 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

const DynamicBackground = () => {
  const { backgroundType } = useTheme();

  switch (backgroundType) {
    case 'earth-lines':
      return <EarthLinesBackground />;
    case 'abstract-ball':
      return <AbstractBallBackground />;
    case 'water-waves':
      return <WaterWavesBackground />;
    case 'liquids-wavy':
      return <LiquidsWavyBackground />;
    case 'solid-color':
      return <SolidColorBackground />;
    case 'simple-strings':
      return <SimpleStringsBackground />;
    default:
      return <EarthLinesBackground />;
  }
};

export default DynamicBackground;