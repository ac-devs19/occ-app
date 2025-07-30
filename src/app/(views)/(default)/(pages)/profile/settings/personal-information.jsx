import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { List, Text } from "react-native-paper";

export default function PersonalInformation() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <List.Section>
        <List.Subheader numberOfLines={2} ellipsizeMode="tail">
          Your profile information is displayed below. Contact support to make
          changes.
        </List.Subheader>
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="person-outline" size={24} />
          )}
          title={<Text variant="labelSmall">Full Name</Text>}
          description={(props) => (
            <Text {...props} variant="labelLarge">
              Name
            </Text>
          )}
        />
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="transgender-outline" size={24} />
          )}
          title={<Text variant="labelSmall">Gender</Text>}
          description={(props) => (
            <Text {...props} variant="labelLarge">
              Male
            </Text>
          )}
        />
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="calendar-outline" size={24} />
          )}
          title={<Text variant="labelSmall">Birth Date</Text>}
          description={(props) => (
            <Text {...props} variant="labelLarge">
              01/01/2000
            </Text>
          )}
        />
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="mail-outline" size={24} />
          )}
          title={<Text variant="labelSmall">Email Address</Text>}
          description={(props) => (
            <Text {...props} variant="labelLarge">
              example@gmail.com
            </Text>
          )}
        />
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="call-outline" size={24} />
          )}
          title={<Text variant="labelSmall">Contact Number</Text>}
          description={(props) => (
            <Text {...props} variant="labelLarge">
              09123456789
            </Text>
          )}
        />
      </List.Section>
    </ScrollView>
  );
}
