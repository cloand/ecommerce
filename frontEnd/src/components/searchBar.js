import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flipcart from "../assets/flipcart.png"
import {OuterDiv,IconOuter,Icon,IconText,Search,CallIcon,CallDisc,CaptionText,Number,CartIcon,InputText,SearchIcon,RightLinks,Call,Heart,HeartIcon,CartOption,CartLeft,CartLabel} from "../styles/searchStyle";
import { OuterLayout,Seperation} from "../styles/constantLayout";
import { useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { calculateValues } from "../features/productFeatures/cart/cartSlice";
import { Link } from "react-router-dom";



const SearchBar = () => {
    const {count,items,amount} = useSelector((store) => store.cart);
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
            <InputText placeholder={"Search In..."}/>
             <SearchIcon>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{width:"40px",height:"20px",color:"black"}}/>
             </SearchIcon>
        </Search>
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
            <CartOption>
                <CartLeft>
                    <CartLabel>
                        Shopping Cart
                    </CartLabel>
                    <Number>
                        ${amount}
                    </Number>
                </CartLeft>
               <Link to = "/cart">
                    <CartIcon count = {count}>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style = {{width:"30px",height:"40px",color:"black"}}/>
                    </CartIcon>
                </Link>
            </CartOption>
        </RightLinks>
    </OuterDiv>
    </OuterLayout>
    );
}

export default SearchBar;