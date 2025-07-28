import { Tabs } from "expo-router";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Figtree-Medium",
        },
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
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
