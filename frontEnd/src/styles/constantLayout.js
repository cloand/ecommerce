import styled from "styled-components";
import StyledComponents from "styled-components";

export const OuterLayout = StyledComponents.div`
    // border:2px solid black;
    max-width:1350px;
    margin:auto;
`;

export const Seperation = StyledComponents.div`
    width:1.8px;
    color : #E0E0E0;
    background-color:#C8C8C8;
    margin:0 1.3em;
    height:30px;
`;

export const DivSeperation = StyledComponents.div`
    width:100%;
    height:${({width}) => width}em;
    background-color:#F0F0F0;
`;

export const ExpandedLayout = StyledComponents.div`
    background:${({color}) => color};
    background-image:url(${({image}) => image});
    background-size:cover;
`;

export const ExpandedLayoutWithGradient = StyledComponents.div`
background:${({color}) => color};
background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,9,121,0.5578606442577031) 0%, rgba(0,181,255,1) 100%),
  url(${({image}) => image});
`;

export const ExpandedLayoutWithBlueGradient = StyledComponents.div`
background:${({color}) => color};
background-image:linear-gradient(90deg, rgba(23,4,4,0.9304096638655462) 0%, rgba(3,31,42,0.7931547619047619) 100%, rgba(121,9,9,0.5858718487394958) 100%),
  url(${({image}) => image});
`;

export const CartOnProductHover = StyledComponents.div`

position:absolute;
height:100%;
width:100%;
color:white;

`;



export const ProductImage = StyledComponents.div`
    scale:1.5;
`;

export const ProductImageHover = StyledComponents.div`
    overflow:hidden;
    height:80%;
`;

export const TextHover = StyledComponents.div`
    background:blue;
    display:flex;
    justify-content:center;
    align-items:center;
    height:20%;
    cursor:pointer;
    z-index:4;
`;

export const ImageHover = StyledComponents.div`
    position:absolute;
    width:100%;
    height:100%;
    opacity:0;
    color:white;
    z-index:1;
    overflow:hidden;
    &:hover{
        opacity:1;
    }
`;

export const Image = StyledComponents.div`
    padding-bottom:1em;
    position:relative;
    overflow:hidden;
`;

export const ImageOuter = StyledComponents.div`
    position:relative;
`;

export const QuickView = StyledComponents.div`
//     position:absolute;
//     top:${({top}) => top}px;
//     height:100vh;
//     width:100vw;
//     z-index: ${({isQuickView}) => isQuickView ? "2" : "-1"};
//    display:flex;
//    align-items:center;
//    overflow:hidden;
`;

export const AbsoluteDiv = StyledComponents.div`
    position:relative;
    overflow:hidden;

`;

export const QuickViewOuter = StyledComponents.div`
    color:black;
    background:none;
    width:100%;
    display:flex;
    justify-content:flex-end;
    font-size:1.9rem;
    cursor:pointer;
`;

export const Product = StyledComponents.div`
    background:white;
`;

export const Helper = StyledComponents.div`
    opacity:${({isQuickView}) => isQuickView ? "0.2" : "1"};
`;

export const QuickViewDiv = StyledComponents.div`
    // width:65%;
    // margin:auto;
`