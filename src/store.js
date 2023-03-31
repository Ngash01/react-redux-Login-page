import { configureStore,  } from "@reduxjs/toolkit";
import { userSlice } from "./features/user";
import { signupSlice } from "./features/signup";


export const store = configureStore({
  reducer:{
    user: userSlice.reducer,
    signup: signupSlice.reducer
  }
})