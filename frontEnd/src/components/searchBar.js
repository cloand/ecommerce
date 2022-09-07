import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flipcart from "../assets/flipcart.png"
import {OuterDiv,IconOuter,Icon,IconText,Search,CallIcon,CallDisc,CaptionText,Number,CartIcon,InputText,SearchIcon,RightLinks,Call,Heart,HeartIcon,CartOption,CartLeft,CartLabel,DropInner,SearchDrop,SearchDiv,LeftImage,RightSection,Name,Review,Star,Price} from "../styles/searchStyle";
import { OuterLayout,Seperation} from "../styles/constantLayout";
import { useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { calculateValues } from "../features/productFeatures/cart/cartSlice";
import { Link } from "react-router-dom";
import { changeActive } from "../features/productFeatures/extras";
import { changeQuery } from "../features/search/search";
import { getDataGroupBy } from "rsuite/esm/utils";
import { getSearchQuery } from "../extras/searchQuery";
import { getImages } from "../constants/url";
import { getProductsUrl } from "../constants/url";
import {useFetch} from '../customHooks/useFetch'


const SearchBar = () => {
    const {count,items,amount} = useSelector((store) => store.cart);
    const {active} = useSelector((store) => store.dropDown)
    const {query} = useSelector((store) => store.search)
    const [data] = useFetch(`${getProductsUrl}?name=${query}`)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(calculateValues());
    },[items])

    return (
        <OuterLayout>
        <OuterDiv>
        <IconOuter>
            <Link to="/">
            <Icon>
                <img src={flipcart} alt = "icon" style={{width:"100%",height:"auto"}}/>
            </Icon>
            <IconText />
            </Link>

        </IconOuter>
        <Search>
            <InputText placeholder={"Search In..."} value={query} onChange={(e) => {
                dispatch(changeQuery(['value',e.target.value]));
                dispatch(changeQuery(['data',data]))
                }}/>
            <Link to="/search">
             <SearchIcon>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{width:"40px",height:"20px",color:"black"}}/>
             </SearchIcon>
             </Link>
       </Search>
        {query !== '' && <SearchDrop>
            <DropInner>
                {data?.map((item,index) => {
                    return <SearchTile item = {item} key = {index}/>
                })}
            </DropInner>
        </SearchDrop>}
        <RightLinks>
            <Call>
                <CallIcon>
                    <FontAwesomeIcon icon="fa-solid fa-phone" style = {{width:"30px",height:"40px",color:"black"}}/>
                </CallIcon>
                <CallDisc>
                    <CaptionText>
                        Call Us Now
                    </CaptionText>
                    <Number>
                        0(800)123-456
                    </Number>
                </CallDisc>
            </Call>
            <Seperation/>
            <Heart>
                <HeartIcon>
                    <FontAwesomeIcon icon="fa-solid fa-heart" style = {{width:"30px",height:"40px",color:"black"}}/>
                </HeartIcon>
            </Heart>
            <Seperation/>
            <Link to = "/cart" style = {{textDecoration:"none",color:"inherit"}}>
            <CartOption check = {active} onClick={()=>dispatch(changeActive("/cart"))}>
                <CartLeft>
                    <CartLabel>
                        Shopping Cart
                    </CartLabel>
                    <Number>
                        ${amount}
                    </Number>
                </CartLeft>
               
                    <CartIcon count = {count}>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style = {{width:"30px",height:"40px",color:"black"}}/>
                    </CartIcon>
            </CartOption>
                </Link>
        </RightLinks>
    </OuterDiv>
    </OuterLayout>
    );
}

export default SearchBar;

const SearchTile = ({item}) => {
    const [image] = useFetch(`${getImages}/${item.image}`)

    return (
        <>
            <SearchDiv>
                <LeftImage src={image?.image[0]} />
                <RightSection>
                    <Name>
                        {item.name}
                    </Name>
                    <Review>
                        <Star className="material-symbols-outlined">
                            star
                        </Star>
                        <Star className="material-symbols-outlined">
                            star
                        </Star>
                        <Star className="material-symbols-outlined">
                            star
                        </Star>
                        <Star className="material-symbols-outlined">
                            star
                        </Star>
                        <Star className="material-symbols-outlined">
                            star
                        </Star>
                    </Review>
                    <Price>
                        ${item.price}
                    </Price>
                </RightSection>
            </SearchDiv>
        </>

    )
}