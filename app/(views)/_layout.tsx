import { useNetworkState } from "expo-network";
import { Stack } from "expo-router";
import LoadingScreen from "~/components/loading-screen";
import NetworkModal from "~/components/network-modal";
import { useAuthContext } from "~/contexts/auth-context";

export default function ViewsLayout() {
  const networkState = useNetworkState();
  const { loading } = useAuthContext();

  const noInternet =
    networkState.isConnected === false ||
    networkState.isInternetReachable === false;

  return (
    <>
      <NetworkModal open={noInternet} />
      <LoadingScreen open={loading} />
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
