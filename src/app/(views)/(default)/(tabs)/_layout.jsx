import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native-paper";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Figtree-SemiBold",
          fontSize: 18,
        },
        tabBarStyle: {
          borderColor: "transparent",
          shadowColor: "transparent",
          height: 70,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              variant="labelSmall"
              style={{
                fontFamily: "Figtree-Medium",
                fontSize: 12,
                color: color,
              }}
            >
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
            <AntDesign name="user" size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                fontFamily: "Figtree-Medium",
                fontSize: 12,
                color: color,
              }}
            >
              Account
            </Text>
          ),
        }}
        name="account"
      />
    </Tabs>
  );
}
