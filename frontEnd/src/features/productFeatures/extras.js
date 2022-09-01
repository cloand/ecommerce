import { createSlice } from "@reduxjs/toolkit";

const dropDown = {
    cartAddress : false,
    selectedImage:0,
}

const dropDownSlice = createSlice({
    name:'dropDown',
    initialState:dropDown,
    reducers:{
        changeAddressDropDown : (dropDown) => {
            dropDown.cartAddress = !dropDown.cartAddress;
        },
        changeSelectedImage:(dropDown,{payload}) => {
            dropDown.selectedImage = payload;
        },
    }
})

export default dropDownSlice.reducer

export const {changeAddressDropDown,changeSelectedImage} = dropDownSlice.actions