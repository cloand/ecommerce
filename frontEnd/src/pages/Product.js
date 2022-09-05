import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import ProductSection from "../components/product/productSection";
import { AbsoluteDiv, DivSeperation, OuterLayout, QuickView } from "../styles/constantLayout";
import { changeDropDown } from "../features/productFeatures/product/selectedProduct";


const Product = () => {

    useEffect(()=>{
        window.scroll(0,0)

        return () => {
            changeDropDown(null);
        }
    })


    return (
        <>
     
                <Header />
                <OuterLayout>
                    <DivSeperation width={.1} />
                </OuterLayout>
                <SearchBar />
                <NavBar />
                <ProductSection />
                <Footer />
        </>

    );
}

export default Product;
