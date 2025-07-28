import { View, ScrollView } from "react-native";
import { Text, useTheme } from "react-native-paper";
import TextInput from "../../../components/text-input";
import Button from "../../../components/button";
import { router } from "expo-router";

export default function ForgotPassword() {
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
              backgroundColor: theme.colors.secondaryContainer,
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
          <Text variant="titleLarge">Forgot Password</Text>
          <Text variant="labelLarge">
            Please enter your ID Number, and we'll send you a one-time password
            (OTP) for verification.
          </Text>
        </View>
        <TextInput label="ID Number" keyboardType="numeric" />
      </View>
      <Button title="Send" onPress={() => router.push("/id-verification")} />
    </ScrollView>
  );
}
