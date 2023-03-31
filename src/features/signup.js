import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasCompletedSignup: false
}

 export const signupSlice = createSlice({
  name: "signup",
  initialState: initialState,
  reducers:{
    completeSignup: (state)=>{
      state.hasCompletedSignup = true
    }

  }
})

export const {completeSignup} = signupSlice.actions