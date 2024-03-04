import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    button: 1
}

const ButtonSlice = createSlice({
    name:"button",
    initialState,
    reducers:{
        Inccrement:(state)=>{
            state.button += 1;
        },
        Decrement:(state)=>{
            state.button -= 1;
        }
    }
})

export const {Inccrement,Decrement} = ButtonSlice.actions;

export default ButtonSlice.reducer;