import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    OCEAN: 'ocean',
    FOREST: 'forest',
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);