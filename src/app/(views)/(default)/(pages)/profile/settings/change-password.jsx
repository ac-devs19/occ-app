import { View, ScrollView } from "react-native";
import TextInput from "../../../../../../components/text-input";
import Button from "../../../../../../components/button";

export default function ChangePassword() {
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
      <View className="gap-3">
        <TextInput label="Current Password" secureTextEntry={true} />
        <TextInput label="New Password" secureTextEntry={true} />
        <TextInput label="Confirm Password" secureTextEntry={true} />
      </View>
      <Button title="Save Changes" />
    </ScrollView>
  );
}
