import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OuterDiv,Image,BottomSection,Brand,Name,Price,Review } from "../../styles/allProducts/gridViewStyles";
import { useFetch } from "../../customHooks/useFetch";
import { getBrands, getImages, getProductsUrl } from "../../constants/url";

const GridView = ({items}) => {
    const [data] = useFetch(`${getProductsUrl}/${items?._id}`)
    const [brand] = useFetch(`${getBrands}/${items?.brand}`)
    const [image] = useFetch(`${getImages}/${items?.image}`)

   
    return (
            <>
                <OuterDiv >
                    <Image>
                        <img src={image?.image[0] ?? "#"} alt="product" style={{height:"auto",width:"100%"}}/>
                    </Image>
                    <BottomSection>
                        <Brand>
                            {brand?.name}
                        </Brand>
                        <Name>
                            {data?.name}
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