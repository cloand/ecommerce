import { configureStore ,} from "@reduxjs/toolkit";
import productReducer from "./features/productFeatures/productSlice";
import dropperReducer from "./features/productFeatures/allProducts/categoryDropdownSlice";
import simpleSortReducer from "./features/productFeatures/allProducts/simpleSortsSlice"
import selectedProductReducer from "./features/productFeatures/product/selectedProduct"
import cartReducer from './features/productFeatures/cart/cartSlice'
import currentBlogReducer from "./features/blogs/currentBlog";
import currentCategoryBlogReducer from "./features/blogs/currentcategory"
import dropDownReducer from "./features/productFeatures/extras";
import filterReducer from './features/productFeatures/allProducts/categoryFilters'
import categoryReducer from './features/productFeatures/allProducts/currentCategory'
import searchReducer from './features/search/search'



const store = configureStore({
    reducer:{
        dropper: dropperReducer,
        simpleSort : simpleSortReducer,
        products : productReducer,
        selectedProduct : selectedProductReducer,
        cart:cartReducer,
        currentBlog:currentBlogReducer,
        currentBlogCategory: currentCategoryBlogReducer,
        dropDown : dropDownReducer,
        categoryFilters:filterReducer,
        currentCategory:categoryReducer,
        search:searchReducer
    },
})

export default store;