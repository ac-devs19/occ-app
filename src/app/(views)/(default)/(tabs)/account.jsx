import { ScrollView, View } from "react-native";
import User from "../../../../components/user";
import { List, Text, useTheme } from "react-native-paper";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuthContext } from "../../../../contexts/auth-context";

export default function Account() {
  const { logout } = useAuthContext();
  const theme = useTheme();

  const items = [
    {
      title: "Settings",
      icon: "settings-outline",
      href: "/profile/setting",
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
          title={
            <Text
              style={{
                fontFamily: "Figtree-Medium",
                fontSize: 14,
              }}
            >
              {item.title}
            </Text>
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
      <List.Item
        onPress={logout}
        title={
          <Text
            style={{
              fontFamily: "Figtree-Medium",
              fontSize: 14,
            }}
          >
            Logout
          </Text>
        }
        left={(props) => (
          <Ionicons {...props} size={24} name="log-out-outline" />
        )}
        right={(props) => (
          <Ionicons
            {...props}
            size={20}
            color={theme.colors.primary}
            name="chevron-forward-outline"
          />
        )}
      />
    </ScrollView>
  );
}
