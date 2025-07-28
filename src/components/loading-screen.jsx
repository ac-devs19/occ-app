import { ActivityIndicator, Modal, Portal } from "react-native-paper";

export default function LoadingScreen({ visible = false }) {
  return (
    <Portal>
      <Modal visible={visible}>
        <ActivityIndicator size={30} />
      </Modal>
    </Portal>
  );
}
