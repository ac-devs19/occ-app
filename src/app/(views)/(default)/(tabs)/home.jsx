import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLogo from "../../../../components/app-logo";
import { IconButton, Text } from "react-native-paper";
import { getPaperTheme } from "../../../../constants/themes/paper-theme";
import User from "../../../../components/user";
import { Ionicons } from "@expo/vector-icons";

const items = [
  {
    title: "Classes",
    icon: "easel-outline",
  },
  {
    title: "Enrollment Record",
    icon: "library-outline",
  },
];

const padding = 16;
const screenWidth = Dimensions.get("window").width;
const availableWidth = screenWidth - padding * 2;
const itemWidth = availableWidth / 4;

export default function Home() {
  const paperTheme = getPaperTheme();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-8">
          <View className="flex-row items-center justify-between p-4">
            <AppLogo />
            <IconButton icon="bell" iconColor={paperTheme.colors.primary} />
          </View>
          <User />
          <View style={{ padding: padding }}>
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
                    size={50}
                    mode="contained-tonal"
                    icon={() => (
                      <Ionicons
                        name={item.icon}
                        size={40}
                        color={paperTheme.colors.primary}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
