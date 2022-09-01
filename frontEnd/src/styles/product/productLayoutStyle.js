import StyledComponents from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const OuterDiv = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    padding:3em 0;
`;

export const LeftSection = StyledComponents.div`
    display:flex;
    width:48%;
    // border:2px solid yellow;
    height:530px;
    cursor:pointer;
`;
export const VisualProduct = StyledComponents.div`
    
`;
export const ImageList = StyledComponents.div`
    // border:2px solid black;
    overflow: scroll;
    width:180px;
    // text-overflow: ellipsis;
    // border:2px solid red;
    -ms-overflow-style:none;
    scrollbar-width:none;
    &::-webkit-scrollbar {
        display:none;
    }
    // border:2px solid red;
`;
export const Img = StyledComponents.img`
    display:block;
    width:133px;
    height:auto;
    // border:2px solid blue;
    
`;
export const ImgOuter = StyledComponents.div`
    border:${({check,current}) => check === current ? "2px solid blue" : "none"};
  
`
export const Image = StyledComponents.div`
    margin-left:1em;
`;
export const MainImg = StyledComponents.img`
width:100%;
height:auto;
// border:2px solid green;
`;
export const RightSection = StyledComponents.div`
    width:48%;
`;
export const Heading = StyledComponents.div`
    font-weight:bold;
    font-size:2.2rem;
`;
export const Brand = StyledComponents.div`
    color:grey;
    font-size:1.1rem;
    padding:.3em 0;
`;
export const Pricing = StyledComponents.div`
    font-size:2.2rem;
    font-weight:bold;
    color:#CC5500;
    padding-bottom:.5em;
`;
export const Price = StyledComponents.div`

`;
export const Review = StyledComponents.div`

`;
export const Discription = StyledComponents.div`
    padding-bottom:1.1em;
`;
export const Cart = StyledComponents.div`
    display:flex;
    padding:1.1em 0;
`;
export const Icon = StyledComponents.button`
    border:none;
    background:white;
    color:grey;
    font-size:1rem;
    cursor:pointer;
`;
export const Amount = StyledComponents.div`
    padding:0 1.5em;
    font-size:1.3rem;
    
`;
export const AddToCart = StyledComponents.div`
    display:flex;
    background:${({check}) => check ? "#2266cc" : "#36517a"};
    justify-content:center;
    align-items:center;
    width:340px;
    padding:.7em 0;
    color:white;
    border-radius:3px;
    margin-left:1.2em;
    font-weight:bold;
`;
export const Label = StyledComponents.div`
    margin-left:.5em;
`;
export const Options = StyledComponents.div`
    display:flex;
    padding-top:1.1em;
`;
export const Links = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:14%;
`;
export const SingleLink = StyledComponents(FontAwesomeIcon)`
    color:grey;
    
`;
export const OptionButton = StyledComponents.button`
    display:flex;
    align-items:center;
    color:grey;
    background:white;
    border:none;
    padding-right:1.8em;
    font-size:1.2rem;
`;
export const Count = StyledComponents.div`
    display:flex;
    align-items:center;
    border:1px solid #C0C0C0;
    border-radius:6px;
    padding:.5em .1em;
`;

export const CartIcon = StyledComponents.div`
    border:none;
    background:inherit;
    color:white;
    font-size:1.5rem;
   
`;

export const OptionIcon = StyledComponents.div`

`;

export const ChoiceOptions = StyledComponents.div`
    display:block;    
    width:240px;
    margin-bottom:.7em;

`;

export const Selected = StyledComponents.div`
text-transform: capitalize;
`

export const Dropper = StyledComponents.div`
    display:${({check}) => check ? "block" : "none"};
    text-transform: capitalize;
    padding-top:.1em;
    width:80%;
    margin:auto;
    cursor:pointer;
`;

export const Selector = StyledComponents.div`
// border:2px solid red;
    display:flex;
    align-items:center;
    padding-left:.4em;
`;

export const DropIcon = StyledComponents.div`
    padding-left:.2em;
    cursor:pointer;
`

export const ChoiceWrapper = StyledComponents.div`
border: 1px solid grey;
display:flex;
padding:.6em 0;
align-items:center;
justify-content:space-between;

`

export const Labels = StyledComponents.div`
    border:1px solid grey;
    padding:.1em .3em;
`