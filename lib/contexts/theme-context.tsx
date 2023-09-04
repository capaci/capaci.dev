import { createContext, useEffect, useState } from 'react';


interface ThemeContextProps {
  theme: string;
  toggleTheme?: () => void;
}

export const ThemeContext = createContext({ theme: 'light' } as ThemeContextProps);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [theme]);

  return (
    <div>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
} 
