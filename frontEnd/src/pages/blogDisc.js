import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import { DivSeperation, OuterLayout } from "../styles/constantLayout";
import PageHeading from "../components/PageHeading";
import { useSelector } from "react-redux";
import Disc from "../components/blogs/disc";
import {useFetch} from '../customHooks/useFetch'
import {getBlogs} from '../constants/url'
import { useEffect } from "react";

const BlogDisc = () => {
    const {type,_id,name} = useSelector((store) => store.currentBlog)
    const[blog] = useFetch(`${getBlogs}/${_id}`)

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
            <PageHeading subHeading = {type} heading = {name} subtitle = {"Blogs"} iconName = {"home"}/>
            {blog && <Disc blog={blog[0]}/>}
            <Footer />
        </>
    )
}
export default BlogDisc;