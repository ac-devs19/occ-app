import { Dimensions, Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLogo from "../../../../components/app-logo";
import { IconButton, Text, useTheme } from "react-native-paper";
import User from "../../../../components/user";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const items = [
  {
    title: "Classes",
    icon: "easel-outline",
    href: "/home/classes",
  },
  {
    title: "Enrollment Record",
    icon: "library-outline",
    href: "/home/enrollment-record",
  },
];

const padding = 16;
const screenWidth = Dimensions.get("window").width;
const availableWidth = screenWidth - padding * 2;
const itemWidth = availableWidth / 4;

export default function Home() {
  const theme = useTheme();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-4 gap-8">
          <View className="flex-row items-center justify-between">
            <AppLogo />
            <IconButton
              onPress={() => router.push("/home/notification")}
              icon={(props) => (
                <Ionicons
                  {...props}
                  name="notifications-outline"
                  color={theme.colors.primary}
                />
              )}
            />
          </View>
          <User />
        </View>
        <Image
          className="w-full h-40"
          resizeMode="contain"
          source={require("../../../../assets/images/logo-banner.png")}
        />
        <View className="p-4">
          <View className="flex-row flex-wrap">
            {items.map((item, index) => (
              <View
                className="items-center"
                key={index}
                style={{
                  width: itemWidth,
                  marginBottom: 8,
                }}
              >
                <IconButton
                  onPress={() => router.push(item.href)}
                  size={50}
                  mode="contained-tonal"
                  icon={() => (
                    <Ionicons
                      name={item.icon}
                      size={35}
                      color={theme.colors.primary}
                    />
                  )}
                />
                <Text variant="labelMedium" style={{ textAlign: "center" }}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
