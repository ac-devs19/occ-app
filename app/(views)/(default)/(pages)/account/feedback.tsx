import { ScrollView } from "react-native";
import Button from "~/components/button";
import { Textarea } from "~/components/ui/textarea";

export default function Feedback() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 16,
        justifyContent: "space-between",
      }}
    >
      <Textarea
        placeholder="Your feedback helps us improve. Please share your comments…"
        className="font-figtree-regular focus:border-primary rounded-xl native:h-52"
      />
      <Button title="Submit" />
    </ScrollView>
  );
}
