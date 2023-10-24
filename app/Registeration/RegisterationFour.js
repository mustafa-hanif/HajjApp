import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native"
import * as ImagePicker from "expo-image-picker"

import { AntDesign } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function RegisterationFour() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 17 }}
        source={require("../../assets/topBarThree.png")}
      />
      <View style={{ alignSelf: "center", marginTop: 100 }}>
        <Image source={require("../../assets/verify.png")} />
      </View>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          color: "#094225",
          fontSize: 33,
          textAlign: "center"
        }}
      >
        Your mobile
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          color: "#094225",
          fontSize: 33,
          textAlign: "center"
        }}
      >
        number
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          color: "#094225",
          fontSize: 33,
          textAlign: "center"
        }}
      >
        is verified.
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          router.push("Registeration/RegisterationFive")
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
          backgroundColor: "#037020",
          width: "40%",
          padding: 6,
          borderRadius: 6
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Continue</Text>
        <AntDesign name="arrowright" size={28} color="white" />
      </TouchableOpacity>
      <View style={{ position: "absolute", bottom: 20, left: 25 }}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../assets/questionLogo.png")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flex: 1,
    marginTop: 50,
    backgroundColor: "#F7FBEF",
    alignItems: "left"
  },
  circle: {
    position: "absolute",
    left: -168,
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
