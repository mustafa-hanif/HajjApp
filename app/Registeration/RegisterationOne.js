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
import { useRouter } from "expo-router/src/hooks"

export default function RegisterationOne() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 17 }}
        source={require("../../assets/topBarOne.png")}
      />
      <View style={{ marginTop: 100, marginBottom: 10, padding: 10 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>What is</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Your </Text>
          <Text style={{ fontSize: 35, color: "#00AA00", fontWeight: "bold" }}>
            Name?
          </Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{
            fontSize: 14,
            width: "100%",
            backgroundColor: "#D3FDE8",
            height: 50,
            fontStyle: "italic",
            padding: 10,
            borderRadius: 6,
            borderWidth: 2,
            borderColor: "green",
            borderStyle: "solid"
          }}
          placeholder="Enter your name"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          router.push("Registeration/RegisterationTwo")
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
