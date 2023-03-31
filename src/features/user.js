import {createSlice} from "@reduxjs/toolkit";

const initialState = {value: {username: "", age:"", email: ""}}
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers:{
    login: (state, action)=>{
      state.value = action.payload
    },
    logout: (state)=>{
      state.value = initialState

    }
    }
})

export const {login, logout} = userSlice.actions

// the login function only creates the user. It would change the values of our state
// to be equal to the user we wanna add
// The login has 2 args (state, action)
// the state holds info about the current and previos value(initialState) 
// an action is an object containing the payload and the type
// when we login we want to change the previous state we had and set it to what we get from 
// the payload 

