import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OuterLayout } from "../styles/constantLayout";
import { OuterDiv, Section,LeftStyleSection,Heading,Disc,Block,Button,Caption,Icon,CenterStyleSection,CentreButton,RightStyleSection} from "../styles/salesCardStyle";
import forMens from '../assets/forMensCard.jpg'
import forFashionCard from '../assets/forFashionCard.jpeg'
import black from '../assets/black.webp'
import { Link } from "react-router-dom";
import { getCategories,getProductsUrl } from "../constants/url";
import { useDispatch } from "react-redux";
import { checkCategory, getAllProducts } from "../features/productFeatures/productSlice";


const SalesCard = ({categories}) => {
    const dispatch = useDispatch()

    return (
        <OuterLayout>
        <OuterDiv>
            <Section image = {forMens}>
        <Link to={`${getCategories}/for-men-s`} style={{textDecoration:"none",color:"inherit",border:"2px solid black"}} onClick = {() => dispatch(checkCategory([categories[0]._id,categories[0].name]))}>
                <LeftStyleSection>
                    <Heading>
                        For Men's
                    </Heading>
                    <Disc>
                        STARTING AT $29,00
                    </Disc>
                    <Block />

                    <Button>
                        <Caption>
                            SHOP NOW
                        </Caption>
                        <Icon>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                        </Icon>
                    </Button>
                </LeftStyleSection>
                
            </Link>
            </Section >
            <Section image={black}>
            <Link to={`${getProductsUrl}`} style={{textDecoration:"none",color:"inherit"}} onClick = {() => {
                dispatch(getAllProducts());
                dispatch(checkCategory("Products"))
            }} >
            <CenterStyleSection>
                <Disc>
                    Up to 20% off
                </Disc>
                    <Heading>
                        Black Friday Sale
                    </Heading>
                    <CentreButton>
                       <Caption>
                            SHOP NOW
                       </Caption>
                       <Icon>
                       <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                       </Icon>
                    </CentreButton>
            </CenterStyleSection>
            </Link>
            </Section>
            <Section image={forFashionCard}>
                <Link to={`${getCategories}/women-s-collection`} style={{textDecoration:"none",color:"inherit"}} onClick = {() => dispatch(checkCategory([categories[2]._id,categories[2].name]))}>
                <RightStyleSection>
                    <Heading>
                        Women's Collection
                    </Heading>
                    <Disc>
                        30% OFF
                    </Disc>
                    <Block />

                    <Button>
                        <Caption>
                            Shop Now
                        </Caption>
                        <Icon>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                        </Icon>
                    </Button>
                </RightStyleSection>
                </Link>
            </Section>
        </OuterDiv>
    </OuterLayout>
    )
}

export default SalesCard;