import { createSlice } from "@reduxjs/toolkit";

const current = {
    type:"product",
}

const selectedCategorySlice = createSlice({
    name:"selectedCategory",
    initialState:current,
    reducers:{
        changeCurrentCategory : (current,{payload}) => {
            current.type = payload
          
        },
    }
})

export default selectedCategorySlice.reducer

export const {changeCurrentCategory} = selectedCategorySlice.actions