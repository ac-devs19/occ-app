import { Button as Btn } from "react-native-paper";

export default function Button({ mode = "contained", title = "", ...rest }) {
  return (
    <Btn
      mode={mode}
      contentStyle={{ height: 50 }}
      uppercase
      theme={{
        roundness: 2,
      }}
      {...rest}
    >
      {title}
    </Btn>
  );
}
