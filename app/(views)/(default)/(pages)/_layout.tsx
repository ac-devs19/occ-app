import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import Icon from "~/components/icon";

export default function PagesLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => {
          if (router.canGoBack()) {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.back()}
              >
                <Icon name="ChevronLeft" className="text-primary" />
              </TouchableOpacity>
            );
          }
        },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Figtree-SemiBold",
          fontSize: 17,
        },
      }}
    >
      <Stack.Screen
        options={{
          title: "Notifications",
        }}
        name="home/notification"
      />
      <Stack.Screen
        options={{
          title: "Classes",
        }}
        name="home/classes"
      />
      <Stack.Screen
        options={{
          title: "Enrollment Record",
        }}
        name="home/enrollment-record"
      />
      <Stack.Screen
        options={{
          title: "Personal Information",
        }}
        name="account/personal-information"
      />
      <Stack.Screen
        options={{
          title: "Change Password",
        }}
        name="account/change-password"
      />
      <Stack.Screen
        options={{
          title: "Feedback",
        }}
        name="account/feedback"
      />
    </Stack>
  );
}
