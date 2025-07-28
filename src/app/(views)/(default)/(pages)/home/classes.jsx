import { Ionicons } from "@expo/vector-icons";
import { ScrollView, View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";

export default function Classes() {
  const theme = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <Card>
        <View className="gap-1 p-4">
          <Text variant="titleMedium">Introduction to Computing</Text>
          <Text variant="labelMedium">Monday</Text>
        </View>
        <View className="p-4 gap-2">
          <View className="flex-row gap-2 items-center">
            <Ionicons
              size={24}
              color={theme.colors.primary}
              name="time-outline"
            />
            <Text variant="labelLarge">8:00 AM - 1:00 PM</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <Ionicons
              size={24}
              color={theme.colors.primary}
              name="location-outline"
            />
            <Text variant="labelLarge">201</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <Ionicons
              size={24}
              color={theme.colors.primary}
              name="person-outline"
            />
            <Text variant="labelLarge">Name</Text>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
}
