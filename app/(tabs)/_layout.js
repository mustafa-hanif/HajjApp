// import { Tabs } from "expo-router"

// export default () => {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <Tabs.Screen name="Profile"/>
//       <Tabs.Screen name="about" />
//     </Tabs>
//   )
// }

import { Tabs } from "expo-router"
import { Entypo, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons"

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
      style={{ marginTop: 10 }}
    >
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="user-circle"
              size={24}
              color={focused ? "green" : "black"}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Location"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="location-pin"
              size={28}
              color={focused ? "green" : "black"}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="home" size={24} color={focused ? "green" : "black"} />
          )
        }}
      />
      <Tabs.Screen
        name="Chat"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="chatbubble-ellipses"
              size={24}
              color={focused ? "green" : "black"}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Date"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name="calendar-alt"
              size={24}
              color={focused ? "green" : "black"}
            />
          )
        }}
      />
    </Tabs>
  )
}
