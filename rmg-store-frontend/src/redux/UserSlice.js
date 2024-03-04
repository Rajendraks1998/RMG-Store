import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:[],
  qty:0
};

const UserSlice = createSlice({
  name:"User",
  initialState,
  reducers:{
    GetData:(state,action)=>{
      state.user.push(action.payload)
    },
    
    GetQty:(state,action)=>{
      state.qty = action.payload;
    }
  }
})

export const {GetData,GetQty} = UserSlice.actions;
export default UserSlice.reducer;