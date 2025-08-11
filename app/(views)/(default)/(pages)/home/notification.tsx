import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function Notification() {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <LottieView
        style={{
          width: 150,
          height: 150,
        }}
        source={require("~/assets/animations/empty-box.json")}
        autoPlay
        loop
      />
      <View className="items-center gap-2 px-4">
        <Text className="font-figtree-bold text-xl text-center text-slate-800">
          No notifications yet
        </Text>
        <Text className="font-figtree-regular text-center text-sm text-muted-foreground">
          We’ll let you know when something comes up.
        </Text>
      </View>
    </View>
  );
}
