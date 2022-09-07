import { createSlice } from "@reduxjs/toolkit";

const search={
    query:'',
    result:[]
}

const searchSlice = createSlice({
    name:'search',
    initialState:search,
    reducers:{
        changeQuery:(search,{payload})=>{
            if(payload[0] === "data"){
                search.result = payload[1];
            }else{
                search.query = payload[1];
            }
        }
    }
})

export default searchSlice.reducer

export const {changeQuery} = searchSlice.actions



