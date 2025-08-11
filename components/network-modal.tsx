import LottieView from "lottie-react-native";
import { View } from "react-native";
import { AlertDialog, AlertDialogContent } from "~/components/ui/alert-dialog";
import { Text } from "~/components/ui/text";

interface LoadingScreenProps {
  open: boolean;
}

export default function NetworkModal({ open }: LoadingScreenProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="h-full w-full">
        <View className="flex-1 items-center justify-center gap-4">
          <LottieView
            style={{
              width: 150,
              height: 150,
            }}
            source={require("~/assets/animations/no-internet-connection.json")}
            autoPlay
            loop
          />
          <View className="items-center gap-2 px-4">
            <Text className="font-figtree-bold text-xl text-center text-slate-800">
              No Internet Connection
            </Text>
            <Text className="font-figtree-regular text-center text-sm text-muted-foreground">
              Something went wrong with your network connection. Please check
              your internet and try again.
            </Text>
          </View>
        </View>
      </AlertDialogContent>
    </AlertDialog>
  );
}
