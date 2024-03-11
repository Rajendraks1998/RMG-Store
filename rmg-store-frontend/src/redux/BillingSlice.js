import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billingData:[],
  
};

const BillingSlice = createSlice({
  name:"billingdata",
  initialState,
  reducers:{
    GetBilling:(state,action)=>{
      state.billingData.push(action.payload)
    }
  }
})

export const {GetBilling} = BillingSlice.actions;
export default BillingSlice.reducer;