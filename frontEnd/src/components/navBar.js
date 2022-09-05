import React, { useState ,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLinks } from "../constants/DisplayTexts";
import {OuterDiv,LeftLinks,WithoutArrow,WithArrow,RightOffers,SpecialOffer,Icon,OfferLabel,SingleLink} from '../styles/navBarStyles'
import { OuterLayout } from "../styles/constantLayout";
import { Link } from "react-router-dom";
import {getBlogs, getBrands, getCategories, getProductsUrl} from '../constants/url'
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentBlog } from "../features/blogs/currentBlog";
import { getAllBlogs } from "../features/blogs/currentcategory";
import { checkCategory, clearFilters, getAllProducts } from "../features/productFeatures/productSlice";
import { changeSelectedNavLink } from "../features/productFeatures/extras";


const NavBar = () => {
    const {selectedNavLink} = useSelector((store) => store.dropDown)

    return(
    <OuterLayout>
        <OuterDiv>
            <LeftLinks>
            <Link to={"/"} style = {{textDecoration:"none",color:"black"}} onClick={()=>dispatch(changeSelectedNavLink("Home"))}><WithoutArrow i = {"Home"} activeLink = {selectedNavLink}>
                    Home
            </WithoutArrow>
            </Link>
            {NavLinks.map((i,index)=>{
                    return <WithArrow key = {index}><Category i = {i}/>
                    <FontAwesomeIcon icon="fa-solid fa-angle-down" /></WithArrow>
            })}
            <Link to={"/"} style = {{textDecoration:"none",color:"black"}} onClick={()=>dispatch(changeSelectedNavLink("About Us"))} >
                <WithoutArrow i = {"About Us"} activeLink = {selectedNavLink}>
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
    const {selectedNavLink} = useSelector((store) => store.dropDown)
    const dispatch = useDispatch();

    return  (<Link to = {link} style = {{textDecoration:"none"}} >
        {i === "Products" && <SingleLink i = {i} currentActive = {selectedNavLink} onClick={()=> {
                dispatch(checkCategory("Products"));
                dispatch(getAllProducts());
                dispatch(clearFilters());
                dispatch(changeSelectedNavLink(i));
            }}>{i}</SingleLink>}
        {i === "Categories" && <SingleLink i = {i} currentActive = {selectedNavLink} onClick={()=> {
                dispatch(checkCategory("All Categories"));
                dispatch(getAllProducts());
                dispatch(changeSelectedNavLink(i));
            }}>{i}</SingleLink>}
            {i === "Brands" && <SingleLink i = {i} currentActive = {selectedNavLink} onClick={()=> {
                dispatch(checkCategory("All Brands"));
                dispatch(getAllProducts());
                dispatch(changeSelectedNavLink(i));
            }}>{i}</SingleLink>}
        {(i !== "Products" && i!== "Categories" && i!== "Brands")&& <SingleLink i = {i} currentActive = {selectedNavLink} style={{color:"black"}} onClick={()=>{
            if(i==="Blog"){
                dispatch(changeCurrentBlog("Blogs"));
                dispatch(getAllBlogs());
                dispatch(clearFilters());
                dispatch(changeSelectedNavLink(i));
            }
        }}>{i}</SingleLink>}
    </Link>)
}


