import StyledComponents from "styled-components";
import { dropDownAnime } from "../animations/animations";


export const OuterDiv = StyledComponents.div`
    // border:2px solid black;
    width:380px;
`;

export const Category = StyledComponents.div`
    padding-bottom:2em;
    padding-top:1em;
`;

export const Heading = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    padding:1em 0;
`;



export const Label = StyledComponents.div`
    font-size:1.1rem;
    font-weight:bold;
   
`;

export const Icon = StyledComponents.span`
  
`;

export const AllProducts = StyledComponents.div`
 padding:1em 0;
 font-weight: bold;
 font-style:italic;
 cursor:pointer;

`

export const CategorySection = StyledComponents.div`
    height:150px;
    overflow:scroll;
    overflow-x:hidden;
    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
//   background: #555; 
}
`;

export const Slider = StyledComponents.div`
`;

export const PriceRange = StyledComponents.div`
  display:flex;
`;

export const Text = StyledComponents.input`

`;

export const Range = StyledComponents.div`
  display:flex;
  padding-bottom:1.6em;
  margin-top:1em;
`;
export const SmallText = StyledComponents.div`
color:grey;
font-style:italic;
`;

export const MinMax = StyledComponents.div`

`;



export const Button = StyledComponents.button`
background:black;
color:white;
border:none;
padding:.5em 1.3em;
margin-top:1em;
`;

export const Caption = StyledComponents.div`
`;

export const ColorPallet = StyledComponents.div`
`;

export const DropDownSection = StyledComponents.div`
  display:${({isDrop})=> isDrop ? "block" : "none"};
  animation: ${dropDownAnime} 2s forwards;
  transition:all 2s ease-in;
`;

export const DropButton = StyledComponents.button`
border:none;
  background-color:white;
  cursor:pointer;
  
`

export const ColorSection = StyledComponents.div`
padding-right:2em;
  display:grid;
  grid-template-columns:repeat(6,1fr)
  // gap:.1em;
`
export const SingleColor = StyledComponents.div`
  height:31px;
  width:31px;
  border-radius:6px;
  border: 1px solid grey;
  margin-bottom:.2em;
  background:${({color}) => color};
  cursor:pointer;
`

export const Selected = StyledComponents.div`
  display:flex;
  color:brown;
  align-items:center;
  justify-content:center;
  height:100%;
`

export const BrandOuter = StyledComponents.div`
  cursor:pointer;
`;

export const BrandInner = StyledComponents.div`
  padding-bottom:.5em;
  cursor:pointer;
`;

export const Name = StyledComponents.input`
cursor:pointer;
`;

export const BrandName = StyledComponents.label`
  padding-left:1em;
  cursor:pointer;
`;








