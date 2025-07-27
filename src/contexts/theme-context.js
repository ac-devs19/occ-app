import { createContext, useEffect, useState, useContext } from "react";
import { Appearance } from "react-native";
import { getSavedTheme, saveTheme } from "../constants/themes/theme-storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const init = async () => {
      const saved = await getSavedTheme();
      setTheme(saved);
    };
    init();
  }, []);

  useEffect(() => {
    const updateTheme = (preferences) => {
      if (theme === "system") {
        setIsDark(preferences.colorScheme === "dark");
      }
    };

    const subscription = Appearance.addChangeListener(updateTheme);

    const colorScheme = Appearance.getColorScheme();
    if (theme === "system") {
      setIsDark(colorScheme === "dark");
    }

    return () => subscription.remove();
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") {
      setIsDark(theme === "dark");
    }
  }, [theme]);

  const changeTheme = async (newTheme) => {
    setTheme(newTheme);
    await saveTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
