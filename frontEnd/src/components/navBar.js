import React, { useState ,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLinks } from "../constants/DisplayTexts";
import {OuterDiv,LeftLinks,WithoutArrow,WithArrow,RightOffers,SpecialOffer,Icon,OfferLabel,SingleLink} from '../styles/navBarStyles'
import { OuterLayout } from "../styles/constantLayout";
import { Link } from "react-router-dom";
import {getBlogs, getBrands, getCategories, getProductsUrl} from '../constants/url'
import { changeCurrentCategory } from "../features/productFeatures/product/selectedCategory";
import { useDispatch } from "react-redux";
import { changeCurrentBlog } from "../features/blogs/currentBlog";
import { getAllBlogs } from "../features/blogs/currentcategory";
import { checkCategory, clearFilters, getAllProducts } from "../features/productFeatures/productSlice";


const NavBar = () => {

    return(
    <OuterLayout>
        <OuterDiv>
            <LeftLinks>
            <Link to={"/"} style = {{textDecoration:"none",color:"black"}} ><WithoutArrow>
                    Home
            </WithoutArrow>
            </Link>
            {NavLinks.map((i,index)=>{
                    return <WithArrow key = {index}><Category i = {i}/>
                    <FontAwesomeIcon icon="fa-solid fa-angle-down" /></WithArrow>
            })}
            <Link to={"/"} style = {{textDecoration:"none",color:"black"}} >
                <WithoutArrow>
                    AboutUs
                </WithoutArrow>
            </Link>
            </LeftLinks>
            <RightOffers>
                <SpecialOffer>
                    <Icon>
                    <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                    </Icon>
                    <OfferLabel>
                        Special Offers
                    </OfferLabel>
                </SpecialOffer>
                <SpecialOffer>
                <OfferLabel>
                    Buy Ride!
                </OfferLabel>
                </SpecialOffer>
            </RightOffers>
        </OuterDiv>
    </OuterLayout>
    );
}

export default NavBar;

const checkLink = (i) => {
    if(i === "Products"){
        return getProductsUrl
    }
    if(i === "Brands"){
        return getBrands
    }
    if(i==="Categories"){
        return getCategories
    }
    if(i==="Blog"){
        return getBlogs
    }
    return '/'

}

const Category = ({i}) => {
    const [link,setLink] = useState(() => checkLink(i))
    const dispatch = useDispatch();

    return  (<Link to = {link} style = {{textDecoration:"none"}} >
        {i === "Products" && <SingleLink onClick={()=> {
                dispatch(checkCategory("Products"));
                dispatch(getAllProducts())
                dispatch(clearFilters());
            }}>{i}</SingleLink>}
        {i === "Categories" && <SingleLink onClick={()=> {
                dispatch(checkCategory("All Categories"));
                dispatch(getAllProducts())
            }}>{i}</SingleLink>}
            {i === "Brands" && <SingleLink onClick={()=> {
                dispatch(checkCategory("All Brands"));
                dispatch(getAllProducts())
            }}>{i}</SingleLink>}
        {(i !== "Products" && i!== "Categories" && i!== "Brands")&& <SingleLink style={{color:"black"}} onClick={()=>{
            if(i==="Blog"){
                dispatch(changeCurrentBlog("Blogs"));
                dispatch(getAllBlogs());
                dispatch(clearFilters());
            }
        }}>{i}</SingleLink>}
    </Link>)
}


