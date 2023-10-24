import { useEffect, useState } from "react"
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

import { AntDesign } from "@expo/vector-icons"
import { useFocusEffect, useRouter } from "expo-router"
import { useSelector } from "react-redux"

export default function Documents() {
  const document = useSelector((state) => state.document)
  console.log(document)
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [three, setThree] = useState(0)
  const [four, setFour] = useState(0)
  const router = useRouter()

  return (
    <View style={styles.container}>
      {document.number == 0 && (
        <Image
          style={{ width: "100%", height: 17 }}
          source={require("../assets/topBarSix.png")}
        />
      )}
      {document.number == 1 && (
        <Image
          style={{ width: "100%", height: 17 }}
          source={require("../assets/topBarSix.png")}
        />
      )}
      {document.number == 2 && (
        <Image
          style={{ width: "100%", height: 17 }}
          source={require("../assets/topBarSeven.png")}
        />
      )}
      {document.number == 3 && (
        <Image
          style={{ width: "100%", height: 17 }}
          source={require("../assets/topBarEight.png")}
        />
      )}
      {document.number == 4 && (
        <Image
          style={{ width: "100%", height: 17 }}
          source={require("../assets/topBarNine.png")}
        />
      )}
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
      <View
        style={{ display: "flex", gap: 10, padding: 13, alignSelf: "center" }}
      >
        <View
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            display: "flex",
            gap: 10
          }}
        >
          {document?.passport ? (
            <View style={{ position: "relative", margin: 10 }}>
              <View style={{ padding: 8 }}>
                <AntDesign name="checkcircle" size={90} color="green" />
              </View>
              <Text
                style={{
                  marginTop: 7,
                  color: "green",
                  fontWeight: "500",
                  textAlign: "center"
                }}
              >
                Passport Verified
              </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("Screens/Passport/PassportOne")
                }}
                activeOpacity={0.6}
                style={{ position: "absolute", top: 0, right: 0 }}
              >
                <Image source={require("../assets/edit_icon.png")} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                router.push("/Screens/Passport/PassportOne")
              }}
            >
              <Image
                style={{ height: 150, width: 150 }}
                source={require("../assets/PassportD.png")}
              />
            </TouchableOpacity>
          )}
          {document?.cnic ? (
            <View style={{ position: "relative", margin: 10 }}>
              <View style={{ padding: 8 }}>
                <AntDesign name="checkcircle" size={90} color="green" />
              </View>
              <Text
                style={{
                  marginTop: 7,
                  color: "green",
                  fontWeight: "500",
                  textAlign: "center"
                }}
              >
                CNIC Verified
              </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("Screens/CNIC/CnicOne")
                }}
                activeOpacity={0.6}
                style={{ position: "absolute", top: 0, right: 0 }}
              >
                <Image source={require("../assets/edit_icon.png")} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                router.push("/Screens/CNIC/CnicOne")
              }}
            >
              <Image
                style={{ height: 150, width: 150 }}
                source={require("../assets/cnicD.png")}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            display: "flex",
            gap: 10
          }}
        >
          {document?.vaccine ? (
            <View style={{ position: "relative", margin: 10 }}>
              <View style={{ padding: 8 }}>
                <AntDesign name="checkcircle" size={90} color="green" />
              </View>
              <View style={{ marginTop: 7 }}>
                <Text
                  style={{
                    color: "green",
                    fontWeight: "500",
                    textAlign: "center"
                  }}
                >
                  Vaccine certificate
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "green",
                    fontWeight: "500"
                  }}
                >
                  Verified
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  router.push("Screens/CovidVaccine/VaccineOne")
                }}
                activeOpacity={0.6}
                style={{ position: "absolute", top: 0, right: 0 }}
              >
                <Image source={require("../assets/edit_icon.png")} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                router.push("/Screens/CovidVaccine/VaccineOne")
              }}
            >
              <Image
                style={{ height: 150, width: 150 }}
                source={require("../assets/VaccineD.png")}
              />
            </TouchableOpacity>
          )}
          {document?.image ? (
            <View style={{ position: "relative", margin: 10 }}>
              <View style={{ padding: 8 }}>
                <AntDesign name="checkcircle" size={90} color="green" />
              </View>
              <View style={{ marginTop: 7 }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "green",
                    fontWeight: "500"
                  }}
                >
                  Passport Size
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "green",
                    fontWeight: "500"
                  }}
                >
                  photo Verified
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  router.push("Screens/CNIC/CnicOne")
                }}
                activeOpacity={0.6}
                style={{ position: "absolute", top: 0, right: 0 }}
              >
                <Image source={require("../assets/edit_icon.png")} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                router.push("/Screens/UserImage/UserImageOne")
              }}
            >
              <Image
                style={{ height: 150, width: 150 }}
                source={require("../assets/UserImageD.png")}
              />
            </TouchableOpacity>
          )}
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
      {document.number >= 4 && (
        <TouchableOpacity
          activeOpacity={0.6}
          // onPress={() => {
          //   router.push("Registeration/RegisterationFour")
          // }}
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
        </TouchableOpacity>
      )}
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
