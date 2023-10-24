import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { Camera } from "expo-camera"
import { AntDesign, Entypo } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function VaccineThree() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center", marginTop: 200 }}>
        <Image source={require("../../../assets/verify.png")} />
      </View>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          color: "white",
          fontSize: 33,
          textAlign: "center"
        }}
      >
        Your COVID
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 33,
          textAlign: "center"
        }}
      >
        vaccine
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 33,
          textAlign: "center"
        }}
      >
        certificate is
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 33,
          textAlign: "center"
        }}
      >
        verified
      </Text>
      <View style={{ position: "absolute", bottom: 20, left: 25 }}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../../assets/questionLogo.png")}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          router.push("Documents")
        }}
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
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 50,
    flex: 1,
    backgroundColor: "#003014"
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
