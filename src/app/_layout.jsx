import "../../global.css";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { getPaperTheme } from "../constants/themes/paper-theme";
import { ThemeProvider, useThemeContext } from "../contexts/theme-context";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

function InnerLayout() {
  const { isDark } = useThemeContext();
  const paperTheme = getPaperTheme(isDark);

  const [loaded, error] = useFonts({
    "Figtree-Bold": require("../assets/fonts/Figtree-Bold.ttf"),
    "Figtree-ExtraBold": require("../assets/fonts/Figtree-ExtraBold.ttf"),
    "Figtree-Medium": require("../assets/fonts/Figtree-Medium.ttf"),
    "Figtree-Regular": require("../assets/fonts/Figtree-Regular.ttf"),
    "Figtree-SemiBold": require("../assets/fonts/Figtree-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationThemeProvider value={paperTheme}>
        <View
          style={{ flex: 1, backgroundColor: paperTheme.colors.background }}
        >
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(views)" />
          </Stack>
        </View>
        <StatusBar style={isDark ? "light" : "dark"} />
      </NavigationThemeProvider>
    </PaperProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <InnerLayout />
    </ThemeProvider>
  );
}
