import { Button as Btn, ButtonProps } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

interface CustomButtonProps extends ButtonProps {
  title: string;
}

export default function Button({ title, ...props }: CustomButtonProps) {
  return (
    <Btn className="native:h-14 rounded-xl" {...props}>
      <Text className="font-figtree-semibold uppercase">{title}</Text>
    </Btn>
  );
}
