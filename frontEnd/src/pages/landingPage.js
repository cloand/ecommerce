import React, { useEffect } from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import NavBar from '../components/navBar'
import { AbsoluteDiv,QuickView ,QuickViewOuter,Product,Helper,QuickViewDiv, DivSeperation } from "../styles/constantLayout";
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
import { changeQuickView } from "../features/productFeatures/extras";
import { useDispatch, useSelector } from "react-redux";
import ProductLayout from "../components/product/productLayout";
import ReactModal from "react-modal";
import QuickViewModal from "../components/allProducts/quickViewModal";


const LandingPage = () => {
    const [featured] = useFetch(`${getProductsUrl}${getFeatured}`)
    const [latest] = useFetch(`${getProductsUrl}${getLatest}`)
    const [categories] = useFetch(`${getCategories}`)
    const {quickView} = useSelector((store) => store.dropDown)
    const dispatch = useDispatch();
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

      return () => {
        dispatch(changeQuickView(false))
      }
    },[])

    // useEffect(()=>{
      
    // },[featured,categories,quickView])


    return (
    <>
    <ReactModal ariaHideApp={true} isOpen={quickView} preventScroll={false} contentLabel = "hello" shouldCloseOnEsc={true} style={{overlay:{
            background:"none",
            padding:0,
            zIndex:2
        },
        content:{
            border:"none",
            top:"13%",
            left:"13%",
            right:"13%",
            bottom:"13%",
            border:"2px solid black",
            padding:"1em",
            margin:"0",
        }
        }}>
            <QuickViewModal />
        </ReactModal>
        {/* <Helper isQuickView = {quickView}> */}
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
        {/* </Helper> */}
        {/* {quickView && <>
                            <QuickView isQuickView = {quickView} top = {window.pageYOffset}>
                                <QuickViewDiv>
                                        <QuickViewOuter className="material-symbols-outlined" onClick={()=>{
                                            dispatch(changeQuickView(false))
                                        }}>
                                            close
                                        </QuickViewOuter>
                                        <Product>
                                            <ProductLayout />
                                        </Product>
                                </QuickViewDiv>
                            </QuickView>
                </>} */}
    </>
        
    );
      
}

export default LandingPage;