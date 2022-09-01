import { DivSeperation, Seperation } from "../../styles/constantLayout";
import { Link } from "react-router-dom";
import {OuterDiv,OptionIcon,LeftSection,ImageList,Img,Image,MainImg,RightSection,Heading,Brand,Pricing,Price,Discription,Cart,Icon,Amount,AddToCart,Label,Options,Links,SingleLink,OptionButton,Count,CartIcon,ImgOuter,ChoiceOptions,Labels,Selected,Dropper,Selector,DropIcon,ChoiceWrapper} from "../../styles/product/productLayoutStyle";
import { useDispatch,useSelector } from "react-redux";
import {countCounter,changeDropDown,changeCartButton} from '../../features/productFeatures/product/selectedProduct'
import { addItem } from "../../features/productFeatures/cart/cartSlice";
import { useFetch } from "../../customHooks/useFetch";
import { getBrands, getImages, getProductsUrl } from "../../constants/url";
import { changeSelectedImage} from '../../features/productFeatures/extras'
import { useEffect } from "react";

const ProductLayout = () => {
    const item = useSelector((store) => store.selectedProduct) 
    const {selectedImage} = useSelector((store) => store.dropDown)
    const dispatch = useDispatch();

    const [data] = useFetch(`${getProductsUrl}/${item.item._id}`)
    const [image] = useFetch(`${getImages}/${item.item.image}`)
    const [brand] = useFetch(`${getBrands}/${item.item.brand}`)

    return (
        <>
            <OuterDiv>
                <LeftSection>
                        <ImageList>
                            {image?.image.map((item,index) => {
                                return <ImgOuter check = {selectedImage} current={index}><Img key={index} src={item} alt = {data?.name} onClick={()=>dispatch(changeSelectedImage(index))}/></ImgOuter>
                            })}
                        </ImageList>
                        <Image>
                            <MainImg src={image?.image[selectedImage]} alt="product"/>
                        </Image>
                </LeftSection>
                <RightSection>
                    <Heading>
                        {data?.name}
                    </Heading>
                    <Brand>
                        {brand?.brand}
                    </Brand>
                    <Pricing>
                        <Price>
                            ${data?.price}
                        </Price>
                    </Pricing>
                    <Discription>
                        {data?.description}
                    </Discription>
                    <ChoiceOptions>
                        <ChoiceWrapper>
                            <Label>
                            Color:
                        </Label>
                        <Selector>
                                <Selected> {item.colorDropDown.value} </Selected>
                                <DropIcon onClick = {() => dispatch(changeDropDown([null,"color"]))} className="material-symbols-outlined">expand_more</DropIcon>
                            </Selector>
                        </ChoiceWrapper>
                            
                        <Dropper check = {item.colorDropDown.isOpen}>
                            {data?.color?.map((item,index) => {
                               return <Labels key={index} onClick = {() => {
                                dispatch(changeDropDown([item,"color"]));
                                dispatch(changeCartButton());
                            }}>{item}</Labels>
                            })}
                            </Dropper>
                    </ChoiceOptions>
                    <ChoiceOptions>
                        <ChoiceWrapper>
                        <Label>
                            Size:
                        </Label>
                            <Selector>
                                <Selected>{item.sizeDropDown.value}</Selected>
                                <DropIcon onClick = {() => dispatch(changeDropDown([null,"size"]))}  className="material-symbols-outlined">expand_more</DropIcon>
                            </Selector>
                        </ChoiceWrapper>
                        <Dropper check = {item.sizeDropDown.isOpen}>
                                {data?.size?.map((item,index) => {
                                return <Labels key={index} onClick = {() => {
                                    dispatch(changeDropDown([item,"size"]));
                                    dispatch(changeCartButton());
                                }}>{item}</Labels>
                            })}
                        </Dropper>
                    </ChoiceOptions>
                    <DivSeperation width={.1}/>
                    <Cart>
                        <Count>
                            <Icon className="material-symbols-outlined" onClick={() => dispatch(countCounter('minus'))}>
                                remove
                            </Icon>
                            <Amount>
                                {item.count}
                            </Amount>
                            <Icon className="material-symbols-outlined" onClick={() => dispatch(countCounter('plus'))}>
                                add
                            </Icon>
                        </Count>
        
                        { <Link to="/cart" style = {item.canAddToCart ? {textDecoration:"none"}:{pointerEvents:"none",textDecoration:"none"}} onClick={
                            () => {
                                dispatch(addItem(item))
                            }
                        }>
                            
                            <AddToCart check = {item.canAddToCart}>
                                <CartIcon className="material-symbols-outlined">
                                    shopping_bag
                                </CartIcon>
                               
                                <Label>
                                    Add to Cart
                                </Label>

                            </AddToCart>
                        </Link>}
                    </Cart>
                    <DivSeperation width={.1} />
                    <Options>
                        <Links>
                            <SingleLink icon="fa-brands fa-facebook-f" />
                            <SingleLink icon="fa-brands fa-twitter" />
                            <SingleLink icon="fa-brands fa-pinterest-p" />
                        </Links>
                        <Seperation />
                        <OptionButton>
                            <OptionIcon className ="material-symbols-outlined">
                                favorite
                            </OptionIcon>
                            <Label>
                                Add to WishList
                            </Label>
                        </OptionButton>
                        <OptionButton>
                            <OptionIcon className ="material-symbols-outlined">
                                balance
                            </OptionIcon>
                            <Label>
                                Add to Compare
                            </Label>
                        </OptionButton>
                    </Options>
                </RightSection>
            </OuterDiv>
        </>
    );
}

export default ProductLayout;

// (item.colorDropDown.value !== "Select an Option" && item.sizeDropDown.value !== "Select an Option")

