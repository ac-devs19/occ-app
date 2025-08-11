import LottieView from "lottie-react-native";
import { View } from "react-native";
import { AlertDialog, AlertDialogContent } from "~/components/ui/alert-dialog";

interface LoadingScreenProps {
  open: boolean;
}

export default function LoadingScreen({ open }: LoadingScreenProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-transparent border-0 shadow-none">
        <View className="flex-row items-center gap-2">
          <LottieView
            style={{
              width: 150,
              height: 150,
            }}
            source={require("../assets/animations/liquid-4-dot-loader.json")}
            autoPlay
            loop
          />
        </View>
      </AlertDialogContent>
    </AlertDialog>
  );
}
