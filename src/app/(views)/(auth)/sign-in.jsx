import { ScrollView, TouchableOpacity, View } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLogo from "../../../components/app-logo";
import Button from "../../../components/button";
import TextInput from "../../../components/text-input";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useAuthContext } from "../../../contexts/auth-context";

export default function SignIn() {
  const theme = useTheme();
  const { login } = useAuthContext();
  const [id_number, setIdNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ user_id_no: id_number, password });
  };

  return (
    <SafeAreaView className="flex-1">
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
          <AppLogo />
          <View className="gap-2">
            <Text variant="headlineLarge">Hello, Welcome!</Text>
            <Text variant="bodyLarge">Please login your account.</Text>
          </View>
          <View className="gap-3">
            <TextInput
              value={id_number}
              onChangeText={(text) => setIdNumber(text)}
              label="ID Number"
              keyboardType="numeric"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              label="Password"
              secureTextEntry={true}
            />
            <View className="flex-row justify-end">
              <TouchableOpacity
                onPress={() => router.push("/forgot-password")}
                activeOpacity={0.7}
                className="flex-row items-center gap-1"
              >
                <Text
                  style={{
                    color: theme.colors.primary,
                  }}
                  variant="labelLarge"
                >
                  Forgot Password
                </Text>
                <Icon
                  size={14}
                  source={(props) => (
                    <Ionicons
                      style={{
                        color: theme.colors.primary,
                      }}
                      {...props}
                      name="chevron-forward-outline"
                    />
                  )}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button title="Login" onPress={() => router.push("/home")} />
      </ScrollView>
    </SafeAreaView>
  );
}
