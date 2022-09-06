import { createSlice } from "@reduxjs/toolkit";

const dropper = {
    isDrop : true,
    categories : true,
    availabilities : true,
    price : true,
    color:true,
    size:true,
}

const dropperSlice = createSlice({
    name:"dropper",
    initialState:dropper,
    reducers:{
        checkValue: (dropper,{payload}) => {
            dropper[payload] = !dropper[payload];
        }
    }
})

export default dropperSlice.reducer;

export const {checkValue} = dropperSlice.actions;
