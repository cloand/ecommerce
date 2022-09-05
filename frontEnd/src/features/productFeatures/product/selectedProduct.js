import { createSlice,current } from "@reduxjs/toolkit";

const selectedProduct = {
    item : {},
    itemCount: 0,
    count:0,
    totalPrice: 0,
    isCart:false,
    sizeDropDown:{
        isOpen : false,
        value:"Select an Option"
    },
    colorDropDown:{
        isOpen : false,
        value:"Select an Option"
    },
    canAddToCart:false
}

const selectedProductSlice = createSlice({
    name:"selectedProduct",
    initialState:selectedProduct,
    reducers:{
        changeProduct : (selectedProduct,{payload}) => {
            selectedProduct.item = payload;
            selectedProduct.count = 1;
            selectedProduct.itemCount = 1;
        },
        countCounter : (selectedProduct,{payload}) => {
            if(payload === "plus") {
                selectedProduct.itemCount += 1;
                selectedProduct.count += 1;
            } else{
                if(selectedProduct.itemCount > 0){
                    selectedProduct.itemCount -= 1;
                    selectedProduct.count -= 1;
                }
            }
     
        },
        clearCounter : (selectedProduct) => {
            selectedProduct.itemCount = 0;
        } ,
        changeDropDown:(dropDown,{payload}) => {
            console.log("check")
            if(!payload){
                dropDown.sizeDropDown.isOpen = false
                dropDown.sizeDropDown.value = "Select an Option"
                dropDown.colorDropDown.value = "Select an Option"
                dropDown.colorDropDown.isOpen = false
                // console.log("edd")
            }else{ 
                if(payload[0] === null){
                    payload[1] === "size" ? payload[0] = dropDown.sizeDropDown.value : payload[0] = dropDown.colorDropDown.value
                    // console.log(payload[0],'payload')
                }
                switch(payload[1]){
                    case "size": dropDown.sizeDropDown.isOpen = !dropDown.sizeDropDown.isOpen
                                dropDown.sizeDropDown.value = payload[0]
                                break;
                    case "color" :dropDown.colorDropDown.isOpen = !dropDown.colorDropDown.isOpen
                                dropDown.colorDropDown.value = payload[0]
                                break;
                    default: 
                }
            }
        },
        changeCartButton:(dropDown)=>{
            if(dropDown.sizeDropDown.value !== "Select an Option" &&  dropDown.colorDropDown.value !== "Select an Option") {
                dropDown.canAddToCart = true;
            }
            // console.log(current(dropDown.canAddToCart),"canaddtocart")
        }
    }
})

export default selectedProductSlice.reducer;

export const {changeProduct,countCounter,clearCounter,changeDropDown,changeCartButton} = selectedProductSlice.actions;