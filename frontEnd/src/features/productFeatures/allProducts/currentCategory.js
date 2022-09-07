import { createSlice } from "@reduxjs/toolkit";

const current = {
    category:"All Products"
}

const categorySlice = createSlice({
    name:'currentCategory',
    initialState:current,
    reducers:{
        changeCategory:(current,{payload})=>{
            console.log(payload,'payload')
            let reg = /-/g
            let str = payload.replace(reg," ")
            current.category = str;
        }
    }
})

export default categorySlice.reducer

export const {changeCategory} = categorySlice.actions