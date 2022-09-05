import { createSlice } from "@reduxjs/toolkit";

const dropDown = {
    cartAddress : false,
    selectedImage:0,
    selectedNavLink : "Home",
    quickView : false,
    sortByDrop:false,
    listViewCart:false
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
        changeSelectedNavLink:(dropDown,{payload}) => {
            dropDown.selectedNavLink = payload;
        },
        changeQuickView:(dropDown,{payload}) => {
            payload !== undefined ? dropDown.quickView = payload : dropDown.quickView = !dropDown.quickView
        },
        changeSortByDrop:(dropDown,{payload})=>{
            payload !== undefined ? dropDown.sortByDrop = payload : dropDown.sortByDrop = !dropDown.sortByDrop
        },
        changeListViewCart:(dropDown,{payload}) => {
            payload !== undefined ? dropDown.listViewCart = payload : dropDown.listViewCart = !dropDown.listViewCart;
            console.log(dropDown.listViewCart,"check list view cart")
        }
    }
})

export default dropDownSlice.reducer

export const {changeAddressDropDown,changeSelectedImage,changeSelectedNavLink,changeQuickView,changeSortByDrop,changeListViewCart} = dropDownSlice.actions