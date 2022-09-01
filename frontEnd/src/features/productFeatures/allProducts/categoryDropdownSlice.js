import { createSlice } from "@reduxjs/toolkit";

const dropper = {
    isDrop : false,
    categories : false,
    availabilities : false,
    price : false,
    color:false,
    size:false,
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
