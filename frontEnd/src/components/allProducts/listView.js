import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBrands, getImages, getProductsUrl } from "../../constants/url";
import { useFetch } from "../../customHooks/useFetch";
import { Brand,OuterDiv,Image,RightSection,Name,Price,Content,Colors,Size,CartButton,Icon,Label,SingleColor,SingleSize ,Review,ImageOuter} from "../../styles/allProducts/listView"; 
import { useDispatch, useSelector } from "react-redux";
import { changeDropDown ,changeProduct} from "../../features/productFeatures/product/selectedProduct";
import { changeListViewCart } from "../../features/productFeatures/extras";
import { Link } from "react-router-dom";

const ListView = ({items}) => {
    const [data] = useFetch(`${getProductsUrl}/${items._id}`)
    const [image] = useFetch(`${getImages}/${items.image}`)
    const [brand] = useFetch(`${getBrands}/${items.brand}`)
    const dispatch = useDispatch();

    const [color,setColor] = useState(data?.color[0])
    const [size,setSize] = useState(data?.size[0])

    useEffect(()=>{
        data && setColor(data.color[0])
        data && setSize(data.size[0])
    },[data])


    return (
        <>
            <OuterDiv>
                <ImageOuter>
            <Link to = {`${getProductsUrl}/${items.slug}`} style = {{textDecoration:"none"}} onClick={() => {
                                dispatch(changeProduct(items));
                                dispatch(changeDropDown(null));
                            }}>
                <Image src={image?.image[0]} alt={"product"} /> 
                </Link>
                </ImageOuter>
                <RightSection>
                    <Link to = {`${getProductsUrl}/${items.slug}`} style = {{textDecoration:"none",color:"inherit"}} onClick={() => {
                                dispatch(changeProduct(items));
                                dispatch(changeDropDown(null));
                            }}>
                    <Brand>
                        {brand?.name}
                    </Brand>
                    <Name>
                        {data?.name}
                    </Name>
                    </Link>
                    <Price>
                        ${data?.price}
                    </Price>
                    <Review>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                    </Review>
                    <Content>
                        {data?.description}
                    </Content>
                    <Colors>
                        {data?.color.map((item,index) => {
                            return <SingleColor color={item} check = {color} onClick = {() =>{
                                setColor(item);
                            }}/>
                        })}
                    </Colors>
                    <Size>
                        {data?.size.map((item,index) => {
                            return <SingleSize check = {size} size = {item} onClick = {() => {
                                setSize(item)
                            }}>{item}</SingleSize>
                        })}
                    </Size>
                    <CartButton onClick = {()=>{
                        dispatch(changeProduct(data));
                        dispatch(changeDropDown([color,'color']));
                        dispatch(changeDropDown([size,'size']));
                        dispatch(changeListViewCart())
                    }}>
                        <Icon className="material-symbols-outlined">
                            shopping_bag
                        </Icon>
                        <Label>
                            Add To Cart
                        </Label>
                    </CartButton>
                </RightSection>
            </OuterDiv>
        </>
    );
}

export default ListView;