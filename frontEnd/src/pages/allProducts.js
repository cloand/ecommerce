import React from "react";
import Header from "../components/header";
import NavBar from "../components/navBar";
import PageHeading from "../components/PageHeading";
import SearchBar from "../components/searchBar";
import ProductSection from "../components/allProducts/productSection";
import Footer from "../components/footer"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AllProducts = () => {
    const {type} = useSelector((store) => store.selectedCategory)
    const {currentCategory} = useSelector((store) => store.products)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <Header />
            <SearchBar />
            <NavBar />
            <PageHeading subHeading = {'CATEGORIES'} heading = {currentCategory[1]} subtitle = {"Products"} iconName = {"home"}/>
            <ProductSection />
            <Footer />
        </>
    )
}
export default AllProducts;