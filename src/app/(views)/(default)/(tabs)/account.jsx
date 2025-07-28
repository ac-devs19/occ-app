import { ScrollView, View } from "react-native";
import User from "../../../../components/user";
import { List, Text, useTheme } from "react-native-paper";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Account() {
  const theme = useTheme();

  const items = [
    {
      title: "Settings",
      icon: "settings-outline",
      href: "/profile/setting",
    },
    {
      title: "Logout",
      icon: "log-out-outline",
      href: "/",
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="p-4">
        <User />
      </View>
      {items.map((item, index) => (
        <List.Item
          onPress={() => router.push(item.href)}
          key={index}
          title={<Text variant="labelLarge">{item.title}</Text>}
          description={
            item.description ? (
              <Text variant="labelMedium">{item.description}</Text>
            ) : null
          }
          left={(props) => <Ionicons {...props} size={24} name={item.icon} />}
          right={(props) => (
            <Ionicons
              {...props}
              size={20}
              color={theme.colors.primary}
              name="chevron-forward-outline"
            />
          )}
        />
      ))}
    </ScrollView>
  );
}
