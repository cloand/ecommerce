import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OuterDiv,ProductSection,Heading,Description,ProductDiv,LeftImage,RightDisc,Label,Price,Star} from "../styles/displayProductStyle";
import top from '../assets/top.webp'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDropDown, changeProduct } from "../features/productFeatures/product/selectedProduct";
import { getProductsUrl } from "../constants/url";

const DisplayProduct = ({arr,heading}) => {
    // console.log(arr);
        return (
            <OuterDiv>
            <ProductSection>
                <Heading>
                    {heading}
                </Heading>
                <Description>
                    {arr.map((i,index)=>{
                        
                        return (
                            <ProductList key ={index} disc = {i} />
                        );
                    })}
                </Description>
            </ProductSection>
        </OuterDiv>
        );
}

export default DisplayProduct;

const ProductList = ({disc}) => {
    
    const dispatch = useDispatch();
    const {name,price} = disc;

    return (
        <Link to={`${getProductsUrl}/${disc.slug}`} state={{"_id":disc._id}} onClick={() => {
                dispatch(changeProduct(disc));
                dispatch(changeDropDown(null));
            }} style={{textDecoration:"none",color:"black"}}>
        <ProductDiv>
            
            <LeftImage>
                <img src={top} alt={"product"} style={{width:"100%",height:"100%"}}/>
            </LeftImage>
            <RightDisc>
                <Label>
                    {name}
                </Label>
                <Price>
                    $ {price}
                </Price>
                <Star>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                </Star>
            </RightDisc>
        </ProductDiv>
            </Link>
    );

}