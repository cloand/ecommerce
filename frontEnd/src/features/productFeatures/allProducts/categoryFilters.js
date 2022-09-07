import { createSlice } from "@reduxjs/toolkit";

const filters = {
    category:true,
    brand:true
}

const flilterSlice = createSlice({
    name:'categoryFilters',
    initialState:filters,
    reducers:{
        changeFilters:(filters,{payload})=>{
            filters[payload[0]] = payload[1];
        }
    }
})

export default flilterSlice.reducer

export const {changeFilters} = flilterSlice.actions