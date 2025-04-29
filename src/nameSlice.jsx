import { createSlice } from "@reduxjs/toolkit";
const nameSlice=createSlice({
    name:"myname",
    initialState:{
        user:"Rishika"
    },
    reducers:{
        changeName:(state)=>{
            state.user="Reshu";
        }
    }
})
export const {changeName}=nameSlice.actions;
export default nameSlice.reducer;