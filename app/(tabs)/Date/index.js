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

import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function Chat() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text>Date</Text>
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
