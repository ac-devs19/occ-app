import { Info } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import Icon from "~/components/icon";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Text } from "~/components/ui/text";
import { useAuthContext } from "~/contexts/auth-context";

export default function PersonalInformation() {
  const { user } = useAuthContext();

  function formatDate(date?: string) {
    if (!date) return "Not Provided";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function capitalizeFirstLetter(str: string | undefined) {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View className="p-4">
        <Alert
          icon={Info}
          className="max-w-xl border-primary bg-blue-100/50 rounded-xl"
        >
          <AlertTitle className="font-figtree-medium">Info!</AlertTitle>
          <AlertDescription className="font-figtree-regular">
            Your profile information is shown below. Please contact support if
            you need to make any changes.
          </AlertDescription>
        </Alert>
      </View>
      <View className="flex-row items-center justify-between pl-4 py-2.5">
        <View className="flex-row items-center gap-4">
          <Icon name="User" strokeWidth={1.7} className="text-primary" />
          <View>
            <Text className="font-figtree-regular text-sm">Full Name</Text>
            <Text className="font-figtree-medium">
              {capitalizeFirstLetter(user?.last_name)},{" "}
              {capitalizeFirstLetter(user?.first_name)}{" "}
              {capitalizeFirstLetter(user?.middle_name)}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between pl-4 py-2.5">
        <View className="flex-row items-center gap-4">
          <Icon
            name={
              user?.gender?.toLowerCase() === "male"
                ? "Mars"
                : user?.gender?.toLowerCase() === "female"
                ? "Venus"
                : "Transgender"
            }
            strokeWidth={1.7}
            className="text-primary"
          />
          <View>
            <Text className="font-figtree-regular text-sm">Gender</Text>
            <Text className="font-figtree-medium">
              {user?.gender ?? "Not Provided"}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between pl-4 py-2.5">
        <View className="flex-row items-center gap-4">
          <Icon
            name="CalendarDays"
            strokeWidth={1.7}
            className="text-primary"
          />
          <View>
            <Text className="font-figtree-regular text-sm">Birth Date</Text>
            <Text className="font-figtree-medium">
              {formatDate(user?.birthday)}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between pl-4 py-2.5">
        <View className="flex-row items-center gap-4">
          <Icon name="Mail" strokeWidth={1.7} className="text-primary" />
          <View>
            <Text className="font-figtree-regular text-sm">Email Address</Text>
            <Text className="font-figtree-medium">{user?.email}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between pl-4 py-2.5">
        <View className="flex-row items-center gap-4">
          <Icon name="Phone" strokeWidth={1.7} className="text-primary" />
          <View>
            <Text className="font-figtree-regular text-sm">Contact Number</Text>
            <Text className="font-figtree-medium">{user?.contact_number}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
