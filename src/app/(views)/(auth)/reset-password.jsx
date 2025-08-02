import { View, ScrollView, Alert, BackHandler } from "react-native";
import { Text, useTheme } from "react-native-paper";
import TextInput from "../../../components/text-input";
import Button from "../../../components/button";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function NewPassword() {
  const theme = useTheme();

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to cancel operation?", [
          {
            text: "No",
            style: "cancel",
          },
          { text: "Yes", onPress: () => router.replace("/sign-in") },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

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
          <Text
            style={{
              fontFamily: "Figtree-Bold",
              fontSize: 24,
            }}
          >
            Create New Password
          </Text>
          <Text
            style={{
              fontFamily: "Figtree-Regular",
              fontSize: 14,
            }}
          >
            Please make a new password.
          </Text>
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
