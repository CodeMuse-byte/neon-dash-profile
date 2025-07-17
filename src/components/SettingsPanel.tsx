
import { Settings, X, Palette, Monitor, Waves } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { themeColor, themeMode, setThemeColor, setThemeMode, backgroundAnimation, setBackgroundAnimation } = useTheme();

  const colors = [
    { name: 'blue', color: '#3b82f6', label: 'Blue' },
    { name: 'purple', color: '#8b5cf6', label: 'Purple' },
    { name: 'green', color: '#10b981', label: 'Green' },
    { name: 'red', color: '#ef4444', label: 'Red' },
    { name: 'yellow', color: '#f59e0b', label: 'Yellow' },
    { name: 'pink', color: '#ec4899', label: 'Pink' },
  ] as const;

  return (
    <>
      {/* Floating Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-card border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        aria-label="Open settings"
      >
        <Settings className="w-6 h-6 text-foreground animate-spin" style={{ animationDuration: '8s' }} />
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
          <div className="relative bg-card border border-border rounded-2xl p-6 w-96 max-w-[90vw] shadow-2xl animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-orbitron text-xl font-bold text-foreground">Theme Settings</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Theme Mode */}
            <div className="mb-6">
              <h3 className="font-orbitron text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                APPEARANCE
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setThemeMode('dark')}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    themeMode === 'dark' 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-muted hover:bg-accent border-border'
                  }`}
                >
                  Dark Mode
                </button>
                <button
                  onClick={() => setThemeMode('light')}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    themeMode === 'light' 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-muted hover:bg-accent border-border'
                  }`}
                >
                  Light Mode
                </button>
              </div>
            </div>

            {/* Theme Colors */}
            <div className="mb-6">
              <h3 className="font-orbitron text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Palette className="w-4 h-4" />
                ACCENT COLOR
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setThemeColor(color.name)}
                    className={`p-3 rounded-lg border text-xs font-medium transition-all hover:scale-105 ${
                      themeColor === color.name 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    style={{ backgroundColor: `${color.color}20` }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full mx-auto mb-1"
                      style={{ backgroundColor: color.color }}
                    />
                    {color.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Background Animation */}
            <div>
              <h3 className="font-orbitron text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Waves className="w-4 h-4" />
                3D BACKGROUND
              </h3>
              <button
                onClick={() => setBackgroundAnimation(!backgroundAnimation)}
                className={`w-full p-3 rounded-lg border text-sm font-medium transition-all ${
                  backgroundAnimation 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-muted hover:bg-accent border-border'
                }`}
              >
                {backgroundAnimation ? 'Disable Animation' : 'Enable Animation'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPanel;
