import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useRouter } from "expo-router"

import Button from "../components/Button"
import ImageViewer from "../components/ImageViewer"
import IconButton from "../components/IconButton"
import CircleButton from "../components/CircleButton"
import WizardBar from "../components/WizardBar"
import HajjLogo from "../components/HajjLogo"
import { AntDesign } from "@expo/vector-icons"

export default function Welcome() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 15,
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10
        }}
      >
        <HajjLogo />
        <View style={{ display: "flex" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Hajj</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Companion</Text>
        </View>
      </View>
      <View style={{ margin: 50 }}></View>
      {/* <View> */}
      <View
        style={{
          width: "100%",
          position: "absolute",
          top: 300,
          zIndex: 10
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 35,
            color: "white"
          }}
        >
          Welcome!
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 35,
            color: "white"
          }}
        >
          Your Hajj Journey
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 35,
            color: "white"
          }}
        >
          Made Easy
        </Text>

        <Text
          style={{
            marginTop: 30,
            textAlign: "center",
            fontSize: 15,
            color: "white"
          }}
        >
          This will be your new guide,
        </Text>
        <Text
          style={{
            marginTop: 5,
            textAlign: "center",
            fontSize: 15,
            color: "white"
          }}
        >
          designed to assist you with
        </Text>
        <Text
          style={{
            marginTop: 5,
            textAlign: "center",
            fontSize: 15,
            color: "white"
          }}
        >
          everything you need to complete a
        </Text>
        <Text
          style={{
            marginTop: 5,
            textAlign: "center",
            fontSize: 15,
            color: "white"
          }}
        >
          successful Hajj.
        </Text>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            router.push("Registeration/RegisterationOne")
          }}
          style={{
            marginTop: 40,
            alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            justifyContent: "center",
            backgroundColor: "#037020",
            width: "50%",
            paddingVertical: 10,
            paddingHorizontal: 19,
            borderRadius: 6
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Let's get started
          </Text>
          <AntDesign name="arrowright" size={28} color="white" />
        </TouchableOpacity>
      </View>
      {/* <Image
        style={{ width: "100%" }}
        source={require("../assets/greenBG.png")}
      /> */}
      {/* </View> */}
      <View style={styles.circle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "##fff",
    alignItems: "left"
  },
  circle: {
    position: "absolute",
    left: -200,
    bottom: -300,
    width: 762,
    height: 757,
    borderRadius: 378.5,
    backgroundColor: "#003014",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -3,
      height: -4
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 1.0)"
  }
})
