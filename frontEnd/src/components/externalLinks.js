import React from "react";
import { OuterLayout } from "../styles/constantLayout";
import brandscard from "../assets/brandscard.png"
import { OuterDiv, ThemeNameLeft, Links, LinksInner } from '../styles/externalLinksStyle';

const ExternalLinks = () => {
    return (
        <OuterLayout>
            <OuterDiv>
                <ThemeNameLeft>
                    @2022 riode-theme Powered by Shopify
                </ThemeNameLeft>
                <Links>
                    <LinksInner>
                        <img src={brandscard} alt="Other brands" style={{ height: "auto", width: "100%" }} />
                        <img src={brandscard} alt="Other brands" style={{ height: "auto", width: "100%" }} />
                        <img src={brandscard} alt="Other brands" style={{ height: "auto", width: "100%" }} />
                        <img src={brandscard} alt="Other brands" style={{ height: "auto", width: "100%" }} />
                        <img src={brandscard} alt="Other brands" style={{ height: "auto", width: "100%" }} />
                        <img src={brandscard} alt="Other brands" style={{ height: "auto", width: "100%" }} />
                        <img src={brandscard} alt="Other brands" style={{ height: "auto", width: "100%" }} />
                    </LinksInner>
                </Links>
            </OuterDiv>
        </OuterLayout>
    );
}

export default ExternalLinks;