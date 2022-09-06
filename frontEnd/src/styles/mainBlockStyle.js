import StyledComponents from "styled-components";
import girl from "../assets/Girl.png"

export const OuterDiv = StyledComponents.div`
// border:2px solid black;

padding:7em 0;
display:flex;
background-fit:contain;
margin:2em 0 3em 0;
` 

 
export const LeftSection = StyledComponents.div`
    // border:2px solid black;
    width:40%;
    margin-left:${({position}) => position === "right" ? "auto" : "none"};
`
     
export const TopCaption = StyledComponents.div`
    // border:2px solid black;
    font-family: 'Square Peg', cursive;
    font-size:2.5rem;
    font-weight:bold;
    display:flex;
    word-spacing:.3em;

`


export const CaptionSpan = StyledComponents.div`
    color:blue;
    background:white;
    border-radius:7px;
    margin:0 1em;
`
 
export const RightSection = StyledComponents.div`
// border:2px solid red;

width:40%;
`


export const BoldHeading = StyledComponents.div`
    font-size:5rem;
    font-weight:bold;
    color:white;
` 

export const Heading = StyledComponents.div`
font-size:4rem;
color:white;

` 
export const HeadingDisc = StyledComponents.div`
font-size:1.2rem;
color:white;

` 
export const ShopButton = StyledComponents.button`
    display:flex;
    justify-content:space-between;
    background:black;
    color:white;
    // border:0;
    padding:1em;
    font-weight:bold;
    font-size:1rem;
    margin-top:4em;
    cursor:pointer;
    border:none;
`
export const Text = StyledComponents.div`

` 

export const ShopIcon = StyledComponents.div`
    padding-left:1em;
` 


 