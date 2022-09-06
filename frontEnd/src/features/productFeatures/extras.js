import { createSlice } from "@reduxjs/toolkit";

const dropDown = {
    cartAddress : false,
    selectedImage:0,
    selectedNavLink : "Home",
    quickView : false,
    sortByDrop:false,
    listViewCart:false,
    active:"Home"
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
            // console.log(dropDown.listViewCart,"check list view cart")
        },
        changeActive:(dropDown,{payload}) => {
            let check = false;
            switch (payload){
                case "/" : dropDown.active = "Home";
                            check = true;
                            break;

                case "/get-categories" : dropDown.active = "Categories";
                            check = true;
                            break;

                case "/get-products" : dropDown.active = "Products";
                            check = true;
                            break;

                case "/get-brands" : dropDown.active = "Brands";
                            check = true;            
                            break;

                case "/get-blogs" : dropDown.active = "Blog";
                            check = true;            
                            break;
                case "/cart" : dropDown.active = "Cart";
                            check=true;
                            break;

                default: dropDown.active="none"
                            break;
            } 

            if(!check && payload.includes("/get-categories")){
                dropDown.active = "Products"
            }
            if(!check && payload.includes("/get-brands")){
                dropDown.active = "Products"
            }
        }
    }
})

export default dropDownSlice.reducer

export const {changeAddressDropDown,changeSelectedImage,changeSelectedNavLink,changeQuickView,changeSortByDrop,changeListViewCart,changeActive} = dropDownSlice.actions