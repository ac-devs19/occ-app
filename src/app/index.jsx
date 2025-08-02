import { Redirect } from "expo-router";
import { useAuthContext } from "../contexts/auth-context";
import { Image, View } from "react-native";
import { ActivityIndicator, Snackbar } from "react-native-paper";
import { useNetworkState } from "expo-network";

export default function Index() {
  const networkState = useNetworkState();
  const { user, appLoading } = useAuthContext();

  const noInternet =
    networkState.isConnected === false ||
    networkState.isInternetReachable === false;

  return noInternet || appLoading ? (
    <View className="flex-1 items-center justify-center">
      <View className="items-center gap-4">
        <Image
          resizeMode="contain"
          source={require("../assets/images/splash-icon.png")}
          className="h-72 w-72"
        />
        <ActivityIndicator size={30} />
      </View>
      <Snackbar visible={noInternet}>
        Something went wrong with your network connection. Please check your
        internet and try again.
      </Snackbar>
    </View>
  ) : user ? (
    <Redirect href="/home" />
  ) : (
    <Redirect href="/sign-in" />
  );
}
