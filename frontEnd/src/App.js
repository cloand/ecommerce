import React,{useEffect} from "react";
import LandingPage from "./pages/landingPage";
import { checkLoading,getProducts } from "./features/productFeatures/productSlice";
import { useSelector,useDispatch } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Route,Routes } from "react-router-dom";
import Product from "./pages/Product";
import { faTwitter,faPinterestP,faFacebookF } from '@fortawesome/free-brands-svg-icons'
import Cart from "./pages/cart";
import {addLocal} from "./features/productFeatures/cart/cartSlice"
import AllProducts from "./pages/allProducts";
import {getBlogs, getBrands, getCategories, getProductsUrl} from './constants/url'
import Brands from "./pages/brands";
import Categories from "./pages/categories";
import Blog from "./pages/blog";
import BlogDisc from "./pages/blogDisc";
import {getBlogCategories} from './features/blogs/currentcategory'
library.add(fas,faTwitter,faPinterestP,faFacebookF);

function App() {
  const {items,isLoading} = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect( ()=>{
    dispatch(getProducts());
    dispatch(addLocal());
    dispatch(getBlogCategories())
  },[])

  
  useEffect(()=>{
    checkLoading();
  },[items])

  if(!isLoading){
    return (
        <>
        <Routes>
          <Route path="/" element= {<LandingPage />} />
          <Route path={`${getProductsUrl}`}>
            <Route index element={<AllProducts/>} />
            <Route path={`:key`} element = {<Product />} />
          </Route>
          <Route path={`${getCategories}`}>
            <Route index element={<Categories />} />
            <Route path={`:key`} element = {<AllProducts/>} />
          </Route>
          <Route path={`${getBrands}`}>
            <Route index element={<Brands />} />
            <Route path={`:key`} element = {<AllProducts/>} />
          </Route>
          <Route path={`${getBlogs}`} >
            <Route index element={<Blog />} />
            <Route path={`:key`} element = {<BlogDisc />} />
          </Route>
          <Route path="cart" element = {<Cart />} />
        </Routes>
        {/* <CartSideBar /> */}
        </>
        
      );
  }
  
}

export default App;