import React from "react";
import { DivSeperation, ExpandedLayout, OuterLayout } from "../styles/constantLayout";
import FooterContact from "./footerContact";
import FooterSearch from "./footerSearch";
import { OuterDiv } from "../styles/footerStyle";
import ExternalLinks from "./externalLinks";

const Footer = () => {

    return (
        <ExpandedLayout color="black">
            <OuterLayout>
                <OuterDiv>
                    <FooterSearch />
                    <DivSeperation />
                    <FooterContact />
                    <DivSeperation />
                    <ExternalLinks />
                </OuterDiv>
            </OuterLayout>
        </ExpandedLayout>
        
    )
}

export default Footer;