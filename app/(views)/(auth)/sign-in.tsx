import { Info } from "lucide-react-native";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLogo from "~/components/app-logo";
import Button from "~/components/button";
import TextInput from "~/components/text-input";
import {
  AlertDescription,
  AlertTitle,
  Alert as Alrt,
} from "~/components/ui/alert";
import { Text } from "~/components/ui/text";
import { useAuthContext } from "~/contexts/auth-context";

export default function SignIn() {
  const { login } = useAuthContext();
  const [id_number, setIdNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!id_number || !password) {
      return Alert.alert("Error!", "All fields are required.");
    }
    login({ user_id_no: id_number, password });
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          gap: 24,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View className="gap-6">
          <AppLogo />
          <View className="gap-1">
            <Text className="text-3xl font-figtree-black">Hello, Welcome!</Text>
            <Text className="font-figtree-regular">
              Please login your account.
            </Text>
          </View>
          <View className="gap-3">
            <TextInput
              value={id_number}
              onChangeText={(text) => setIdNumber(text)}
              label="ID Number"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              label="Password"
              secureTextEntry
            />
          </View>
          <Alrt
            icon={Info}
            className="border-primary rounded-xl bg-blue-100/50"
          >
            <AlertTitle className="font-figtree-medium">Note!</AlertTitle>
            <AlertDescription className="font-figtree-regular">
              This mobile portal is for students only. Other accounts will not
              be able to log in.
            </AlertDescription>
          </Alrt>
        </View>
        <Button title="Login" onPress={handleLogin} />
      </ScrollView>
    </SafeAreaView>
  );
}
