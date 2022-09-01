import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import ProductSection from "../components/product/productSection";
import { DivSeperation, OuterLayout } from "../styles/constantLayout";


const Product = () => {

    useEffect(()=>{
        window.scroll(0,0)
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
