import React, { useEffect } from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import NavBar from '../components/navBar'
import { DivSeperation } from "../styles/constantLayout";
import MainBlock from "../components/mainBlock";
import ShippingSupport from "../components/shippingSupport";
import CategoriesSection from "../components/categories";
import accessories from '../assets/accessories.jpg'
import cosmetics from '../assets/cosmetics.webp';
import fashionable from '../assets/fashionable.jpg';
import forMens from '../assets/forMens.webp';
import SalesCard from "../components/salescard";
import Featured from "../components/product";
import SeasonSale from "../components/seosonSales";
import FeaturedArticles from "../components/featuredArticles";
import Brands from "../components/brands";
import TopProducts from "../components/topProducts";
import Footer from "../components/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right from '../assets/mainImageRight.jpg';
import left from '../assets/mainDisplay.webp'
import { useFetch } from "../customHooks/useFetch";
import { getFeatured, getProductsUrl,getLatest, getCategories } from "../constants/url";



const LandingPage = () => {
    const [featured] = useFetch(`${getProductsUrl}${getFeatured}`)
    const [latest] = useFetch(`${getProductsUrl}${getLatest}`)
    const [categories] = useFetch(`${getCategories}`)
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
      autoplaySpeed: 2000,
      };

      useEffect(()=>{
      window.scroll(0,0)
    },[])

    useEffect(()=>{
      
    },[featured,categories])


    return (
    <>
        <Header />
        <DivSeperation width={0.1}/>
        <SearchBar/>
        <NavBar />
        <Slider {...settings}>
            <MainBlock position={"left"} image = {left}/>
            <MainBlock position={"right"} image = {right}/>
        </Slider>
        <ShippingSupport />
        {categories && <CategoriesSection categoryName={"Our Categories"} categories = {categories} images={[accessories,cosmetics,fashionable,forMens]}/>}
        {featured && <Featured arr={featured} headText = {"Best Sellers"}/>}
        {categories && <SalesCard categories={categories}/>}
        {latest && <Featured arr={latest} headText = {"Our Featured"}/>}
        <SeasonSale />
        <FeaturedArticles />
        <Brands />
        <TopProducts />
        <Footer />
    </>
        
    );
      
}

export default LandingPage;