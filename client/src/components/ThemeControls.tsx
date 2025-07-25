
import { Moon, Sun, Palette, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeControls = () => {
  const { themeColor, themeMode, setThemeColor, setThemeMode, backgroundAnimation, setBackgroundAnimation } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colors = [
    { name: 'pink', color: 'bg-pink-500', label: 'Pink' },
    { name: 'blue', color: 'bg-blue-500', label: 'Blue' },
    { name: 'purple', color: 'bg-purple-500', label: 'Purple' },
    { name: 'red', color: 'bg-red-500', label: 'Red' },
    { name: 'green', color: 'bg-green-500', label: 'Green' },
    { name: 'yellow', color: 'bg-yellow-500', label: 'Yellow' },
  ] as const;

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Theme Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="p-3 rounded-lg bg-card hover:bg-accent border border-border transition-colors duration-200 shadow-lg"
        aria-label="Toggle theme"
      >
        {themeMode === 'light' ? (
          <Moon className="w-5 h-5 text-foreground" />
        ) : (
          <Sun className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Color Theme Toggle */}
      <div className="relative">
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="p-3 rounded-lg bg-card hover:bg-accent border border-border transition-colors duration-200 shadow-lg"
          aria-label="Change theme color"
        >
          <Palette className="w-5 h-5 text-foreground" />
        </button>

        {showColorPicker && (
          <div className="absolute top-full mt-2 right-0 bg-card border border-border rounded-lg p-3 shadow-xl z-50">
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setThemeColor(color.name);
                    setShowColorPicker(false);
                  }}
                  className={`w-8 h-8 rounded-full ${color.color} transition-transform duration-200 hover:scale-110 ${
                    themeColor === color.name ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background' : ''
                  }`}
                  aria-label={color.label}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Background Animation Toggle */}
      <button
        onClick={() => setBackgroundAnimation(!backgroundAnimation)}
        className={`p-3 rounded-lg bg-card hover:bg-accent border border-border transition-colors duration-200 shadow-lg ${
          backgroundAnimation ? 'text-primary' : 'text-muted-foreground'
        }`}
        aria-label="Toggle background animation"
      >
        <Sparkles className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ThemeControls;
