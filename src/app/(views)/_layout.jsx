import { Stack } from "expo-router";
import LoadingScreen from "../../components/loading-screen";
import { useAuthContext } from "../../contexts/auth-context";

export default function ViewsLayout() {
  const { loading } = useAuthContext();

  return (
    <>
      <LoadingScreen visible={loading} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(default)" />
      </Stack>
    </>
  );
}
