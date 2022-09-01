import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import { DivSeperation, OuterLayout } from "../styles/constantLayout";
import PageHeading from "../components/PageHeading";
import Index from '../components/blogs/index'
import { useSelector } from "react-redux";

const Blog = () => {
    const {type} = useSelector((store) => store.currentBlog)

    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <>
             <Header />
            <OuterLayout>
                <DivSeperation width={.1} />
            </OuterLayout>
            <SearchBar />
            <NavBar />
            <PageHeading subHeading = {'CATEGORIES'} heading = {type} subtitle = {"Blogs"} iconName = {"home"}/>
            <Index />
            <Footer />
        </>
    )
}

export default Blog;