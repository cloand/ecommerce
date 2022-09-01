import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ExpandedLayoutWithBlueGradient, OuterLayout } from "../styles/constantLayout";
import {OuterDiv,HeadCaption,HeadSpan,Heading,Caption,Button,Label,Icon} from '../styles/seasonSalesStyles'
import clothes from "../assets/clothes.jpeg"
import { Link } from "react-router-dom";
import { getProductsUrl } from "../constants/url";
import {changeCurrentCategory} from '../features/productFeatures/product/selectedCategory'
import { checkCategory, getAllProducts } from "../features/productFeatures/productSlice";

const SeasonSale = () => {
    const dispatch = useDispatch();

   return (
    <ExpandedLayoutWithBlueGradient image={clothes}>
        <OuterLayout>
    <OuterDiv>
        <HeadCaption>
            Extra 
            <HeadSpan>
            <FontAwesomeIcon icon="fa-solid fa-star" style={{height:"30px",width:"20px",padding:" 0 .5em"}} spin/>
                30 Off
                <FontAwesomeIcon icon="fa-solid fa-star" style={{height:"30px",width:"20px",padding:" 0 .5em"}} spin/>
            </HeadSpan>
            Online
        </HeadCaption>
        <Heading>
            Summer Season Sale
        </Heading>
        <Caption>
            Free shipping on orders over $99,00
        </Caption>
        <Link to={`${getProductsUrl}`} style={{textDecoration:"none"}} onClick={()=>{
            dispatch(getAllProducts())
            dispatch(checkCategory("Products"))
        }}>
            <Button>
                <Label>
                    Shop Now
                </Label>
                <Icon>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                </Icon>
            </Button>
        </Link>
    </OuterDiv>
    </OuterLayout>
</ExpandedLayoutWithBlueGradient>
   );
} 

export default SeasonSale;