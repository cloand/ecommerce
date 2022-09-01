import Index from "../components/brands/index"
import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import { DivSeperation, OuterLayout } from "../styles/constantLayout";
import PageHeading from "../components/PageHeading";
import { useSelector } from "react-redux";

const Brands = () =>{
    const {currentCategory} = useSelector((store) => store.products);
    return (
        <>
            <Header />
            <OuterLayout>
                <DivSeperation width={.1} />
            </OuterLayout>
            <SearchBar />
            <NavBar />
            <PageHeading subHeading = {'BRANDS'} heading = {currentCategory[1]} subtitle = {"Products"} iconName = {"home"}/>
            <Index />
            <Footer />
        </>
    )
}

export default Brands