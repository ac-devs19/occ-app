import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLogo from "../../../components/app-logo";
import Button from "../../../components/button";
import TextInput from "../../../components/text-input";
import { router } from "expo-router";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 16,
          gap: 24,
          justifyContent: "space-between",
        }}
      >
        <View className="gap-6">
          <AppLogo />
          <View className="gap-2">
            <Text variant="headlineLarge">Hello, Welcome!</Text>
            <Text variant="bodyLarge">Please login your account.</Text>
          </View>
          <View className="gap-3">
            <TextInput label="ID Number" keyboardType="numeric" />
            <TextInput label="Password" secureTextEntry={true} />
          </View>
        </View>
        <Button title="Login" onPress={() => router.push("/home")} />
      </ScrollView>
    </SafeAreaView>
  );
}
