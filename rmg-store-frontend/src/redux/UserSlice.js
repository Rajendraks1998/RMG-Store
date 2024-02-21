import { createSlice } from "@reduxjs/toolkit";



const initialState = {

  user:[]

};



const UserSlice = createSlice({

  name:"User",

  initialState,

  reducers:{

    GetData:(state,action)=>{

      state.user.push(action.payload)

    }

  }

})



export const {GetData} = UserSlice.actions;

export default UserSlice.reducer;