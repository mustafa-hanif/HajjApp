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
export default function CnicOne() {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [three, setThree] = useState(0)
  const [four, setFour] = useState(0)
  const router = useRouter()

  const pickLogo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1
    })
    if (!result.canceled) {
      console.log(result.assets[0].uri)
      // setImage(result.assets[0].uri)
      // setImageError("")
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 17 }}
        source={require("../../../assets/topBarSix.png")}
      />
      <View style={{ marginTop: 100, marginBottom: 2, padding: 10 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>Upload your</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 35, color: "#00AA00", fontWeight: "bold" }}>
            CNIC.
          </Text>
        </View>
      </View>
      <View style={{}}></View>

      <View style={{ position: "absolute", bottom: 20, left: 25 }}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../../assets/questionLogo.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() => router.push("Screens/CNIC/CnicTwo")}
        activeOpacity={0.5}
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
        onPress={() => {
          pickLogo()
        }}
        activeOpacity={0.5}
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
