import { Redirect, Stack } from "expo-router";
import { useAuthContext } from "../../../contexts/auth-context";
import { useTheme } from "react-native-paper";

export default function AuthLayout() {
  const theme = useTheme();
  // const { user } = useAuthContext();

  // if (user) {
  //   return <Redirect href="/home" />;
  // }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="sign-in"
      />
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
        name="forgot-password"
      />
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
        name="id-verification"
      />
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
        name="new-password"
      />
    </Stack>
  );
}
