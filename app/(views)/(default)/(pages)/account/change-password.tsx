import { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import Button from "~/components/button";
import TextInput from "~/components/text-input";
import { useAuthContext } from "~/contexts/auth-context";

export default function ChangePassword() {
  const { user, changePassword } = useAuthContext();
  const [current_password, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleChangePassword = () => {
    if (user?.password_change === 0) {
      if (password === "" || password_confirmation === "") {
        return Alert.alert("Error!", "All fields are required.");
      }
      changePassword({ password, password_confirmation });
    } else {
      if (
        current_password === "" ||
        password === "" ||
        password_confirmation === ""
      ) {
        return Alert.alert("Error!", "All fields are required.");
      }
      changePassword({ current_password, password, password_confirmation });
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flexGrow: 1,
        padding: 16,
        justifyContent: "space-between",
      }}
    >
      <View className="gap-3">
        {user?.password_change === 1 && (
          <TextInput
            value={current_password}
            onChangeText={(text) => setCurrentPassword(text)}
            label="Current Password"
            secureTextEntry
          />
        )}
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          label="New Password"
          secureTextEntry
        />
        <TextInput
          value={password_confirmation}
          onChangeText={(text) => setPasswordConfirmation(text)}
          label="Confirm Password"
          secureTextEntry
        />
      </View>
      <Button onPress={handleChangePassword} title="Save Changes" />
    </ScrollView>
  );
}
