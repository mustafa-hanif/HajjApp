import { Stack } from "expo-router/stack"
import { Provider } from "react-redux"
import Store from "./redux/store"
import Documents from "./Documents"

export default function Layout() {
  return (
    <Provider store={Store}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </Provider>
  )
}
