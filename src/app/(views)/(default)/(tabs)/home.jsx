import { Dimensions, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLogo from "../../../../components/app-logo";
import { IconButton } from "react-native-paper";
import { getPaperTheme } from "../../../../constants/themes/paper-theme";

const padding = 16;
const screenWidth = Dimensions.get("window").width;
const availableWidth = screenWidth - padding * 2;
const itemWidth = availableWidth / 4;

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding }}>
        <View className="gap-8">
          <View className="flex-row items-center justify-between">
            <AppLogo />
            <IconButton
              icon="bell"
              iconColor={getPaperTheme().colors.primary}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
