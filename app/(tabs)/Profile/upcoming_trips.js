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
import { useNavigation } from "expo-router"

import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function UpcomingTrips() {
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack()
  }

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
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            handleGoBack()
          }}
        >
          <Ionicons name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Feather name="menu" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>My Upcoming Trip</Text>
      <View
        style={{
          marginTop: 16,
          marginBottom: 10,
          borderBottomColor: "#1DB12D",
          borderBottomWidth: 0.4
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Karachi</Text>

        <FontAwesome name="long-arrow-right" size={50} color="green" />
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Jeddah</Text>
      </View>
      <View style={{ display: "flex", gap: 4 }}>
        <Text style={{ fontSize: 14 }}>May 25,2024</Text>
        <Text style={{ fontSize: 14 }}>10:15 AM</Text>
      </View>

      <View style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => {
            router.push("Profile/Flight_Tickets")
          }}
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
            Flight Tickets
          </Text>
          <Image
            style={{ height: 26, width: 30 }}
            source={require("../../../assets/plane_black.png")}
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
          <Text style={{ fontSize: 17, fontWeight: "500" }}>Travel Visa</Text>
          <Image
            style={{ height: 26, width: 30 }}
            source={require("../../../assets/visa.png")}
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
          <Text style={{ fontSize: 17, fontWeight: "500" }}>Hotel Booking</Text>
          <Image
            style={{ height: 26, width: 30 }}
            source={require("../../../assets/hotel.png")}
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
