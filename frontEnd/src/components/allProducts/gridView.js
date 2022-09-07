import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OuterDiv,BottomSection,Brand,Name,Price,Review} from "../../styles/allProducts/gridViewStyles";
import { ImageOuter, Image,ImageHover,TextHover,ProductImageHover,ProductImage,AbsoluteDiv,QuickView} from "../../styles/constantLayout";
import { useFetch } from "../../customHooks/useFetch";
import { getBrands, getImages, getProductsUrl } from "../../constants/url";
import { CartOnProductHover } from "../../styles/constantLayout";
import ProductLayout from "../product/productLayout";
import { changeProduct } from "../../features/productFeatures/product/selectedProduct";
import { Link } from "react-router-dom";
import { changeQuickView } from "../../features/productFeatures/extras";
import { useDispatch, useSelector } from "react-redux";
import { changeDropDown } from "../../features/productFeatures/product/selectedProduct";

const GridView = ({items}) => {
    const [data] = useFetch(`${getProductsUrl}/${items?._id}`)
    const [brand] = useFetch(`${getBrands}/${items?.brand}`)
    const [image] = useFetch(`${getImages}/${items?.image}`)
    const dispatch = useDispatch()



    return (
        <>
                <OuterDiv >
                <ImageOuter>
                        <Image>
                            <ImageHover>
                            <Link to = {`${getProductsUrl}/${items.slug}`} style = {{textDecoration:"none"}} state={{"_id":items._id}} onClick={() => {
                                dispatch(changeProduct(items));
                                dispatch(changeDropDown(null));
                            }}>
                                <ProductImageHover>
                                    <img src={image?.image[0] ?? "#"} alt="product" style={{height:"auto",width:"100%",scale:"1"}}/>
                                </ProductImageHover>
                                </Link>
                                <TextHover onClick={()=>{
                                    dispatch(changeQuickView())
                                    dispatch(changeProduct(data));
                                    dispatch(changeDropDown(null));
                                }}>
                                    Quick View
                                </TextHover>
                            </ImageHover>
                                <ProductImage>
                                    <img src={image?.image[0] ?? "#"} alt="product" style={{height:"auto",width:"100%"}}/>
                                </ProductImage>
                        </Image>
                    </ImageOuter>
                    <BottomSection>
                        <Brand>
                            <Link to = {`${getProductsUrl}/${items.slug}`} style = {{textDecoration:"none",color:"inherit"}} state={{"_id":items._id}} onClick={() => {
                                // console.log({item},'test')
                                dispatch(changeProduct(items));
                                dispatch(changeDropDown(null));
                                // debugger;
                            }}>
                            {brand?.name}
                            </Link>
                        </Brand>
                        <Name>
                            <Link to = {`${getProductsUrl}/${items.slug}`} style = {{textDecoration:"none",color:"inherit"}} state={{"_id":items._id}} onClick={() => {
                                // console.log({item},'test')
                                dispatch(changeProduct(items));
                                dispatch(changeDropDown(null));
                                // debugger;
                            }}>
                            {data?.name}
                            </Link>
                        </Name>
                        <Price>
                           {data?.price}
                        </Price>
                        <Review>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </Review>
                    </BottomSection>
                </OuterDiv>
            </>
    );
}

export default GridView;