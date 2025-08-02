import { Image, View } from "react-native";
import { Modal, Portal, Text, useTheme } from "react-native-paper";

export default function NetworkModal({ visible = false }) {
  const theme = useTheme();

  return (
    <Portal>
      <Modal
        visible={visible}
        style={{
          backgroundColor: theme.colors.background,
        }}
        contentContainerStyle={{
          shadowColor: "transparent",
          alignItems: "center",
          gap: 40,
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/images/disconnect.png")}
          className="w-20 h-20"
        />
        <View
          style={{
            marginHorizontal: 28,
          }}
          className="gap-2 items-center"
        >
          <Text
            style={{
              fontFamily: "Figtree-Bold",
              fontSize: 18,
              color: theme.colors.onSurface,
            }}
          >
            No Internet Connection
          </Text>
          <Text
            style={{
              fontFamily: "Figtree-Medium",
              fontSize: 14,
              textAlign: "center",
              color: theme.colors.onSurface,
            }}
          >
            Something went wrong with your network connection. Please check your
            internet and try again.
          </Text>
        </View>
      </Modal>
    </Portal>
  );
}
