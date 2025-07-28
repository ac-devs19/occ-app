import { Redirect } from "expo-router";
import { useAuthContext } from "../contexts/auth-context";
import { Image, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function Index() {
  const { user, appLoading } = useAuthContext();

  return appLoading ? (
    <View className="flex-1 items-center justify-center">
      <View className="items-center gap-4">
        <Image
          resizeMode="contain"
          source={require("../assets/images/splash-icon.png")}
          className="h-72 w-72"
        />
        <ActivityIndicator size={30} />
      </View>
    </View>
  ) : user ? (
    <Redirect href="/home" />
  ) : (
    <Redirect href="/sign-in" />
  );
}
