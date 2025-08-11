import { Redirect } from "expo-router";
import { Image, View } from "react-native";
import { useAuthContext } from "~/contexts/auth-context";
import { useNetworkState } from "expo-network";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { AlertTriangle } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function Index() {
  const networkState = useNetworkState();
  const { user, appLoading } = useAuthContext();

  const noInternet =
    networkState.isConnected === false ||
    networkState.isInternetReachable === false;

  return appLoading || noInternet ? (
    <SafeAreaView className="flex-1">
      <View className="relative flex-1">
        <View className="flex-1 items-center justify-center">
          <View className="items-center">
            <Image
              resizeMode="contain"
              source={require("~/assets/images/splash-icon.png")}
              className="h-72 w-72"
            />
            <LottieView
              style={{
                width: 150,
                height: 150,
              }}
              source={require("~/assets/animations/liquid-4-dot-loader.json")}
              autoPlay
              loop
            />
          </View>
        </View>
        {noInternet && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            className="absolute bottom-4 mx-4"
          >
            <Alert
              icon={AlertTriangle}
              className="border-destructive rounded-xl bg-red-100/50"
            >
              <AlertTitle className="font-figtree-medium">
                Network Error!
              </AlertTitle>
              <AlertDescription className="font-figtree-regular">
                Something went wrong with your network connection. Please check
                your internet and try again.
              </AlertDescription>
            </Alert>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  ) : user ? (
    <Redirect href="/home" />
  ) : (
    <Redirect href="/sign-in" />
  );
}
