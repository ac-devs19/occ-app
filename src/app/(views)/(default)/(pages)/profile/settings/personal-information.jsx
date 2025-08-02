import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { List, Text } from "react-native-paper";
import { useAuthContext } from "../../../../../../contexts/auth-context";

export default function PersonalInformation() {
  const { user } = useAuthContext();
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
          title={
            <Text
              style={{
                fontFamily: "Figtree-Regular",
                fontSize: 12,
              }}
            >
              Full Name
            </Text>
          }
          description={(props) => (
            <Text
              {...props}
              style={{
                fontFamily: "Figtree-Medium",
                fontSize: 14,
              }}
            >
              {user.user_information.last_name},{" "}
              {user.user_information.first_name}{" "}
              {user.user_information.middle_name ?? "Not Provided"}
            </Text>
          )}
        />
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="transgender-outline" size={24} />
          )}
          title={
            <Text
              style={{
                fontFamily: "Figtree-Regular",
                fontSize: 12,
              }}
            >
              Gender
            </Text>
          }
          description={(props) => (
            <Text
              {...props}
              style={{
                fontFamily: "Figtree-Medium",
                fontSize: 14,
              }}
            >
              {user.user_information.gender ?? "Not Provided"}
            </Text>
          )}
        />
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="calendar-outline" size={24} />
          )}
          title={
            <Text
              style={{
                fontFamily: "Figtree-Regular",
                fontSize: 12,
              }}
            >
              Birth Date
            </Text>
          }
          description={(props) => (
            <Text
              {...props}
              style={{
                fontFamily: "Figtree-Medium",
                fontSize: 14,
              }}
            >
              {user.user_information.birthday ?? "Not Provided"}
            </Text>
          )}
        />
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="mail-outline" size={24} />
          )}
          title={
            <Text
              style={{
                fontFamily: "Figtree-Regular",
                fontSize: 12,
              }}
            >
              Email Address
            </Text>
          }
          description={(props) => (
            <Text
              {...props}
              style={{
                fontFamily: "Figtree-Medium",
                fontSize: 14,
              }}
            >
              {user.email ?? "Not Provided"}
            </Text>
          )}
        />
        <List.Item
          left={(props) => (
            <Ionicons {...props} name="call-outline" size={24} />
          )}
          title={
            <Text
              style={{
                fontFamily: "Figtree-Regular",
                fontSize: 12,
              }}
            >
              Contact Number
            </Text>
          }
          description={(props) => (
            <Text
              {...props}
              style={{
                fontFamily: "Figtree-Medium",
                fontSize: 14,
              }}
            >
              {user.user_information.contact_number ?? "Not Provided"}
            </Text>
          )}
        />
      </List.Section>
    </ScrollView>
  );
}
