import { Image } from "react-native";
import { Text } from "react-native-paper";
import { List } from "react-native-paper";
import { getPaperTheme } from "../constants/themes/paper-theme";

export default function User() {
  const paperTheme = getPaperTheme();

  return (
    <List.Item
      title={<Text variant="titleMedium">Hi, Al Christian</Text>}
      description={<Text variant="labelMedium">2021-1-03790</Text>}
      left={(props) => (
        <Image
          {...props}
          source={require("../assets/images/user.png")}
          className="h-14 w-14 rounded-full"
        />
      )}
      right={(props) => (
        <List.Icon
          {...props}
          color={paperTheme.colors.primary}
          icon="chevron-right"
        />
      )}
    />
  );
}
