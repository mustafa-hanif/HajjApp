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

import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function RegisterationFour() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 40,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4
          }}
        >
          <Image
            style={{ height: 35, width: 35 }}
            source={require("../../../assets/HC_logo.png")}
          />
          <View style={{ display: "flex" }}>
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>My Hajj</Text>
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>Companion</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <Feather name="menu" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>My Profile</Text>
        <Image
          style={{
            height: 40,
            width: 40,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "green"
          }}
          source={require("../../../assets/babar.jpg")}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          router.push("Profile/upcoming_trips")
        }}
        activeOpacity={0.6}
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: 100,
          backgroundColor: "#1BC17E",
          borderRadius: 8,
          elevation: 9
        }}
      >
        <View style={{ display: "flex" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            My Upcoming Trip
          </Text>

          <Text style={{ color: "white" }}>May 25,2024</Text>
        </View>
        <AntDesign name="arrowright" size={38} color="white" />
      </TouchableOpacity>

      <View style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            elevation: 4,
            width: "100%",
            height: 60,
            borderRadius: 6,
            padding: 12,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "500" }}>Passport</Text>
          <Image
            style={{ height: 23, width: 23 }}
            source={require("../../../assets/passport_vector.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            elevation: 4,
            width: "100%",
            height: 60,
            borderRadius: 6,
            padding: 12,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "500" }}>CNIC</Text>
          <Image
            style={{ height: 23, width: 23 }}
            source={require("../../../assets/cnic_vector.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            elevation: 4,
            width: "100%",
            height: 60,
            borderRadius: 6,
            padding: 12,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            Vaccine Certificate
          </Text>
          <Image
            style={{ height: 23, width: 23 }}
            source={require("../../../assets/vaccine_vector.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            elevation: 4,
            width: "100%",
            height: 60,
            borderRadius: 6,
            padding: 12,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            Passport Size Photo
          </Text>
          <Image
            style={{ height: 23, width: 23 }}
            source={require("../../../assets/user_image_vector.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",

    width: "100%",
    padding: 23,
    flex: 1,
    marginTop: 50,
    backgroundColor: "#F7FBEF",
    alignItems: "left"
  }
})
