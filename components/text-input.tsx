import { useState } from "react";
import { TextInputProps, View } from "react-native";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import Icon from "~/components/icon";

interface CustomTextInputProps extends TextInputProps {
  label?: string;
}

export default function TextInput({
  secureTextEntry,
  label,
  ...props
}: CustomTextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = Boolean(secureTextEntry);

  return (
    <View className="gap-1">
      {label && <Label className="font-figtree-medium">{label}</Label>}
      <View className="relative">
        <Input
          secureTextEntry={isPassword ? !showPassword : false}
          className={`native:h-14 rounded-xl font-figtree-regular focus:border-primary ${
            isPassword && "pr-12"
          }`}
          {...props}
        />
        {isPassword && (
          <View className="absolute inset-y-0 right-2 justify-center">
            <Button
              onPress={() => setShowPassword(!showPassword)}
              variant="ghost"
              size="icon"
              className="rounded-xl"
            >
              <Icon
                name={showPassword ? "Eye" : "EyeOff"}
                strokeWidth={1.3}
                className="text-slate-600"
              />
            </Button>
          </View>
        )}
      </View>
    </View>
  );
}
