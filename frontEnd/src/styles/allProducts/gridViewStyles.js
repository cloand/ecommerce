import styled from "styled-components";
import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    color:grey;
    text-align:center;
    // border:2px solid green;
    padding:2em 0;
    // height:420px;
`;
export const Image = StyledComponents.div`
    padding-bottom:1em;
    position:relative;
    overflow:hidden;
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

export const TextHover = StyledComponents.div`
    background:blue;
    display:flex;
    justify-content:center;
    align-items:center;
    height:20%;
`;

export const BottomSection = StyledComponents.div`
    
`;
export const Brand = StyledComponents.div`
    font-size:.8rem;
    padding-bottom:.3em;
`;
export const Name = StyledComponents.div`
    font-size:1.3rem;
    color:#404040;
`;
export const Price = StyledComponents.div`
    padding:.6em 0;
`;
export const Review = StyledComponents.div`
    display:flex;
    margin:auto;
    max-width:30%;
`;

export const ProductImageHover = StyledComponents.div`
    overflow:hidden;
    height:80%;
`;

export const ProductImage = StyledComponents.div`
    scale:1.5;
`;