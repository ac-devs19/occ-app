import { View, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import Icon from "~/components/icon";
import { Text } from "~/components/ui/text";
import User from "~/components/user";
import Constants from "expo-constants";
import { useAuthContext } from "~/contexts/auth-context";
import { router } from "expo-router";

export default function Account() {
  const { logout } = useAuthContext();

  const handleLogout = () => {
    Alert.alert("Hold on!", "Are you sure you want to logout?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => logout(),
      },
    ]);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
      }}
    >
      <View className="gap-6">
        <View className="p-4">
          <User />
        </View>
        <View className="gap-2">
          <TouchableOpacity
            onPress={() => router.push("/account/settings")}
            activeOpacity={0.7}
            className="flex-row items-center justify-between pl-4 pr-6 py-2.5"
          >
            <View className="flex-row items-center gap-4">
              <Icon
                name="Settings"
                strokeWidth={1.7}
                className="text-primary"
              />
              <Text className="font-figtree-medium">Settings</Text>
            </View>
            <Icon
              name="ChevronRight"
              strokeWidth={2}
              size={20}
              className="text-primary"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            activeOpacity={0.7}
            className="flex-row items-center justify-between pl-4 pr-6 py-2.5"
          >
            <View className="flex-row items-center gap-4">
              <Icon
                name="LogOut"
                strokeWidth={1.7}
                className="text-destructive"
              />
              <Text className="font-figtree-medium">Logout</Text>
            </View>
            <Icon
              name="ChevronRight"
              strokeWidth={2}
              size={20}
              className="text-primary"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="py-4 items-center gap-2">
        <Text className="font-figtree-bold text-muted-foreground text-sm">
          {/* v {Constants.expoConfig?.version} */}
          BETA TESTING
        </Text>
        <View className="flex-row items-center gap-2">
          <Text className="font-figtree-bold text-muted-foreground text-sm">
            DEVELOPED BY
          </Text>
          <Image
            resizeMode="contain"
            source={require("../../../../assets/images/departments/CIT.png")}
            className="w-12 h-12"
          />
        </View>
      </View>
    </ScrollView>
  );
}
