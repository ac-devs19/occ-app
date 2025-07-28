import { ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import { useThemeContext } from "../../../../../../contexts/theme-context";

export default function DarkMode() {
  const { theme, setTheme } = useThemeContext();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <RadioButton.Group
        onValueChange={(value) => setTheme(value)}
        value={theme}
      >
        <RadioButton.Item label="Off" value="light" />
        <RadioButton.Item label="On" value="dark" />
        <RadioButton.Item label="System" value="system" />
      </RadioButton.Group>
    </ScrollView>
  );
}
