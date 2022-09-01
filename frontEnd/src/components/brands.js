import React from "react";
import puma from "../assets/puma.png"
import { OuterLayout, DivSeperation } from "../styles/constantLayout";
import {BrandsSection,BrandsLogo} from "../styles/brandsStyle"

const Brands = () =>{
    return (
        <OuterLayout>
            <DivSeperation />
                <BrandsSection>
                    <BrandsLogo>
                        <img src = {puma} alt={"brand"} style={{height:"auto",width:"100%"}}/>
                    </BrandsLogo>
                    <BrandsLogo>
                    <img src = {puma} alt={"brand"} style={{height:"auto",width:"100%"}}/>
                    </BrandsLogo>
                    <BrandsLogo>
                    <img src = {puma} alt={"brand"} style={{height:"auto",width:"100%"}}/>
                    </BrandsLogo>
                    <BrandsLogo>
                    <img src = {puma} alt={"brand"} style={{height:"auto",width:"100%"}}/>
                    </BrandsLogo>
                    <BrandsLogo>
                    <img src = {puma} alt={"brand"} style={{height:"auto",width:"100%"}}/>
                    </BrandsLogo>
                    <BrandsLogo>
                    <img src = {puma} alt={"brand"} style={{height:"auto",width:"100%"}}/>
                    </BrandsLogo>
                    
                </BrandsSection>
               
            <DivSeperation />
        </OuterLayout>
    );
}

export default Brands;