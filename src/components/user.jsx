import { Image, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useAuthContext } from "../contexts/auth-context";

export default function User() {
  const { user } = useAuthContext();
  const theme = useTheme();

  return (
    <View className="flex-row items-center gap-2">
      <Image
        source={require("../assets/images/user.png")}
        className="h-14 w-14 rounded-full"
      />
      <View className="gap-1">
        <Text
          style={{
            fontFamily: "Figtree-Bold",
            fontSize: 14,
            color: theme.colors.primary,
          }}
        >
          Hi, {user.user_information.first_name}
        </Text>
        <Text
          style={{
            fontFamily: "Figtree-Medium",
            fontSize: 12,
          }}
        >
          {user.user_id_no}
        </Text>
      </View>
    </View>
  );
}
