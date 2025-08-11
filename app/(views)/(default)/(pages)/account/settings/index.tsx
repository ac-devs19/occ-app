import { Route, router } from "expo-router";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Icon, { LucideIconName } from "~/components/icon";
import { Text } from "~/components/ui/text";

const items: {
  title: string;
  subitems: {
    subtitle: string;
    icon: LucideIconName;
    href: Route;
  }[];
}[] = [
  {
    title: "Privacy and Security",
    subitems: [
      {
        subtitle: "Personal Information",
        icon: "CircleUser",
        href: "/account/settings/personal-information",
      },
      {
        subtitle: "Change Password",
        icon: "Lock",
        href: "/account/settings/change-password",
      },
    ],
  },
];

export default function Setting() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        gap: 16,
      }}
    >
      {items.map((item, itemIndex) => (
        <View key={itemIndex}>
          <Text className="font-figtree-regular p-4">{item.title}</Text>
          <View className="gap-2">
            {item.subitems.map((subitem, subitemIndex) => (
              <TouchableOpacity
                key={subitemIndex}
                onPress={() => router.push(subitem.href)}
                activeOpacity={0.7}
                className="flex-row items-center justify-between pl-4 pr-6 py-2.5"
              >
                <View className="flex-row items-center gap-4">
                  <Icon
                    name={subitem.icon}
                    strokeWidth={1.7}
                    className="text-primary"
                  />
                  <Text className="font-figtree-medium">
                    {subitem.subtitle}
                  </Text>
                </View>
                <Icon
                  name="ChevronRight"
                  strokeWidth={2}
                  size={20}
                  className="text-primary"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
