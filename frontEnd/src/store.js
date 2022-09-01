import { configureStore ,} from "@reduxjs/toolkit";
import productReducer from "./features/productFeatures/productSlice";
import dropperReducer from "./features/productFeatures/allProducts/categoryDropdownSlice";
import simpleSortReducer from "./features/productFeatures/allProducts/simpleSortsSlice"
import selectedProductReducer from "./features/productFeatures/product/selectedProduct"
import cartReducer from './features/productFeatures/cart/cartSlice'
import selectedCategoryReducer from "./features/productFeatures/product/selectedCategory";
import currentBlogReducer from "./features/blogs/currentBlog";
import currentCategoryBlogReducer from "./features/blogs/currentcategory"
import dropDownReducer from "./features/productFeatures/extras";



const store = configureStore({
    reducer:{
        dropper: dropperReducer,
        simpleSort : simpleSortReducer,
        products : productReducer,
        selectedProduct : selectedProductReducer,
        cart:cartReducer,
        selectedCategory:selectedCategoryReducer,
        currentBlog:currentBlogReducer,
        currentBlogCategory: currentCategoryBlogReducer,
        dropDown : dropDownReducer
    },
})

export default store;