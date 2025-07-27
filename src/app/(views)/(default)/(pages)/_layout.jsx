import { Stack } from "expo-router";
import { Text } from "react-native-paper";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        options={{
          headerTitle: () => <Text variant="titleMedium">Dark Mode</Text>,
        }}
        name="profile/dark-mode"
      />
    </Stack>
  );
}
