import { Tabs } from "expo-router";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
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
          headerTitle: () => <Text variant="titleLarge">Profile</Text>,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text variant="labelSmall" style={{ color }}>
              Profile
            </Text>
          ),
        }}
        name="profile"
      />
    </Tabs>
  );
}
