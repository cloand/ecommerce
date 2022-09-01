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
`;

export const Text = StyledComponents.div`
`;

export const Range = StyledComponents.div`
`;

export const Button = StyledComponents.div`
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






