import { Redirect, Stack } from "expo-router";
import { useAuthContext } from "~/contexts/auth-context";

export default function DefaultLayout() {
  const { user } = useAuthContext();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(pages)" />
    </Stack>
  );
}
