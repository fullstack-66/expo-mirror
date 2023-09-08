import { View, Button, SafeAreaView } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
export default function App() {
  const [open, setOpen] = useState(false);
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();

  // Camera is still loading
  if (!cameraPermission) return <View />;

  // Ask for permission
  if (!cameraPermission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          onPress={requestCameraPermission}
          title="We need your permission."
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 40 }}>
      <Button onPress={() => setOpen((prev) => !prev)} title="Toggle" />
      {open ? (
        <Camera
          style={{ flex: 1 }}
          type={CameraType.front}
          onCameraReady={() => setOpen(true)}
        />
      ) : null}
    </SafeAreaView>
  );
}
