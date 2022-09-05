import { createSlice,current } from "@reduxjs/toolkit";

const getId = (item) => {
    return "_" + item.item._id + "_" + item.colorDropDown.value + "_" + item.sizeDropDown.value;
  };

const cartItems = {
    items: [] ,
    // items:[],
    amount:0,
    count:0,
    date:'',
    inOrder:false,
    terms:false
}

const cartSlice = createSlice({
    name:"cart",
    initialState:cartItems,
    reducers:{
        addLocal:(cartItems)=>{
            let check = { ...localStorage };
            let today = new Date();
            let date = String(today.getDate()) + String(today.getHours()) + String(today.getMinutes());
            Object.keys(check).forEach((item)=>{
                let value = JSON.parse(localStorage.getItem(item));
                if(parseInt(date) - parseInt(value.time) < 10000){
                    cartItems.items.push(value.item);
                }
            }) 
            
        },
        addItem:(cartItems,{payload}) => {
                if(payload.itemCount !== 0){
                let check = false;
                let today = new Date();
                let date = String(today.getDate()) + String(today.getHours()) + String(today.getMinutes());        
                cartItems.items.forEach((item) => {
                    if(item.item._id === payload.item._id && (item.sizeDropDown.value === payload.sizeDropDown.value && item.colorDropDown.value === payload.colorDropDown.value)){
                        item.itemCount += payload.itemCount;
                        item.count += payload.count
                        check = true;
                        let values = JSON.parse(localStorage.getItem(getId(item)));
                        values.item.itemCount += payload.itemCount;
                        values.item.count += payload.count;
                        localStorage.setItem(getId(item),JSON.stringify(values));      
                    }      
                })
                cartItems.count = cartItems.count + payload.itemCount;
                if(!check){
                    const cartValue = {
                        item:payload,
                        time:date
                    }
                    cartItems.items.push(payload);
                    cartItems.count = payload.itemCount;
                    localStorage.setItem(getId(payload),JSON.stringify(cartValue)); 
                }
                }
        },
        removeItem:(cartItems,{payload}) => {
            // console.log(current(cartItems))
            cartItems.items = cartItems.items.filter((item) => getId(item) !== getId(payload));
            localStorage.removeItem(getId(payload));
        },
        increamentCount:(cartItems,{payload}) => {
            cartItems.items.forEach((item)=>{
                if(item.item._id === payload.item._id){
                    item.itemCount += 1;
                    item.count += 1
                    let values = JSON.parse(localStorage.getItem(getId(item)));
                    values.item.itemCount += 1;
                    values.item.count += 1;
                    localStorage.setItem(getId(item),JSON.stringify(values));
                   
                }
            })
        },
        decreamentCount:(cartItems,{payload}) => {
            cartItems.items.forEach((item)=>{
                if(getId(item) === getId(payload) && item.itemCount > 0){
                    item.itemCount -= 1;
                    item.count -= 1
                    let values = JSON.parse(localStorage.getItem(getId(item)));
                    values.item.itemCount -= 1;
                    values.item.count -= 1;
                    localStorage.setItem(getId(item),JSON.stringify(values));
                }
                if(item.item._id === payload.item._id && item.itemCount === 0){
                    cartItems.items = cartItems.items.filter((item) => getId(item) !== getId(payload));
                    localStorage.removeItem(getId(item))
                }
            })
        },
        calculateValues:(cartItems)=>{
            cartItems.count = 0;
            let total = 0;
            if(cartItems.items.length >0){
            cartItems.items.forEach((item) => {
                item.totalPrice = item.itemCount * item.item.price;
                cartItems.count += item.itemCount;
                total += (item.itemCount * item.item.price);
            })
        }
            cartItems.amount = total;
        }
      
    }
})

export default cartSlice.reducer;

export const {addItem,removeItem,increamentCount,decreamentCount,addLocal,calculateValues} = cartSlice.actions;