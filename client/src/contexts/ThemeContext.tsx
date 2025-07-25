
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeColor = 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'pink' | 'orange' | 'cyan';
type BackgroundType = 'earth-lines' | 'abstract-ball' | 'water-waves' | 'liquids-wavy' | 'solid-color' | 'simple-strings';
type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeColor: ThemeColor;
  themeMode: ThemeMode;
  backgroundType: BackgroundType;
  primaryHSL: string;
  secondaryHSL: string;
  setThemeColor: (color: ThemeColor) => void;
  setThemeMode: (mode: ThemeMode) => void;
  setBackgroundType: (type: BackgroundType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('earth-lines');
  
  // Color map for HSL values
  const colorMap = {
    blue: { primary: '217 91% 60%', secondary: '221 83% 53%' },
    purple: { primary: '263 70% 50%', secondary: '271 81% 56%' },
    green: { primary: '142 76% 36%', secondary: '160 84% 39%' },
    red: { primary: '0 84% 60%', secondary: '348 83% 47%' },
    yellow: { primary: '48 96% 53%', secondary: '45 93% 47%' },
    pink: { primary: '330 81% 60%', secondary: '340 82% 52%' },
    orange: { primary: '24 95% 53%', secondary: '20 91% 48%' },
    cyan: { primary: '188 94% 42%', secondary: '186 83% 53%' }
  };
  
  const currentColors = colorMap[themeColor];

  useEffect(() => {
    // Load saved preferences
    const savedColor = localStorage.getItem('themeColor') as ThemeColor;
    const savedMode = localStorage.getItem('themeMode') as ThemeMode;
    const savedBackground = localStorage.getItem('backgroundType') as BackgroundType;
    
    if (savedColor) setThemeColor(savedColor);
    if (savedMode) setThemeMode(savedMode);
    if (savedBackground) setBackgroundType(savedBackground);
  }, []);

  useEffect(() => {
    // Apply theme mode
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply theme color as CSS variables
    document.documentElement.setAttribute('data-theme-color', themeColor);
    
    // Set CSS custom properties for dynamic theming
    document.documentElement.style.setProperty('--primary', currentColors.primary);
    document.documentElement.style.setProperty('--secondary', currentColors.secondary);
    
    // Save preferences
    localStorage.setItem('themeColor', themeColor);
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('backgroundType', backgroundType);
  }, [themeColor, themeMode, backgroundType]);

  return (
    <ThemeContext.Provider value={{
      themeColor,
      themeMode,
      backgroundType,
      primaryHSL: currentColors.primary,
      secondaryHSL: currentColors.secondary,
      setThemeColor,
      setThemeMode,
      setBackgroundType
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
