import { DivSeperation, OuterLayout } from "../../styles/constantLayout";
import {OuterDiv,Products,Headings,Heading,Product,Checkout,MainLabel,Section,Label,Number,Address,Button,Icon,CalculateButton,LeftInput,RightCalculate,BlueLabel,CheckoutButton,Img,Quantity,Price,Cancel,BluePrice,Count,DiscOuter,ProductHeading,Total,CountrySection,ExpandedLabel,ChoiceButton,ChoiceSection,DropDown} from '../../styles/cart/nonEmptyCartStyle';
import {removeItem,increamentCount,decreamentCount} from "../../features/productFeatures/cart/cartSlice.js"
import { useSelector,useDispatch} from "react-redux";
import top from '../../assets/top.webp';
import Instruction from "./instruction";
import {changeAddressDropDown} from '../../features/productFeatures/extras'

const NonEmptyCart = () => {
   const {items,amount,count} = useSelector((store) => store.cart);
   const {cartAddress} = useSelector((store) => store.dropDown)
   const dispatch = useDispatch()

    return(
        <>
            <OuterLayout>
                <OuterDiv>
                    <Products>
                        <Headings>
                            <ProductHeading>
                                Product
                            </ProductHeading>
                            <Heading>
                                Price
                            </Heading>
                            <Heading>
                                Quantity
                            </Heading>
                            <Heading>
                                Total
                            </Heading>
                        </Headings>
                        <DivSeperation width=".15" />
                        <Product>
                            {items.map((items,index)=>{
                                return(
                                    <>
                                        <Disc key={index} items={items} amount={amount} count={count} img={top}/>
                                    </>
                                )
                            })}
                        </Product>
                        <Instruction />
                    </Products>
                    <Checkout>
                        <MainLabel>
                            Cart Total
                        </MainLabel>
                        <DivSeperation width={.01}/>
                        <Section>
                            <Label>
                            Subtotal:
                            </Label>
                            <Number>
                                ${amount}
                            </Number>
                        </Section>
                        <DivSeperation width={.01}/>
                        <Section>
                            <Label>
                                Shipping:
                            </Label>
                        </Section>
                        <CountrySection>
                            <ExpandedLabel>
                                Estimate for Your Country
                            </ExpandedLabel>
                            <Address onClick={()=>{
                                dispatch(changeAddressDropDown())
                            }}>
                                Change Address
                            </Address>
                        </CountrySection>
                        <DropDown check = {cartAddress}>
                        <Section>
                            <ChoiceButton>
                                <Label>
                                    Bangladesh
                                </Label>
                                <Icon className = "material-symbols-outlined">
                                    expand_more
                                </Icon>
                            </ChoiceButton>
                        </Section>
                        <ChoiceSection>
                            <CalculateButton>
                                <LeftInput placeholder="Zip/Postal Code" />
                                <RightCalculate>
                                    Calculate
                                </RightCalculate>
                            </CalculateButton>
                        </ChoiceSection>
                        </DropDown>
                        <DivSeperation width={.01}/>
                        <Section>
                            <BlueLabel>
                                Total
                            </BlueLabel>
                            <BluePrice>
                                ${amount}
                            </BluePrice>
                        </Section>
                        <DivSeperation width={.01} />
                        <CheckoutButton>
                            GO TO CHECKOUT
                        </CheckoutButton>
                    </Checkout>        
                </OuterDiv>
            </OuterLayout>
        </>
    );
}

export default NonEmptyCart;

export const Disc = ({items,amount,count,img}) => {
    const dispatch = useDispatch();
    const {itemCount,totalPrice} = items;
    const {name,price} = items.item;

    return (
        <DiscOuter>
            <Img src = {img} alt="product"/>
            <Label>{name}</Label>
            <Quantity>
                    <Price>
                        ${price}
                    </Price>
                <Button>
                    <Icon className = "material-symbols-outlined" onClick={() => dispatch(decreamentCount(items))}>
                        remove
                    </Icon>
                    
                    <Count>
                        {itemCount}
                    </Count>
                    <Icon className = "material-symbols-outlined" onClick={()=>dispatch(increamentCount(items))}>
                        add
                    </Icon>
                </Button>
                <Total>
                    ${totalPrice}
                </Total>
                <Cancel>
                    <Icon className = "material-symbols-outlined" onClick={() => dispatch(removeItem(items))}>
                        close
                    </Icon >
                </Cancel>
            </Quantity>
        </DiscOuter>
    );
}