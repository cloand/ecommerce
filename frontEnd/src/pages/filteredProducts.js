import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import { DivSeperation, OuterLayout } from "../styles/constantLayout";
import PageHeading from "../components/PageHeading";
import { useSelector } from "react-redux";


const FilteredProducts = () => {
    const {currentCategory} = useSelector((store) => store.products);
    return (
        <>
             <Header />
            <OuterLayout>
                <DivSeperation width={.1} />
            </OuterLayout>
            <SearchBar />
            <NavBar />
            <PageHeading subHeading = {'CATEGORIES'} heading = {currentCategory} subtitle = {"Products"} iconName = {"home"}/>
            <Footer />
        </>
    )
} 

export default FilteredProducts;