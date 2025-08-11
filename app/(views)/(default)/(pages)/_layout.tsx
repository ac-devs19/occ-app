import { Stack } from "expo-router";

export default function PagesLayout() {
  return (
    <Stack
      screenOptions={{
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
          title: "Settings",
        }}
        name="account/settings/index"
      />
      <Stack.Screen
        options={{
          title: "Personal Information",
        }}
        name="account/settings/personal-information"
      />
      <Stack.Screen
        options={{
          title: "Change Password",
        }}
        name="account/settings/change-password"
      />
    </Stack>
  );
}
