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

import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function VaccineOne() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 17 }}
        source={require("../../../assets/topBarSeven.png")}
      />
      <View style={{ marginTop: 100, marginBottom: 2, padding: 10 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>Upload your</Text>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>COVID vaccine</Text>
        <Text style={{ fontSize: 35, color: "#00AA00", fontWeight: "bold" }}>
          certificate.
        </Text>
      </View>
      <View style={{}}></View>

      <View style={{ position: "absolute", bottom: 20, left: 25 }}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../../assets/questionLogo.png")}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          router.push("Screens/CovidVaccine/VaccineTwo")
        }}
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 7,
          elevation: 6,
          margin: 10,
          backgroundColor: "#41EB87",
          width: "95%",
          height: "10%"
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
          Take photo
        </Text>
        <Entypo name="camera" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 7,
          elevation: 6,
          margin: 10,
          backgroundColor: "white",
          width: "95%",
          height: "10%"
        }}
      >
        <Text style={{ color: "green", fontSize: 18, fontWeight: "500" }}>
          Upload from device
        </Text>
        <MaterialCommunityIcons name="upload" size={28} color="green" />
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
