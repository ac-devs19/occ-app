import { Image, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function User() {
  const theme = useTheme();

  return (
    <View className="flex-row items-center gap-2">
      <Image
        source={require("../assets/images/user.png")}
        className="h-14 w-14 rounded-full"
      />
      <View className="gap-1">
        <Text
          style={{
            color: theme.colors.primary,
          }}
          variant="titleMedium"
        >
          Hi, Name
        </Text>
        <Text variant="labelMedium">ID Number</Text>
      </View>
    </View>
  );
}
