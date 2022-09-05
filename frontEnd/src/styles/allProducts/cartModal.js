import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    margin-right:.5em;
`;

export const InnerDiv = StyledComponents.div`
`;

export const CloseSection = StyledComponents.div`
`;

export const DiscSection = StyledComponents.div`
padding:1em 0;
`;

export const Name = StyledComponents.div`
    font-size:1.4rem;
    font-weight:bold;
    padding-bottom:1em;
`;

export const Choices = StyledComponents.div`
    display:flex;
   margin-top:1em;
`;

export const LeftSection = StyledComponents.div`
    width:40%;
    border:1px solid grey;
    margin-right:3em;
`;

export const Image = StyledComponents.img`
    width:100%;
    height:auto;
`;

export const RightSection = StyledComponents.div`
`;

export const Color = StyledComponents.div`

`;

export const Heading = StyledComponents.div`
    padding-bottom:.6em;
    display:flex;
`;

export const Size = StyledComponents.div`
    padding:1.5em 0;

`;

export const Quantity = StyledComponents.div`

`;

export const Label = StyledComponents.div`
    padding-bottom:.6em;
`;

export const Button = StyledComponents.div`
display:flex;
align-items:center;
justify-content:space-between;
width:90px;
border:2px solid grey;
border-radius:5px;
padding:.2em .6em;
`;

export const Icon = StyledComponents.button`
    border:none;
    background:none;
    padding:0;
    cursor:pointer;
`;

export const Count = StyledComponents.div`

`;

export const CurrentColor = StyledComponents.div`
font-weight:bold;
padding-left:1em;
text-transform:uppercase;
`;

export const SingleColor = StyledComponents.div`
    width:30px;
    height:30px;
    background:${({color}) => color};
    border-radius:10px;
    border:${({check,color}) => check === color ? "2px solid black" : "1.3 px solid grey"};
    margin-right:1.2em;
`;

export const SingleSize = StyledComponents.div`
    border:${({check,size}) => check === size ? "2px solid black" : "1.3px solid grey"};
    padding:.1em .5em;
    margin-right:.7em;
`;

export const AddToCart = StyledComponents.div`
    color:white;
    background:blue;
    text-align:center;
    margin-top:2em;
    padding:1.3em 0;
    cursor:pointer;
`;

export const Text = StyledComponents.div`
`;

export const OuterColor = StyledComponents.div`
    display:flex;
`;

export const OuterSize = StyledComponents.div`
    display:flex;
`;

export const LabelText = StyledComponents.div`
`;