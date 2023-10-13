import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, TextInput } from "react-native"
import * as ImagePicker from "expo-image-picker"

import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons"

export default function UserImageOne() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 343, height: 17 }}
        source={require("../../assets/topBar.png")}
      />
      <View style={{ marginTop: 100, marginBottom: 2, padding: 10 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Upload a</Text>
          <Text style={{ fontSize: 35, color: "#00AA00", fontWeight: "bold" }}>
            {" "}
            passport
          </Text>
        </View>

        <Text style={{ fontSize: 35, color: "#00AA00", fontWeight: "bold" }}>
          size picture.
        </Text>
      </View>
      <View style={{}}></View>

      <View style={{ position: "absolute", bottom: 20, left: 25 }}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../assets/questionLogo.png")}
        />
      </View>
      <View
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
      </View>
      <View
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
