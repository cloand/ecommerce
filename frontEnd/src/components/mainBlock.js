import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ExpandedLayout, OuterLayout} from '../styles/constantLayout'
import { OuterDiv,LeftSection,TopCaption,CaptionSpan,BoldHeading,Heading,HeadingDisc,ShopButton,Text,ShopIcon} from "../styles/mainBlockStyle";
import { Link } from "react-router-dom";
import { getProductsUrl } from "../constants/url";

const MainBlock = ({position,image}) => {
    return (
       
            <ExpandedLayout image = {image}>
            <OuterLayout>
                <OuterDiv>
                    <LeftSection position = {position}>
                        <TopCaption>
                            Buy 2 Get 
                            <CaptionSpan>
                            <FontAwesomeIcon icon="fa-solid fa-star" style={{height:"30px",width:"20px",padding:" 0 .5em"}} spin/>
                                1 free
                                <FontAwesomeIcon icon="fa-solid fa-star" style={{height:"30px",width:"20px",padding:" 0 .5em"}} spin/>
                            </CaptionSpan>
                            
                        </TopCaption>
                     
                        <BoldHeading>
                            Fashionable
                        </BoldHeading>
                        <Heading>
                            Collection
                        </Heading>
                       
                        <HeadingDisc>
                            Get Free Shipping on all orders over $99,00
                        </HeadingDisc>
                       <Link to={`${getProductsUrl}`} style={{textDecoration:"none"}}>
                            <ShopButton>
                                <Text>
                                    ShopNow
                                </Text>
                                <ShopIcon>
                                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                                </ShopIcon>
                            </ShopButton>
                       </Link>
                    </LeftSection>
                </OuterDiv>
            </OuterLayout>
            </ExpandedLayout>
        
    );
}

export default MainBlock;
