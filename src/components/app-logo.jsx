import { View } from "react-native";
import ImageLogo from "./image-logo";
import { Text, useTheme } from "react-native-paper";

export default function AppLogo() {
  const theme = useTheme();

  return (
    <View className="flex-row items-center gap-2">
      <ImageLogo className="h-14 w-14" />
      <View>
        <Text
          style={{
            color: theme.colors.primary,
          }}
          variant="titleMedium"
        >
          Opol
        </Text>
        <Text
          style={{
            color: theme.colors.primary,
          }}
          variant="titleMedium"
        >
          Community
        </Text>
        <Text
          style={{
            color: theme.colors.primary,
          }}
          variant="titleMedium"
        >
          College
        </Text>
      </View>
    </View>
  );
}
