import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image } from "react-native"
import * as ImagePicker from "expo-image-picker"

import Button from "../components/Button"
import ImageViewer from "../components/ImageViewer"
import IconButton from "../components/IconButton"
import CircleButton from "../components/CircleButton"
import WizardBar from "../components/WizardBar"
import HajjLogo from "../components/HajjLogo"

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10
        }}
      >
        <HajjLogo />
        <View style={{ display: "flex" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Hajj</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Companion</Text>
        </View>
      </View>

      <View style={styles.circle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "##fff",
    alignItems: "left"
  },
  circle: {
    position: "absolute",
    left: -200,
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
