import { View, ScrollView } from "react-native";
import { Text, useTheme } from "react-native-paper";
import TextInput from "../../../components/text-input";
import Button from "../../../components/button";
import { useNavigation } from "@react-navigation/native";

export default function IdVerification() {
  const theme = useTheme();
  const navigation = useNavigation();

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
          <Text
            style={{
              fontFamily: "Figtree-Bold",
              fontSize: 24,
            }}
          >
            ID Number Verification
          </Text>
          <Text
            style={{
              fontFamily: "Figtree-Regular",
              fontSize: 14,
            }}
          >
            Please enter the one-time password (OTP) that we sent to{" "}
            <Text
              style={{
                fontFamily: "Figtree-SemiBold",
                fontSize: 14,
              }}
            >
              name@gmail.com
            </Text>
          </Text>
        </View>
        <TextInput label="OTP" keyboardType="numeric" maxLength={6} />
      </View>
      <Button
        title="Verify"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "reset-password" }],
          })
        }
      />
    </ScrollView>
  );
}
