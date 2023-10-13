import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, TextInput } from "react-native"
import * as ImagePicker from "expo-image-picker"

import { AntDesign } from "@expo/vector-icons"

export default function Documents() {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [three, setThree] = useState(0)
  const [four, setFour] = useState(0)
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 343, height: 17 }}
        source={require("../assets/topBar.png")}
      />
      <View style={{ marginTop: 60, marginBottom: 2, padding: 10 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Please upload the
          </Text>
          <Text style={{ fontSize: 25, color: "#00AA00", fontWeight: "bold" }}>
            {" "}
            required
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 25, color: "#00AA00", fontWeight: "bold" }}>
            documents
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}> to complete</Text>
        </View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          {" "}
          your registeration.
        </Text>
      </View>
      <View>
        <Text style={{ color: "#369A4C", fontSize: 15, padding: 10 }}>
          You can take a photo of the document or upload it from your device.
        </Text>
      </View>
      <View style={{ display: "flex", gap: 10, padding: 13 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            display: "flex",
            gap: 10
          }}
        >
          <Image
            style={{ height: 150, width: 150 }}
            source={require("../assets/PassportD.png")}
          />
          <Image
            style={{ height: 150, width: 150 }}
            source={require("../assets/cnicD.png")}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            display: "flex",
            gap: 10
          }}
        >
          <Image
            style={{ height: 150, width: 150 }}
            source={require("../assets/VaccineD.png")}
          />
          <Image
            style={{ height: 150, width: 150 }}
            source={require("../assets/UserImageD.png")}
          />
        </View>
      </View>

      {/* <View
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
      </View> */}
      <View style={{ position: "absolute", bottom: 20, left: 25 }}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../assets/questionLogo.png")}
        />
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
