import * as SecureStore from "expo-secure-store";

const THEME_KEY = "theme";

export const saveTheme = async (theme) => {
  await SecureStore.setItemAsync(THEME_KEY, theme);
};

export const getSavedTheme = async () => {
  const value = await SecureStore.getItemAsync(THEME_KEY);
  return value || "system";
};
