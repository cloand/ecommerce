import React from "react";
import {  ExpandedLayoutWithGradient, OuterLayout } from "../styles/constantLayout";
import {OuterDiv,HeadingSection,SubHeading,Heading,Subtitle,Icon,Label} from '../styles/pageHeadingstyles'
import ProductTop from '../assets/productsTop.jpeg'

const PageHeading = ({subHeading,heading,subtitle,iconName}) => {
    return (
        <>
            <ExpandedLayoutWithGradient image = {ProductTop} >
                <OuterLayout>
                    <OuterDiv>
                        <HeadingSection>
                            <SubHeading>
                                {subHeading}
                            </SubHeading>
                            <Heading>
                                {heading}
                            </Heading>
                            <Subtitle>
                                <Icon className = "material-symbols-outlined">
                                    {iconName}
                                </Icon> /
                                <Label>
                                    {subtitle}
                                </Label>
                            </Subtitle>
                        </HeadingSection>
                    </OuterDiv>
                </OuterLayout>
            </ExpandedLayoutWithGradient>
        </>
    );

}
export default PageHeading;