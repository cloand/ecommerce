import React from "react";
import flipcart from "../assets/flipcart.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {OuterDiv,LeftIcon,RightSection,LeftDisc,Heading,Disc,Search,SearchInput,SubscribeButton,Label,Icon} from "../styles/footerSearchStyle"
import { Link } from "react-router-dom"; 

const FooterSearch = () => {
    return (
        <OuterDiv>
        
            <LeftIcon >
            <Link to={`/`}><img src={flipcart} alt="logo" style={{width:"100%",height:"auto"}}/></Link>
            </LeftIcon>
        
        <RightSection>
            <LeftDisc>
                <Heading>
                    Subscribe to our Newsletter
                </Heading>
                <Disc>
                    Get all the latest information , Sales and Offers.
                </Disc>
            </LeftDisc>
            <Search>
                <SearchInput placeholder="Email Address Here..."/>
                <SubscribeButton>
                    <Label>
                        SUBSCRIBE
                    </Label>
                    <Icon>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                    </Icon>
                </SubscribeButton>
            </Search>
        </RightSection>
    </OuterDiv>
    );
}

export default FooterSearch;