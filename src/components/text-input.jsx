import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput as TxtInpt } from "react-native-paper";

export default function TextInput({
  label = "",
  secureTextEntry = false,
  keyboardType = "default",
  ...rest
}) {
  const [show, setShow] = useState(false);

  return (
    <TxtInpt
      mode="outlined"
      label={label}
      outlineStyle={{ borderRadius: 10 }}
      secureTextEntry={secureTextEntry ? !show : false}
      keyboardType={keyboardType}
      {...rest}
      right={
        secureTextEntry ? (
          <TxtInpt.Icon
            icon={(props) => (
              <Ionicons
                {...props}
                name={show ? "eye-outline" : "eye-off-outline"}
              />
            )}
            onPress={() => setShow(!show)}
          />
        ) : null
      }
    />
  );
}
