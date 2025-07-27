import { View } from "react-native";
import ImageLogo from "./image-logo";
import { Text } from "react-native-paper";

export default function AppLogo() {
  return (
    <View className="flex-row items-center gap-2">
      <ImageLogo className="h-14 w-14" />
      <View>
        <Text variant="titleMedium">Opol</Text>
        <Text variant="titleMedium">Community</Text>
        <Text variant="titleMedium">College</Text>
      </View>
    </View>
  );
}
