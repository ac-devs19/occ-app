import { View } from "react-native";
import ImageLogo from "./image-logo";
import { Text, useTheme } from "react-native-paper";

export default function AppLogo() {
  const theme = useTheme();

  return (
    <View className="flex-row items-center gap-2">
      <ImageLogo className="h-14 w-14" />
      <View
        style={{
          backgroundColor: theme.colors.primary,
        }}
        className="w-0.5 rounded-full h-full"
      />
      <View className="gap-1">
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Allrounder-Medium",
            color: theme.colors.primary,
          }}
        >
          Opol
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Allrounder-Medium",
            color: theme.colors.primary,
          }}
        >
          Community
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Allrounder-Medium",
            color: theme.colors.primary,
          }}
        >
          College
        </Text>
      </View>
    </View>
  );
}
