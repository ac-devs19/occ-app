import { View, ScrollView } from "react-native";
import { Text, useTheme } from "react-native-paper";
import TextInput from "../../../components/text-input";
import Button from "../../../components/button";

export default function NewPassword() {
  const theme = useTheme();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flexGrow: 1,
        padding: 16,
        justifyContent: "space-between",
        gap: 24,
      }}
    >
      <View className="gap-6">
        <View className="flex-row items-center justify-between gap-2">
          <View
            style={{
              backgroundColor: theme.colors.primary,
            }}
            className="flex-1 h-[6px] rounded-full"
          />
          <View
            style={{
              backgroundColor: theme.colors.primary,
            }}
            className="flex-1 h-[6px] rounded-full"
          />
          <View
            style={{
              backgroundColor: theme.colors.primary,
            }}
            className="flex-1 h-[6px] rounded-full"
          />
        </View>
        <View className="gap-2">
          <Text variant="titleLarge">Create New Password</Text>
          <Text variant="labelLarge">Please make a new password.</Text>
        </View>
        <View className="gap-3">
          <TextInput label="New Password" secureTextEntry={true} />
          <TextInput label="Confirm Password" secureTextEntry={true} />
        </View>
      </View>
      <Button title="Save Changes" />
    </ScrollView>
  );
}
