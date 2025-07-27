import { ScrollView } from "react-native";
import User from "../../../../components/user";
import { List, Text } from "react-native-paper";
import { getPaperTheme } from "../../../../constants/themes/paper-theme";
import { router } from "expo-router";
import { useThemeContext } from "../../../../contexts/theme-context";

export default function Profile() {
  const paperTheme = getPaperTheme();
  const { theme, isDark } = useThemeContext();

  const items = [
    {
      title: "Account Settings",
      icon: "cog",
      href: "/",
    },
    {
      title: "Dark Mode",
      icon: "theme-light-dark",
      description:
        theme === "dark"
          ? "On"
          : theme === "light"
            ? "Off"
            : isDark
              ? "System (Dark)"
              : "System (Light)",
      href: "/profile/dark-mode",
    },
    {
      title: "Logout",
      icon: "logout",
      href: "/",
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <User />
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
          left={(props) => <List.Icon {...props} icon={item.icon} />}
          right={(props) => (
            <List.Icon
              {...props}
              color={paperTheme.colors.primary}
              icon="chevron-right"
            />
          )}
        />
      ))}
    </ScrollView>
  );
}
