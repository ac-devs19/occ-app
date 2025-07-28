import { View, ScrollView } from "react-native";
import { Text, useTheme } from "react-native-paper";
import TextInput from "../../../components/text-input";
import Button from "../../../components/button";
import { router } from "expo-router";

export default function IdVerification() {
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
              backgroundColor: theme.colors.secondaryContainer,
            }}
            className="flex-1 h-[6px] rounded-full"
          />
        </View>
        <View className="gap-2">
          <Text variant="titleLarge">ID Verification</Text>
          <Text variant="labelLarge">
            Please enter the one-time password (OTP) that we sent to
            name@gmail.com
          </Text>
        </View>
        <TextInput label="OTP" keyboardType="numeric" maxLength={6} />
      </View>
      <Button title="Verify" onPress={() => router.push("/new-password")} />
    </ScrollView>
  );
}
