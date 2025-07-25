
import { Settings, X, Palette, Monitor, Sparkles, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { themeColor, themeMode, backgroundType, setThemeColor, setThemeMode, setBackgroundType } = useTheme();

  const colors = [
    { name: 'blue', color: '#3b82f6', label: 'Blue', gradient: 'from-blue-500 to-blue-600' },
    { name: 'purple', color: '#8b5cf6', label: 'Purple', gradient: 'from-purple-500 to-purple-600' },
    { name: 'green', color: '#10b981', label: 'Green', gradient: 'from-green-500 to-green-600' },
    { name: 'red', color: '#ef4444', label: 'Red', gradient: 'from-red-500 to-red-600' },
    { name: 'yellow', color: '#f59e0b', label: 'Yellow', gradient: 'from-yellow-500 to-yellow-600' },
    { name: 'pink', color: '#ec4899', label: 'Pink', gradient: 'from-pink-500 to-pink-600' },
    { name: 'orange', color: '#f97316', label: 'Orange', gradient: 'from-orange-500 to-orange-600' },
    { name: 'cyan', color: '#06b6d4', label: 'Cyan', gradient: 'from-cyan-500 to-cyan-600' },
  ] as const;

  const backgroundOptions = [
    { 
      id: 'earth-lines', 
      name: 'Earth Lines Sphere', 
      preview: '🌐',
      description: 'Blue grid pattern with glowing orbs',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      id: 'abstract-ball', 
      name: '3D Abstract Ball', 
      preview: '⚫',
      description: 'Purple/pink orbs with geometric shapes',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      id: 'water-waves', 
      name: 'Water Waves', 
      preview: '🌊',
      description: 'Cyan wave patterns with bubbles',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    { 
      id: 'liquids-wavy', 
      name: 'Liquids Wavy', 
      preview: '💧',
      description: 'Green/teal liquid blobs',
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    { 
      id: 'solid-color', 
      name: 'Solid Color', 
      preview: '⬛',
      description: 'Dark minimalist gradient',
      gradient: 'from-slate-800/40 to-slate-900/40'
    },
    { 
      id: 'simple-strings', 
      name: 'Simple Strings', 
      preview: '🕸️',
      description: 'Yellow/orange network lines',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    },
  ] as const;

  return (
    <>
      {/* Floating Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md border border-primary/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 group"
        aria-label="Open Configuration"
      >
        <Settings className="w-7 h-7 text-primary animate-spin group-hover:text-primary-foreground transition-colors" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="relative bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl border border-border/50 rounded-3xl p-8 w-[480px] max-w-[90vw] shadow-2xl animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-plus-jakarta text-2xl font-bold text-foreground mb-1">Configuration</h2>
                <p className="text-sm text-muted-foreground">Customize your portfolio experience</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-accent/80 transition-all duration-200 hover:scale-105"
              >
                <X className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
              </button>
            </div>

            {/* Theme Mode */}
            <div className="mb-8">
              <h3 className="font-plus-jakarta text-sm font-bold text-foreground/80 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <Monitor className="w-4 h-4" />
                Appearance
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setThemeMode('dark')}
                  className={`p-4 rounded-xl border text-sm font-semibold transition-all duration-200 flex items-center gap-3 ${
                    themeMode === 'dark' 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-primary shadow-lg shadow-primary/25' 
                      : 'bg-muted/50 hover:bg-accent/80 border-border/50 hover:border-primary/30'
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  Dark Mode
                </button>
                <button
                  onClick={() => setThemeMode('light')}
                  className={`p-4 rounded-xl border text-sm font-semibold transition-all duration-200 flex items-center gap-3 ${
                    themeMode === 'light' 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-primary shadow-lg shadow-primary/25' 
                      : 'bg-muted/50 hover:bg-accent/80 border-border/50 hover:border-primary/30'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  Light Mode
                </button>
              </div>
            </div>

            {/* Theme Colors */}
            <div className="mb-8">
              <h3 className="font-plus-jakarta text-sm font-bold text-foreground/80 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <Palette className="w-4 h-4" />
                Colors
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setThemeColor(color.name)}
                    className={`group relative p-4 rounded-xl border text-xs font-semibold transition-all duration-200 hover:scale-105 ${
                      themeColor === color.name 
                        ? 'border-primary ring-2 ring-primary/30 shadow-lg' 
                        : 'border-border/50 hover:border-primary/40'
                    }`}
                    style={{ backgroundColor: `${color.color}15` }}
                  >
                    <div className="flex flex-col items-center">
                      <div 
                        className={`w-5 h-5 rounded-full mb-2 shadow-md bg-gradient-to-br ${color.gradient} ${
                          themeColor === color.name ? 'scale-110' : ''
                        } transition-transform`}
                      />
                      <span className={`${themeColor === color.name ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {color.label}
                      </span>
                    </div>
                    {themeColor === color.name && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 3D Background Selection */}
            <div>
              <h3 className="font-plus-jakarta text-sm font-bold text-foreground/80 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Three Dimensional Shapes
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {backgroundOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setBackgroundType(option.id as any)}
                    className={`group relative p-4 rounded-xl border text-xs font-semibold transition-all duration-200 hover:scale-105 ${
                      backgroundType === option.id 
                        ? 'border-primary ring-2 ring-primary/30 shadow-lg shadow-primary/25' 
                        : 'border-border/50 hover:border-primary/40'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} rounded-xl ${
                      backgroundType === option.id ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'
                    } transition-opacity`}></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div 
                        className={`text-2xl mb-2 ${
                          backgroundType === option.id ? 'scale-110' : ''
                        } transition-transform`}
                        style={{ 
                          filter: backgroundType === option.id ? 'brightness(1.3) drop-shadow(0 0 8px currentColor)' : 'none'
                        }}
                      >
                        {option.preview}
                      </div>
                      <div className={`text-center leading-tight mb-1 ${
                        backgroundType === option.id ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {option.name}
                      </div>
                      <div className={`text-[10px] text-center leading-tight ${
                        backgroundType === option.id ? 'text-foreground/70' : 'text-muted-foreground/60'
                      }`}>
                        {option.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPanel;
