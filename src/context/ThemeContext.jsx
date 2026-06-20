import { createContext, useState, useContext } from "react";

// Create the context
export const ThemeContext = createContext();

// Provider that wraps the whole app in App.jsx
export function ThemeProvider({ children }) {
  // Read saved preference from localStorage so dark mode persists on refresh
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Convenience hook — any component can call useTheme() instead of useContext(ThemeContext)
export function useTheme() {
  return useContext(ThemeContext);
}