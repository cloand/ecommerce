import { useDispatch,useSelector} from "react-redux"
import { getImages } from "../../constants/url"
import { useFetch } from "../../customHooks/useFetch"
import { changeDropDown, countCounter } from "../../features/productFeatures/product/selectedProduct"
import { DivSeperation } from "../../styles/constantLayout"
import {OuterDiv,InnerDiv,CloseSection,DiscSection,Name,Choices,LeftSection,Image,RightSection,Color,Heading,Size,Quantity,Label,Button,Icon,Count,CurrentColor,SingleColor,SingleSize,AddToCart,Text,OuterColor,OuterSize,LabelText} from '../../styles/allProducts/cartModal'
import { QuickViewOuter } from "../../styles/constantLayout"
import { useEffect } from "react"
import { changeListViewCart } from "../../features/productFeatures/extras"
import { addItem } from "../../features/productFeatures/cart/cartSlice"
import { Link } from "react-router-dom"

const CartModal = () => {
    const item = useSelector((store) => store.selectedProduct)
    const dispatch = useDispatch()

    const [image] = useFetch(`${getImages}/${item.item.image}`)

    return (
        <>
        <QuickViewOuter className="material-symbols-outlined" onClick={() => {
                dispatch(changeListViewCart(false))
            }}>
                close
            </QuickViewOuter>
            <OuterDiv>
            
                <InnerDiv>
                    <CloseSection>

                    </CloseSection>
                    <DiscSection>
                        <Name>
                            {item.item.name}
                        </Name>
                        <DivSeperation width={.01} />
                        <Choices>
                            <LeftSection>
                                <Image src= {image?.image[0]}/>
                            </LeftSection>
                            <RightSection>
                                <Color>
                                    <Heading>
                                        <LabelText>
                                            Color:
                                        </LabelText>
                                        <CurrentColor>
                                            {item.colorDropDown.value}
                                        </CurrentColor>
                                    </Heading>
                                    <OuterColor>
                                    {
                                        item.item.color.map((color,index) => {
                                           return(<SingleColor color={color} check = {item.colorDropDown.value}onClick={()=>{
                                                dispatch(changeDropDown([color,"color"]))
                                            }} />)
                                        })
                                    }
                                    </OuterColor>
                                </Color>
                                <Size>
                                    <Heading>
                                        Size:
                                    </Heading>
                                    <OuterSize>
                                    {
                                        item.item.size.map((size,index) => {
                                            return(<SingleSize size = {size} check = {item.sizeDropDown.value} onClick={()=>{
                                                dispatch(changeDropDown([size,'size']))
                                            }}>{size}</SingleSize>)
                                        })
                                    }
                                    </OuterSize>
                                </Size>
                                <Quantity>
                                    <Label>
                                        Qty:
                                    </Label>
                                    <Button>
                                        <Icon className="material-symbols-outlined" onClick={()=>{
                                            dispatch(countCounter('minus'))
                                        }}>
                                            remove
                                        </Icon>
                                        <Count>
                                            {item.count}
                                        </Count>
                                        <Icon className="material-symbols-outlined" onClick={()=>{
                                            dispatch(countCounter('plus'))
                                        }}>
                                            add
                                        </Icon>
                                    </Button>
                                </Quantity>
                            </RightSection>
                        </Choices>
                        <Link to='/cart' style={{textDecoration:"none",color:"inherit"}}>
                            <AddToCart onClick = {() => {
                                dispatch(addItem(item));
                                dispatch(changeListViewCart(false))
                            }}>
                                <Text>
                                    ADD TO CART
                                </Text>
                            </AddToCart>
                        </Link>
                    </DiscSection>
                </InnerDiv>
            </OuterDiv>
        </>
    )
}

export default CartModal