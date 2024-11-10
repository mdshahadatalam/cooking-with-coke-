import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name:" ",
    initialState: {
        LoggedIn: JSON.parse(localStorage.getItem('user')) || null,
    },
    reducers:{
        LoggedInUser:(state,action)=>{
            state.LoggedIn = action.payload
        },
        LoggedOutUser:(state)=>{
            state.LoggedIn = null
        }
    }
})

export const { LoggedInUser,LoggedOutUser} = userSlice.actions
export default userSlice.reducer 