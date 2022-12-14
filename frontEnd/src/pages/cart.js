import Header from "../components/header";
import SearchBar from "../components/searchBar";
import NavBar from "../components/navBar";
import Footer from '../components/footer';
import Products from "../components/cart/products";
import { DivSeperation, OuterLayout } from "../styles/constantLayout";
import { useEffect } from "react";

const Cart = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header />
            <OuterLayout>
                <DivSeperation width={.1} />
            </OuterLayout>
            <SearchBar />
            <NavBar />
            <div style={{padding:"1em 0"}}>
                <DivSeperation width={.1} />
            </div>
            <Products />
            <Footer />
        </>
    );
}

export default Cart;