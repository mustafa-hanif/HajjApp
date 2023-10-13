import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { Camera } from "expo-camera"
import { AntDesign, Entypo } from "@expo/vector-icons"

export default function CnicTwo() {
  const [hasPermission, setHasPermission] = useState(null)
  const [camera, setCamera] = useState(null)
  const [capturedImage, setCapturedImage] = useState(null)
  const [imageClicked, setImageClicked] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync()
      setCapturedImage(photo.uri) // Store the captured image URI
      setImageClicked(true)
    }
  }

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      {!imageClicked && (
        <View style={{ marginTop: 100, padding: 10 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "white",
              fontWeight: "bold"
            }}
          >
            Point the camera
          </Text>

          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "white",
              fontWeight: "bold"
            }}
          >
            towards the CNIC
          </Text>
        </View>
      )}
      {imageClicked && (
        <View style={{ marginTop: 100, padding: 10, alignSelf: "center" }}>
          <Image source={require("../../assets/check.png")} />
        </View>
      )}
      <View
        style={[
          styles.cameraContainer,
          {
            borderColor: imageClicked ? "#3AF396" : "white",
            borderStyle: imageClicked ? "solid" : "dashed"
          }
        ]}
      >
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ref={(ref) => setCamera(ref)}
        >
          {capturedImage ? (
            <Image
              style={styles.capturedImage}
              source={{ uri: capturedImage }}
            />
          ) : null}
          <View style={styles.captureContainer}></View>
        </Camera>
      </View>
      {!imageClicked && (
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Entypo name="camera" size={35} color="white" />
        </TouchableOpacity>
      )}
      <View style={{ position: "absolute", bottom: 20, left: 25 }}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../assets/questionLogo.png")}
        />
      </View>
      {imageClicked && (
        <View
          style={{
            position: "absolute",
            bottom: 30,
            right: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            justifyContent: "center",
            backgroundColor: "white",
            width: "40%",
            padding: 6,
            borderRadius: 6
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#037020" }}>Continue</Text>
          <AntDesign name="arrowright" size={28} color="#037020" />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#003014" // Dark green background color
  },
  cameraContainer: {
    borderRadius: 2,
    borderWidth: 3,
    // borderColor: imageClicked ? "white" : "green",
    borderStyle: "dashed",
    alignSelf: "center",
    position: "absolute",
    top: 250,
    height: "32%",
    width: "80%"
  },
  camera: {
    height: "100%",
    width: "100%"
    // alignSelf: "center",
    // marginTop: 30,
    // height: "35%",
    // width: "70%",
    // position: "relative"
  },
  capturedImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  captureContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 20
  },
  captureButton: {
    backgroundColor: "#3AF396",
    padding: 16,
    borderRadius: 40,
    position: "absolute",
    bottom: 40,
    alignSelf: "center"
  },
  captureButtonText: {
    fontSize: 18,
    color: "black"
  }
})
