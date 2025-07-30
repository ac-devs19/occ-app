import { Tabs } from "expo-router";
import { Text } from "react-native-paper";
import { House, User } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Figtree-SemiBold",
          fontSize: 18,
        },
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <House size={size} color={color} />,
          tabBarLabel: ({ color }) => (
            <Text variant="labelSmall" style={{ color }}>
              Home
            </Text>
          ),
        }}
        name="home"
      />
      <Tabs.Screen
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          tabBarLabel: ({ color }) => (
            <Text variant="labelSmall" style={{ color }}>
              Account
            </Text>
          ),
        }}
        name="account"
      />
    </Tabs>
  );
}
