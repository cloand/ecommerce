import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    width:100%;
    display:flex;
    margin-bottom:2.2em;
`;

export const Image = StyledComponents.img`
    width:100%;
    height:auto;
`;

export const RightSection = StyledComponents.div`
    width:60%;
`;

export const Brand = StyledComponents.div`
    color:grey;
    text-transform:uppercase;
    font-size:.8rem;
`;

export const Name = StyledComponents.div`
    font-weight:bold;
    font-size:1.2rem;
    padding:.3em 0;
`;

export const Price = StyledComponents.div`
    font-weight:bold;
    font-size:1.2rem;
`;

export const Content = StyledComponents.div`
font-size:1.1rem;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
padding:1.2em 0;
`;

export const Colors = StyledComponents.div`
    display:flex;
    padding:1.6em 0 1em 0;
`;

export const Size = StyledComponents.div`
    display:flex;
`;

export const CartButton = StyledComponents.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:3px solid grey;
    padding:.3em 1em;
    width:150px;
    margin-top:1.2em;
    cursor:pointer;
`;

export const Icon = StyledComponents.div`

`;

export const Label = StyledComponents.div`

`;

export const SingleColor = StyledComponents.button`
    border:${({check,color}) => check === color ? "2px solid black" : "1.6px solid grey"};
    width:30px;
    height:30px;
    border-radius:5px;
    background:${({color}) => color};
    margin-right:1em;
    cursor:pointer;
`;
export const SingleSize = StyledComponents.button`
    border:${({check,size}) => check === size ? "2px solid black" : "1.6px solid grey"};
    margin-right:1em;
    padding:.3em .7em;
    background:none;
    cursor:pointer;

`;
export const Review = StyledComponents.div`
    color:grey;
    margin:.7em 0;
    font-size:.7rem;
`;

export const ImageOuter = StyledComponents.div`
    width:37%;
    height:auto;
`;