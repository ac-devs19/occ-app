import { Stack } from "expo-router";

export default function ViewsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(default)" />
    </Stack>
  );
}
