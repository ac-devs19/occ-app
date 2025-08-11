import { Redirect, Stack } from "expo-router";
import { useAuthContext } from "~/contexts/auth-context";

export default function AuthLayout() {
  const { user } = useAuthContext();

  if (user) {
    return <Redirect href="/home" />;
  }

  return (
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="sign-in"
      />
    </Stack>
  );
}
