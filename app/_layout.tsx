import "~/global.css";

import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as React from "react";
import { PortalHost } from "@rn-primitives/portal";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Color } from "~/constants/color";
import { AuthProvider } from "~/contexts/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: Color.light,
};

export default function RootLayout() {
  const queryClient = new QueryClient();

  const [loaded, error] = useFonts({
    "Figtree-Black": require("../assets/fonts/Figtree-Black.ttf"),
    "Figtree-Bold": require("../assets/fonts/Figtree-Bold.ttf"),
    "Figtree-ExtraBold": require("../assets/fonts/Figtree-ExtraBold.ttf"),
    "Figtree-Light": require("../assets/fonts/Figtree-Light.ttf"),
    "Figtree-Medium": require("../assets/fonts/Figtree-Medium.ttf"),
    "Figtree-Regular": require("../assets/fonts/Figtree-Regular.ttf"),
    "Figtree-SemiBold": require("../assets/fonts/Figtree-SemiBold.ttf"),
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={LIGHT_THEME}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="(views)" />
          </Stack>
        </QueryClientProvider>
      </AuthProvider>
      <PortalHost />
    </ThemeProvider>
  );
}
