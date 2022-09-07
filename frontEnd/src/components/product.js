import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OuterDiv,TopSection,Heading,BottomSection ,ProductDiv,ImageSection,DiscSection,Type,Name,Cost,Ratings} from "../styles/productStyle";
import { ProductImage,ProductImageHover,TextHover,ImageHover,Image,ImageOuter} from "../styles/constantLayout";
import { OuterLayout } from "../styles/constantLayout";
import { getFeatured,getBestSellers} from "../features/productFeatures/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useFetch } from "../customHooks/useFetch";
import GetBrands from "./getBrands";
import { getImages, getProductsUrl } from "../constants/url";
import { changeProduct ,changeDropDown} from "../features/productFeatures/product/selectedProduct";
import { changeQuickView } from "../features/productFeatures/extras";


const Featured = ({arr,headText}) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(headText === "Best Sellers"){
            dispatch(getBestSellers())
        }else{
            dispatch(getFeatured())
        }
        
    },[])

    return (
        <OuterLayout>
            <OuterDiv>
            <TopSection>
            <Heading>
                {headText}
            </Heading>
        </TopSection>
            <BottomSection>
                {
                arr.map((item, index) => {
                       return <ProductCard key={index} arr={item} />
                    })
                }
            </BottomSection>
        </OuterDiv>
        </OuterLayout>
        
    );
}

export default Featured;

const ProductCard = ({arr}) => {
    const [data] = useFetch(`${getProductsUrl}/${arr._id}`)
    const [image] = useFetch(`${getImages}/${arr.image}`)
    const dispatch = useDispatch();

    if(!data){
        return <>"loading"</>
    }
   
    return (
            <ProductDiv>
                
                <ImageOuter>
                        <Image>
                            <ImageHover>
                            <Link to = {`${getProductsUrl}/${arr.slug}`} style = {{textDecoration:"none"}} state={{"_id":arr._id}} onClick={() => {
                                dispatch(changeProduct(arr));
                                dispatch(changeDropDown(null));
                            }}>
                                <ProductImageHover>
                                    <img src={image?.image[0] ?? "#"} alt="product" style={{height:"auto",width:"100%",scale:"1"}}/>
                                </ProductImageHover>
                                </Link>
                                <TextHover onClick ={() => {
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
                <DiscSection>
                        {<Type style = {{textTransform:"capitalize"}}>
                            <GetBrands data = {data} />
                        </Type>}
                    
                    <Name>
                    <Link to = {`${getProductsUrl}/${arr.slug}`} style = {{textDecoration:"none",color:"inherit"}} state={{"_id":arr._id}} onClick={() => {
                                dispatch(changeProduct(arr));
                                dispatch(changeDropDown(null));
                            }}>
                        {data.name}
                        </Link>
                    </Name>
                    <Cost>
                        ${data.price}
                    </Cost>
                    <Ratings>
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                    </Ratings>
                </DiscSection>
                
            </ProductDiv>
        
    )
}

{/* <Link to={`${getProductsUrl}/${arr.slug}`} style={{textDecoration:"none"}} onClick={() => {
                            dispatch(changeProduct(data));
                            dispatch(changeDropDown(null));
                            }}> */}
                {/* <ImageSection>
                    <img src={image?.image[0]} style={{height:"auto",width:"100%"}} alt="product"/>
                </ImageSection> */}

                {/* </Link> */}