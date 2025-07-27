import { useState } from "react";
import { TextInput as TxtInpt } from "react-native-paper";

export default function TextInput({
  label = "",
  secureTextEntry = false,
  keyboardType = "default",
}) {
  const [show, setShow] = useState(false);

  return (
    <TxtInpt
      mode="outlined"
      label={label}
      outlineStyle={{ borderRadius: 10 }}
      secureTextEntry={secureTextEntry ? !show : false}
      keyboardType={keyboardType}
      right={
        secureTextEntry ? (
          <TxtInpt.Icon
            onPress={() => setShow(!show)}
            icon={show ? "eye" : "eye-off"}
          />
        ) : null
      }
    />
  );
}
