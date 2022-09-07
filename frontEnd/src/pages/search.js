import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/navBar";
import Result from "../components/search/result";
import SearchAgain from "../components/search/searchAgain";
import SearchBar from "../components/searchBar";
import { OuterLayout } from "../styles/constantLayout";

const Search = () => {
    return (
        <>
            <OuterLayout>
                <Header />
                <SearchBar />
                <NavBar />
                <SearchAgain/>
                <Result />
            </OuterLayout>
            <Footer />
        </>
    )
}

export default Search;