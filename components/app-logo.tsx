import { Image } from "react-native";

export default function AppLogo() {
  return (
    <Image
      resizeMode="contain"
      source={require("../assets/images/occ-logo.png")}
      className="h-16 w-40"
    />
  );
}
