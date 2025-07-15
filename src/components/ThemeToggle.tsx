
import { useState } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { name: 'Pink', primary: '320 100% 50%', secondary: '195 100% 50%' },
  { name: 'Blue', primary: '220 100% 50%', secondary: '280 100% 50%' },
  { name: 'Purple', primary: '280 100% 50%', secondary: '320 100% 50%' },
  { name: 'Green', primary: '120 100% 40%', secondary: '160 100% 45%' },
  { name: 'Red', primary: '0 100% 50%', secondary: '20 100% 55%' },
  { name: 'Yellow', primary: '45 100% 50%', secondary: '60 100% 50%' },
];

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const applyTheme = (theme: typeof themes[0]) => {
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--secondary', theme.secondary);
  };

  const handleThemeChange = (index: number) => {
    setCurrentTheme(index);
    applyTheme(themes[index]);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-card/50 hover:bg-card border border-border hover:border-primary/30 transition-all duration-300"
      >
        <Palette className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg">
          <div className="space-y-1">
            {themes.map((theme, index) => (
              <button
                key={theme.name}
                onClick={() => handleThemeChange(index)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  currentTheme === index
                    ? 'bg-primary/20 text-primary'
                    : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: `hsl(${theme.primary})` }}
                  />
                  <span>{theme.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
