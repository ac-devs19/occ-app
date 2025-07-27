import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";
import { Colors } from "../color";
import { Fonts } from "../font";

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: Colors.dark,
  fonts: Fonts,
};

const customLightTheme = {
  ...MD3LightTheme,
  colors: Colors.light,
  fonts: Fonts,
};

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export function getPaperTheme(isDark) {
  return isDark ? CombinedDarkTheme : CombinedDefaultTheme;
}
