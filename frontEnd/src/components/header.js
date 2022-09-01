import React from "react";
import  {OuterDiv,ScrollText,HeaderLinks,SingleLink,InnerDiv,OuterScroll,Seperation,LinkLabel} from '../styles/headerStyle';
import {headerMessage} from '../constants/DisplayTexts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () =>{

    return (
        <OuterDiv>
            <InnerDiv>
                <OuterScroll>
                    <ScrollText>
                        {headerMessage}
                    </ScrollText>
                </OuterScroll>
                <HeaderLinks>
                    <SingleLink>
                        <LinkLabel>Account</LinkLabel>
                        <FontAwesomeIcon icon="fa-solid fa-angle-down" style={{color:'grey'}}/>
                    </SingleLink>
                    <SingleLink>
                        <LinkLabel>Eur</LinkLabel>
                        <FontAwesomeIcon icon="fa-solid fa-angle-down" style={{color:'grey'}}/>
                    </SingleLink>
                    <Seperation />
                    <SingleLink>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color:'grey'}}/>
                        <LinkLabel>Contact</LinkLabel>
                    </SingleLink>
                    <SingleLink>
                    <FontAwesomeIcon icon="fa-solid fa-info" style={{color:'grey'}}/>
                       <LinkLabel>Need Help</LinkLabel>
                    </SingleLink>
                    <SingleLink>
                    <FontAwesomeIcon icon="fa-solid fa-user-large" style={{color:'grey'}}/>
                        <LinkLabel>Sign in / Register</LinkLabel>
                    </SingleLink>
                </HeaderLinks>
            </InnerDiv>
        </OuterDiv>

    );

}

export default Header;