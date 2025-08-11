import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import Icon from "~/components/icon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Figtree-SemiBold",
          fontSize: 17,
          textTransform: "capitalize",
        },
        tabBarStyle: {
          backgroundColor: "#EFF6FF80",
          borderColor: "transparent",
          shadowColor: "transparent",
        },
        tabBarLabelStyle: {
          fontFamily: "Figtree-Medium",
          fontSize: 11,
          textTransform: "capitalize",
        },
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="House" color={color} size={size} />
          ),
        }}
        name="home"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="User" color={color} size={size} />
          ),
          headerBackground: () => (
            <View className="flex-1 items-end">
              <Image
                resizeMode="contain"
                source={require("../../../../assets/images/background-styles/geometric-border.png")}
                className="w-32 h-32"
              />
            </View>
          ),
        }}
        name="account"
      />
    </Tabs>
  );
}
