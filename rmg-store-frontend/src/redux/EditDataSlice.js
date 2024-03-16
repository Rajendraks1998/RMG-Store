import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EditData:[],
  
};

const EditDataSlice = createSlice({
  name:"editdata",
  initialState,
  reducers:{
    GetEditData:(state,action)=>{
      state.EditData.push(action.payload)
    }
  }
})

export const {GetEditData} = EditDataSlice.actions;
export default EditDataSlice.reducer;