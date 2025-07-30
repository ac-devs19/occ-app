import { Eye, EyeOff } from "lucide-react-native";
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
            icon={(props) =>
              show ? <Eye {...props} /> : <EyeOff {...props} />
            }
            onPress={() => setShow(!show)}
          />
        ) : null
      }
    />
  );
}
