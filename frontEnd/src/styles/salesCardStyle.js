import StyledComponents from "styled-components";


export const OuterDiv = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    color:white;
    padding:3em 0;
`;

export const Section = StyledComponents.div`

background-image:url(${({image})=>image});
// border:2px solid red;
border-radius:20px;
width:32.1%;
`;
export const LeftStyleSection = StyledComponents.div`
padding:2em 17em 2em 2em;
`;

export const Heading = StyledComponents.div`
    font-size:2rem;
   
`;
export const Disc = StyledComponents.div`

`;
export const Block = StyledComponents.div`
    background:white;
    // border:2px solid white;
    width:50px;
    hight:30px;
    margin:1.5em 0 3em 0;
`;
export const Button = StyledComponents.div`
    background:none;
    color:white;
    border:0;
    display:flex;
`;

export const Caption = StyledComponents.div`

`;
export const Icon = StyledComponents.div`
    padding-left:1em;
`;
export const CenterStyleSection = StyledComponents.div`
padding:4em 5em;
    background:black;
    margin:auto;
    // border:2px solid green;
    text-align:center;
    border-radius:20px;
`;
export const CentreButton = StyledComponents.button`
background:none;
color:white;
border:2px solid blue;
border-radius:4px;
display:flex;
padding:1em;
margin:0 4.2em;
margin-top:.4em;
cursor:pointer;
`;

export const RightStyleSection = StyledComponents.div`
padding:2em 17em 2em 2em;
`;