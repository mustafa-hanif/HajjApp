import { configureStore } from "@reduxjs/toolkit"
import DocumentReducer from "../redux/DocumentSlice"

const Store = configureStore({
  reducer: {
    document: DocumentReducer
  }
})

export default Store
