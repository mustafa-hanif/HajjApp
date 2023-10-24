import { createSlice } from "@reduxjs/toolkit"

const DocumentSlice = createSlice({
  name: "document",
  initialState: {
    number: 0,
    cnic: false,
    image: false,
    passport: false,
    vaccine: false
  },
  reducers: {
    setCNIC: (state) => {
      state.cnic = true
    },
    setImage: (state) => {
      state.image = true
    },
    setVaccine: (state) => {
      state.vaccine = true
    },
    setPassport: (state) => {
      state.passport = true
    },
    incrementNumber: (state) => {
      state.number = state.number + 1
    }
  }
})

export default DocumentSlice.reducer
export const { setCNIC, setImage, setPassport, setVaccine, incrementNumber } =
  DocumentSlice.actions
