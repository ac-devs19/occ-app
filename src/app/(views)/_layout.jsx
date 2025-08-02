import { Stack } from "expo-router";
import LoadingScreen from "../../components/loading-screen";
import { useAuthContext } from "../../contexts/auth-context";
import NetworkModal from "../../components/network-modal";
import { useNetworkState } from "expo-network";

export default function ViewsLayout() {
  const networkState = useNetworkState();
  const { loading } = useAuthContext();

  const noInternet =
    networkState.isConnected === false ||
    networkState.isInternetReachable === false;

  return (
    <>
      <NetworkModal visible={noInternet} />
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
