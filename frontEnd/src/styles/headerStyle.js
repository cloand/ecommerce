import StyledComponents,{keyframes} from "styled-components";
import { textMarquee } from "./animations/animations";

export const OuterDiv = StyledComponents.div`
max-width:1350px;
margin:auto;
color: rgb(56,56,56);
font-size:1rem;
padding:.5em 0;
`;

export const InnerDiv = StyledComponents.div`
// border:2px solid green;    
display:flex;
justify-content:space-between;
align-items:center;  

`;

export const OuterScroll = StyledComponents.div`
// border:2px solid blue;

`;

export const ScrollText = StyledComponents.div`
// border:2px solid blue;
padding:0;
margin:0;
`;
export const HeaderLinks = StyledComponents.ul`

    // border:2px solid red;  
    display:flex;
    text-decoration:none;
    justify-content:space-between;
    list-style:none;
    margin:0;

`;
export const SingleLink = StyledComponents.li`
    // border:2px solid grey;
    display:flex;
    margin-right:1em
`;

export const Seperation = StyledComponents.div`
    width:2px;
    background-color:grey;
    margin:0 1.5em;
`;

export const LinkLabel = StyledComponents.div`
    padding:0 .4em;
`;
