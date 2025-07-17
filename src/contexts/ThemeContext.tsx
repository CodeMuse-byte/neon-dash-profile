
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeColor = 'pink' | 'blue' | 'purple' | 'red' | 'green' | 'yellow';
type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeColor: ThemeColor;
  themeMode: ThemeMode;
  setThemeColor: (color: ThemeColor) => void;
  setThemeMode: (mode: ThemeMode) => void;
  backgroundAnimation: boolean;
  setBackgroundAnimation: (enabled: boolean) => void;
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
  const [themeColor, setThemeColor] = useState<ThemeColor>('green');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [backgroundAnimation, setBackgroundAnimation] = useState(true);

  useEffect(() => {
    // Load saved preferences
    const savedColor = localStorage.getItem('themeColor') as ThemeColor;
    const savedMode = localStorage.getItem('themeMode') as ThemeMode;
    const savedAnimation = localStorage.getItem('backgroundAnimation');
    
    if (savedColor) setThemeColor(savedColor);
    if (savedMode) setThemeMode(savedMode);
    if (savedAnimation) setBackgroundAnimation(savedAnimation === 'true');
  }, []);

  useEffect(() => {
    // Apply theme mode
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply theme color
    document.documentElement.setAttribute('data-theme-color', themeColor);
    
    // Save preferences
    localStorage.setItem('themeColor', themeColor);
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('backgroundAnimation', backgroundAnimation.toString());
  }, [themeColor, themeMode, backgroundAnimation]);

  return (
    <ThemeContext.Provider value={{
      themeColor,
      themeMode,
      setThemeColor,
      setThemeMode,
      backgroundAnimation,
      setBackgroundAnimation
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
