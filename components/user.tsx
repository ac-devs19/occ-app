import { Image, View } from "react-native";
import { Text } from "~/components/ui/text";
import { useAuthContext } from "~/contexts/auth-context";

export default function User() {
  const { user } = useAuthContext();

  function capitalizeFirstLetter(str: string | undefined) {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <View className="flex-row items-center gap-2">
      <Image
        source={require("../assets/images/user.png")}
        className="h-14 w-14 rounded-full"
      />
      <View className="gap-1">
        <Text className="font-figtree-semibold leading-none text-primary">
          Hi, {capitalizeFirstLetter(user?.first_name)}
        </Text>
        <Text className="font-figtree-medium leading-none text-sm">
          {user?.user_id_no}
        </Text>
      </View>
    </View>
  );
}
