import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "theme";

export const setSavedTheme = async (theme) => {
  await AsyncStorage.setItem(THEME_KEY, theme);
};

export const getSavedTheme = async () => {
  const value = await AsyncStorage.getItem(THEME_KEY);
  return value || "system";
};
