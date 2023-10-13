import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image } from "react-native"
import * as ImagePicker from "expo-image-picker"

import Button from "./components/Button"
import ImageViewer from "./components/ImageViewer"
import IconButton from "./components/IconButton"
import CircleButton from "./components/CircleButton"
import WizardBar from "./components/WizardBar"
import HajjLogo from "./components/HajjLogo"
import Welcome from "./Screens/Welcome"
import PassportTwo from "./Screens/Passport/PassportTwo"
import CnicTwo from "./Screens/CNIC/CnicTwo"
import VaccineTwo from "./Screens/CovidVaccine/VaccineTwo"
import UserImageTwo from "./Screens/UserImage/UserImageTwo"
import CnicThree from "./Screens/CNIC/CnicThree"
import VaccineThree from "./Screens/CovidVaccine/VaccineThree"
import CnicOne from "./Screens/CNIC/CnicOne"
import VaccineOne from "./Screens/CovidVaccine/VaccineOne"
import UserImageOne from "./Screens/UserImage/UserImageOne"
import RegisterationOne from "./Screens/Registeration/RegisterationOne"
import RegisterationTwo from "./Screens/Registeration/RegisterationTwo"
import RegisterationThree from "./Screens/Registeration/RegisterationThree"
import RegisterationFour from "./Screens/Registeration/RegisterationFour"
import RegisterationFive from "./Screens/Registeration/RegisterationFive"
import UserImageThree from "./Screens/UserImage/UserImageThree"
import PassportOne from "./Screens/Passport/PassportOne"
import PassportThree from "./Screens/Passport/PassportThree"
import Documents from "./Screens/Documents"
// call any screen inside return to check it's UI, routing is not implemented yet...
export default function App() {
  return (
    <Documents />
    // <View style={styles.container}>
    //   <HajjLogo />
    //   <Text>My Hajj Companion</Text>
    //   <View style={styles.circle}></View>
    // </View>
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
