import { ScrollView } from "react-native";
import { List, Text, useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useThemeContext } from "../../../../../contexts/theme-context";
import { router } from "expo-router";

export default function Setting() {
  const { theme, isDark } = useThemeContext();
  const isTheme = useTheme();

  const items = [
    {
      title: "Privacy and Security",
      subitems: [
        {
          subtitle: "Personal Information",
          icon: "person-outline",
          href: "/",
        },
        {
          subtitle: "Change Password",
          icon: "key-outline",
          href: "/",
        },
      ],
    },
    {
      title: "Appearance",
      subitems: [
        {
          subtitle: "Dark Mode",
          description:
            theme === "dark"
              ? "On"
              : theme === "light"
                ? "Off"
                : isDark
                  ? "System (Dark)"
                  : "System (Light)",
          icon: "moon-outline",
          href: "/profile/settings/dark-mode",
        },
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {items.map((item, index) => (
        <List.Section key={index}>
          <List.Subheader>{item.title}</List.Subheader>
          {item.subitems.map((subitem, subindex) => (
            <List.Item
              onPress={() => router.push(subitem.href)}
              key={subindex}
              title={<Text variant="labelLarge">{subitem.subtitle}</Text>}
              description={
                subitem.description ? (
                  <Text variant="labelMedium">{subitem.description}</Text>
                ) : null
              }
              left={(props) => (
                <Ionicons {...props} size={24} name={subitem.icon} />
              )}
              right={(props) => (
                <Ionicons
                  {...props}
                  size={20}
                  color={isTheme.colors.primary}
                  name="chevron-forward-outline"
                />
              )}
            />
          ))}
        </List.Section>
      ))}
    </ScrollView>
  );
}
