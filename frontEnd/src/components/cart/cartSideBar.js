import { useSelector } from "react-redux";
import { DivSeperation } from "../../styles/constantLayout";
import shoe1 from '../../assets/shoe1.jpg';
import {OuterDiv,Header,Label,Button,CloseLabel,Icon,CartItems,BottomSection,HeaderIcons,Total,Text,Price,Terms,Info,Check,Span,CartButton,CheckoutButton,LeftImage,RightDisc,Img,Heading,Count,CrossButton,TopSection} from "../../styles/cart/cartSideBarStyle";
import { Link } from "react-router-dom";


const CartSideBar = () => {

    const {items,amount,terms} = useSelector((store) => store.cart)

    return (
        <OuterDiv>
            <TopSection>
                <Header>
                    <Label>
                        SHOPPING CART
                    </Label>
                    <Button>
                        <CloseLabel>
                            CLOSE
                        </CloseLabel>
                        <Icon className="material-symbols-outlined">
                            arrow_forward
                        </Icon>
                    </Button>
                </Header>
                <DivSeperation width={.1} />
                <CartItems>
                    {items.map((item,index) => {
                        return <Items key = {index} item = {item} />
                    })}
                </CartItems>
                <DivSeperation width={.1} />
            </TopSection>
            <BottomSection>
                <HeaderIcons>
                    <Icon className="material-symbols-outlined">
                        chat_bubble
                    </Icon>
                    <Icon className="material-symbols-outlined">
                        redeem
                    </Icon>
                    <Icon className="material-symbols-outlined">
                        local_shipping
                    </Icon>
                </HeaderIcons>
                <DivSeperation width={.1} />
                <Total>
                    <Text>
                        Subtotal:
                    </Text>
                    <Price>
                        ${amount}
                    </Price>
                </Total>
                <Terms>
                    <Info>
                        Taxes Calculated at checkout <br/>
                        <Check input="checkbox" value={terms} />
                        <Label >I accept the <Span>Terms / Privacy Policy.</Span></Label>
                    </Info>
                </Terms>
                <DivSeperation width={.1} />
                <Link to="/cart" style={{textDecoration:"none",color:"black"}}>
                    <CartButton>
                        View Cart
                    </CartButton>
                </Link>
                <CheckoutButton>
                    GO TO CHECKOUT
                </CheckoutButton>
            </BottomSection>
        </OuterDiv>
    );
}

export default CartSideBar;

const Items = ({item}) => {
    const {label,price,brand,itemCount} = item;
    
    return (
        <>
            <LeftImage>
                <Img src={shoe1} alt="cart items" />
            </LeftImage>
            <RightDisc>
                <Heading>
                    {label}
                </Heading>
                <Price>
                    ${price}
                </Price>
                <Button>
                    <Icon className="material-symbols-outlined">
                        remove
                    </Icon>
                    <Count>
                        {itemCount}
                    </Count>
                    <Icon className="material-symbols-outlined">
                        add
                    </Icon>
                </Button>
            </RightDisc>
            <CrossButton>
                <Icon className="material-symbols-outlined">
                    close
                </Icon>
            </CrossButton>
        </>
    );
}