import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    font-size:1.2rem;
    padding:3em 0;
`;

export const Products = StyledComponents.div`
// display:flex;
width:70%;
padding:2em 0;
`;

export const Headings = StyledComponents.div`
display:Flex;
justify-content:space-between;
padding-right:4em;
padding-bottom:1em;
color:grey;
`;

export const Heading = StyledComponents.div`

`;

export const Product = StyledComponents.div`

`;
export const ProductHeading = StyledComponents.div`
    // border:2px solid red;
    width:55%;
`;

export const Checkout = StyledComponents.div`
border:2px dashed black;
width:22%;
padding:.5em 1em;
background:#f9f9f9;
`;

export const MainLabel = StyledComponents.div`
font-weight:bold;
padding:1em 0;
`;

export const Section = StyledComponents.div`
// border:2px solid blue;
display:flex;
justify-content:space-between;
padding:1.4em 0;
// border:2px solid black;
`

export const Total = StyledComponents.div`
color:blue;
`;

export const CountrySection = StyledComponents.div`
    // border:2px solid black;
    padding:0;
`;

export const Label = StyledComponents.div`
    // border:2px solid black;
    width:30%;
`;

export const ExpandedLabel = StyledComponents.div`
    // border:2px solid black;
    width:100%;
   
`;


export const Number = StyledComponents.div`
    font-weight:bold;
`;

export const Address = StyledComponents.button`
    border:none;
    border-bottom:2px solid black;
    font-size:1.2rem;
    color:grey;
    background:none;
`;

export const ChoiceButton = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    padding:.6em .4em;
    border:2px solid #DCDCDC;
    border-radius:7px;
    margin-top:1.3em;
    background:white;
`;

export const Button = StyledComponents.div`
display:flex;
justify-content:space-between;
align-items:center;
border:2px solid #DCDCDC;
border-radius:7px;
    width:25%;
    padding:.6em .2em;
`;

export const ChoiceSection = StyledComponents.div`
// display:flex;
// justify-content:space-between;
// width:100%;
padding:0;
border:2px solid #DCDCDC;
border-radius:7px;
margin-bottom:1em;
`;

export const Icon = StyledComponents.div`
    cursor:pointer;
`;

export const CalculateButton = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    font-size:1.3rem;
`;

export const LeftInput = StyledComponents.input`
border:none;
text-align:center;
width:50%;
`;

export const RightCalculate = StyledComponents.div`
background:black;
color:white;
padding:.5em 0;
width:50%;
text-align:center;
font-weight:bold;
border-radius:0 5px 5px 0;
`;

export const BlueLabel = StyledComponents.div`
color:blue;
`;

export const CheckoutButton = StyledComponents.div`
    background:blue;
    color:white;
    padding:1.2em 0;
    text-align:center;
    font-weight:bold;
`;

export const Img = StyledComponents.img`
width:17%;
height:100%;
`;

export const Quantity = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    // border:2px solid green;
    width:40%;
`;

export const Price = StyledComponents.div`
    // border:2px solid black;
    // width:50%;
    display:flex;
    justify-content:flex-end;
`;

export const BluePrice = StyledComponents.div`
color:blue;
font-weight:bold;
`;


export const Cancel = StyledComponents.div`
`;

export const Count = StyledComponents.div`
`;

export const DiscOuter = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:7em;
    padding:1em 0;
`;


export const DropDown = StyledComponents.div`
    display : ${({check})=> check ? "block" : "none"};
`;


