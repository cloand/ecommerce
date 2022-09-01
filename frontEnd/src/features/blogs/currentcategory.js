import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { getBlogs } from "../../constants/url";


const categoryBlogs = {
    blogs:null,
    isLoading:true,
    currentBlogs:null,
    categoryName:"All Blogs"
}

const url = `http://localhost:8080${getBlogs}`

export const getBlogCategories =createAsyncThunk(`${getBlogs}`,()=>{
    return axios.get(url).then(({data}) => {
        return data
    }).catch((err) => console.log(err))
})

const currentCategoryBlogSlice = createSlice({
    name:'currentBlogCategory',
    initialState:categoryBlogs,
    reducers:{
        getCurrentCategoryBlogs:(categoryBlogs,{payload})=>{
            let arr =[]
            categoryBlogs.blogs.forEach((item,index) => {
                item.category.forEach((category,index) => {
                    if(category === payload){
                        arr.push(item)
                    }
                })
            })
            categoryBlogs.currentBlogs = arr;
            categoryBlogs.categoryName = payload;
        },
        getAllBlogs:(categoryBlogs)=>{
            categoryBlogs.currentBlogs = categoryBlogs.blogs
        },
        changeBlogCtegory:(categoryBlogs,{payload})=>{
            categoryBlogs.categoryName = payload;
        }
    },
    extraReducers:{
        [getBlogCategories.pending]:(categoryBlogs)=>{
            categoryBlogs.isLoading = true;
        },
        [getBlogCategories.fulfilled]:(categoryBlogs,{payload})=>{
            categoryBlogs.blogs=payload
            categoryBlogs.currentBlogs=payload
            categoryBlogs.isLoading=false
        },
        [getBlogCategories.rejected]:(err)=>{
            console.log(err)
        }
    }
})

export default currentCategoryBlogSlice.reducer

export const {getCurrentCategoryBlogs,getAllBlogs} = currentCategoryBlogSlice.actions