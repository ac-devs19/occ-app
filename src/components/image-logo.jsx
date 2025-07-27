import { Image } from "react-native";

export default function ImageLogo({ className = "" }) {
  return (
    <Image
      source={require("../assets/images/occ-logo.png")}
      resizeMode="contain"
      className={className}
    />
  );
}
