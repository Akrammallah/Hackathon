'use client'
import {createSlice} from "@reduxjs/toolkit"

export const rentSlice = createSlice({
  name: "rent",
  initialState: {
    rent: 0,
  },
  reducers: {
    setRent: (state, action) => {
      state.rent = action.payload
    },

    clearRent: (state) => { 
      state.rent = 0
    }

  }
})



export const {setRent, clearRent} = rentSlice.actions

export default rentSlice.reducer