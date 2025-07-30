import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Figtree-Medium",
          fontSize: 18,
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
        name="profile/setting"
      />
      <Stack.Screen
        options={{
          title: "Personal Information",
        }}
        name="profile/settings/personal-information"
      />
      <Stack.Screen
        options={{
          title: "Change Password",
        }}
        name="profile/settings/change-password"
      />
      <Stack.Screen
        options={{
          title: "Dark Mode",
        }}
        name="profile/settings/dark-mode"
      />
    </Stack>
  );
}
