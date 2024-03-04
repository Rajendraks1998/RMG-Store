import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData:[],
  
};

const UserDataSlice = createSlice({
  name:"userdata",
  initialState,
  reducers:{
    GetUserData:(state,action)=>{
      state.userData.push(action.payload)
    }
  }
})

export const {GetUserData} = UserDataSlice.actions;
export default UserDataSlice.reducer;