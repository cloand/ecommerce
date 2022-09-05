import React from "react";
import Header from "../components/header";
import NavBar from "../components/navBar";
import PageHeading from "../components/PageHeading";
import SearchBar from "../components/searchBar";
import ProductSection from "../components/allProducts/productSection";
import Footer from "../components/footer"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AbsoluteDiv,QuickView ,QuickViewOuter,Product,Helper,QuickViewDiv} from "../styles/constantLayout";
import ProductLayout from "../components/product/productLayout";
import { changeListViewCart, changeQuickView } from "../features/productFeatures/extras";
import CartModal from "../components/allProducts/cartModal";
import ReactModal from 'react-modal'
import { getCurrentCategoryBlogs } from "../features/blogs/currentcategory";
import QuickViewModal from "../components/allProducts/quickViewModal";

const AllProducts = () => {
    const {type} = useSelector((store) => store.selectedCategory)
    const {currentCategory} = useSelector((store) => store.products)
    const {quickView,listViewCart} = useSelector((store) => store.dropDown)
    const dispatch = useDispatch()

    useEffect(()=>{
        window.scrollTo(0,0)

        return () => {
            dispatch(changeListViewCart(false))
            dispatch(changeQuickView(false))
        }
    },[])

    useEffect(()=>{
    },[quickView])

    return (
        <>
        <ReactModal isOpen={quickView} preventScroll={false} contentLabel = "hello" shouldCloseOnEsc={true} style={{overlay:{
            background:"none",
            padding:0
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
        <ReactModal isOpen={listViewCart} preventScroll={false} contentLabel = "hello" shouldCloseOnEsc={true} style={{overlay:{
            background:"none",
            padding:0,
        },
        content:{
            border:"none",
            top:"24%",
            left:"32%",
            right:"32%",
            bottom:"24%",
            border:"2px solid black",
            padding:"1em",
            margin:"0",
        }
        }}>
            <CartModal />
        </ReactModal>
                <Helper isQuickView = {quickView}>
                    <Header />
                    <SearchBar />
                    <NavBar />
                    <PageHeading subHeading = {'CATEGORIES'} heading = {currentCategory[1]} subtitle = {"Products"} iconName = {"home"}/>
                    <ProductSection />
                    <Footer />
                </Helper>
        </>
    )
}
export default AllProducts;

