import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";
import ReactNativeModal from "react-native-modal";

export default function Index() {
  const [visible, setVisible] = useState(false)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Button title="Open model" onPress={() => setVisible(true)} />

      <ReactNativeModal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        animationIn={"bounceInDown"}
        style={{ justifyContent: "flex-start", borderRadius: 100 }}
      >
        <View style={{ backgroundColor: "white", height: 200, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>hello worlds</Text>
        </View>
        {/* <Button title="Open model"  /> */}

      </ReactNativeModal>

    </View>
  );
}
