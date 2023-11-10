import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { useNavigation } from "expo-router"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native"
import * as ImagePicker from "expo-image-picker"

import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function Flight_Tickets() {
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack()
  }

  const router = useRouter()
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 30,
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
      </View>
      <Text style={{ margin: 7, fontSize: 30, fontWeight: "bold" }}>
        Flight Tickets
      </Text>
      <ImageBackground
        style={{
          alignSelf: "center",
          height: 390,
          width: 335,
          padding: 20
        }}
        source={require("../../../assets/Subtract.png")}
      >
        <View style={{ display: "flex", gap: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View style={{ display: "flex" }}>
              <Text style={{ color: "#B9B9B9" }}>Ticket Number</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>BA5610</Text>
            </View>
            <Image source={require("../../../assets/PIA.png")} />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>KHI</Text>
              <Text style={{ color: "#B9B9B9" }}>karachi,PK</Text>
            </View>

            <Image source={require("../../../assets/plane.png")} />

            <View style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>JED</Text>
              <Text style={{ color: "#B9B9B9" }}>jeddah,KSA</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View style={{ display: "flex" }}>
              <Text style={{ color: "#B9B9B9" }}>Time</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>10:15 AM</Text>
            </View>
            <View style={{ display: "flex" }}>
              <Text style={{ color: "#B9B9B9" }}>Gate</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>4</Text>
            </View>
            <View style={{ display: "flex" }}>
              <Text style={{ color: "#B9B9B9" }}>Terminal</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>1</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 57
              // justifyContent: "space-between"
            }}
          >
            <View style={{ display: "flex" }}>
              <Text style={{ color: "#B9B9B9" }}>Date</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                25/06/2024
              </Text>
            </View>
            <View style={{ display: "flex" }}>
              <Text style={{ color: "#B9B9B9" }}>Checkin</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>A40</Text>
            </View>
            <View style={{ display: "flex" }}>
              <Text style={{ color: "#B9B9B9" }}>Seat</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>F1</Text>
            </View>
          </View>
        </View>
        <Image
          style={{
            height: 50,
            alignSelf: "center",
            width: "90%",
            position: "relative",
            top: 80
          }}
          source={require("../../../assets/barCode.png")}
        />
      </ImageBackground>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          router.push("Registeration/RegisterationFive")
        }}
        style={{
          elevation: 7,
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
          padding: 8,
          borderRadius: 6
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Download</Text>
        <MaterialIcons name="file-download" size={28} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 23,
    flex: 1,
    marginTop: 50,
    backgroundColor: "#F7FBEF",
    alignItems: "left"
  }
})
