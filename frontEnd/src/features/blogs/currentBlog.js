import { createSlice } from "@reduxjs/toolkit";

const current = {
    type:"Blogs",
    _id:'',
    name:''
}

const currentBlogSlice = createSlice({
    name:"currentBlog",
    initialState:current,
    reducers:{
        changeCurrentBlog : (current,{payload}) => {
            current.type = payload
        },
        changeCurrentDisc : (current,{payload}) => {
            current.name = payload[0]
            current._id = payload[1]

        }
    }
})

export default currentBlogSlice.reducer;

export const {changeCurrentBlog,changeCurrentDisc} = currentBlogSlice.actions