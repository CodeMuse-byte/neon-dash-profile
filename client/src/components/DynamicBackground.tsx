import { useTheme } from '../contexts/ThemeContext';

// Earth Lines Sphere background
const EarthLinesBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-background to-cyan-500/20"></div>
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}></div>
    {/* Floating orbs */}
    {[...Array(20)].map((_, i) => (
      <div
        key={`earth-${i}`}
        className="absolute rounded-full bg-blue-400/40 animate-float shadow-lg shadow-blue-500/20"
        style={{
          width: `${Math.random() * 8 + 6}px`,
          height: `${Math.random() * 8 + 6}px`,
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
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/25 via-background to-pink-500/25"></div>
    {/* Large central orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse"></div>
    {/* Medium orbs */}
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    {/* Floating geometric shapes */}
    {[...Array(12)].map((_, i) => (
      <div
        key={`abstract-${i}`}
        className={`absolute bg-purple-400/30 animate-bounce ${
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
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 via-background to-blue-500/30"></div>
    {/* Wave patterns */}
    <div className="absolute inset-0 opacity-50">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-400/40 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-teal-400/25 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
    {/* Water ripples */}
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 2px, transparent 2px),
                       radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                       radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.2) 1px, transparent 1px)`,
      backgroundSize: '100px 100px, 150px 150px, 80px 80px'
    }}></div>
    {/* Bubbles */}
    {[...Array(25)].map((_, i) => (
      <div
        key={`wave-${i}`}
        className="absolute rounded-full bg-cyan-400/40 animate-bounce shadow-lg shadow-cyan-500/20"
        style={{
          width: `${Math.random() * 10 + 4}px`,
          height: `${Math.random() * 10 + 4}px`,
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
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-background to-teal-500/25"></div>
    {/* Large liquid blobs */}
    <div className="absolute top-20 left-20 w-80 h-60 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-float"></div>
    <div className="absolute bottom-20 right-20 w-60 h-80 bg-gradient-to-br from-teal-400/25 to-emerald-400/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    {/* Medium liquid drops */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`liquid-medium-${i}`}
        className="absolute bg-gradient-to-b from-emerald-400/40 to-teal-400/40 rounded-full blur-xl animate-float"
        style={{
          width: `${Math.random() * 60 + 40}px`,
          height: `${Math.random() * 80 + 60}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${6 + Math.random() * 4}s`,
        }}
      />
    ))}
    {/* Small liquid drops */}
    {[...Array(15)].map((_, i) => (
      <div
        key={`liquid-small-${i}`}
        className="absolute bg-gradient-to-b from-teal-400/50 to-emerald-400/50 rounded-full blur-sm animate-float"
        style={{
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 30 + 20}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${5 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

// Solid Color background
const SolidColorBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-background to-slate-800"></div>
    {/* Minimal accent */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-700/10 to-transparent"></div>
  </div>
);

// Simple Strings background
const SimpleStringsBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/15 via-background to-orange-500/15"></div>
    {/* String-like lines */}
    <div className="absolute inset-0 opacity-40">
      {[...Array(30)].map((_, i) => (
        <div
          key={`string-${i}`}
          className="absolute bg-gradient-to-r from-yellow-400/60 to-orange-400/60 shadow-sm"
          style={{
            width: `${Math.random() * 300 + 150}px`,
            height: '2px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
    {/* Connection nodes */}
    {[...Array(20)].map((_, i) => (
      <div
        key={`point-${i}`}
        className="absolute w-2 h-2 bg-orange-400/60 rounded-full animate-pulse shadow-lg shadow-orange-500/20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
        }}
      />
    ))}
    {/* Network effect */}
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                       radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
      backgroundSize: '60px 60px, 80px 80px'
    }}></div>
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