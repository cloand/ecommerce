import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    // border:2px solid black;
    width:100%;
    padding:0 3em;
`; 
export const SortingBar = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    // border:2px solid grey;
    padding:1em 0;
`; 
export const LeftTags = StyledComponents.div`
    display:flex;
    align-items:center;
`; 
export const TagLabel = StyledComponents.div`
    padding-right:1em;
    font-weight:bold;
`; 
export const FilterBox = StyledComponents.div`
    display:flex;
    border:2px solid lightgrey;
    padding:.5em .2em .3em .5em;
    border-radius:3px;
`; 
export const Label = StyledComponents.div`
    
`; 
export const Icon = StyledComponents.span`
    padding-left:.5em;
`; 
export const RightTags = StyledComponents.div`
display:flex;
align-items:center;
`; 
export const ChangeView = StyledComponents.div`
    display:flex;
    padding-left:1em;
    align-items:center;
`; 
export const SingleView = StyledComponents.button`
    padding:0 .4em;
    color:grey;
    background:white;
    border:none;
    cursor:pointer;
    transition: all 2s ease;
`; 
export const GridIcon1 = StyledComponents.span`
    font-size:3.2rem;
    // padding-top:.02em;
    color:${({view})=> view == "list" ? "black" : "grey"};
`; 
export const GridIcon2 = StyledComponents.span`
    font-size:2.6rem;
    color:${({view})=> view == "grid" ? "black" : "grey"};
`;
export const Products = StyledComponents.div`
    width:100%;
    display:grid;
    grid-template-columns : repeat(3,1fr);
    gap:1em;
`;

export const TagsBar = StyledComponents.div`
    background:white;
    color:grey;
    border-radius:5px;
    padding:.7em .3em;
    display:${({length}) => length > 0 ? "flex" : "none"};
`;

export const SingleTag = StyledComponents.div`
    
   
`;

export const Before = StyledComponents.div`
    position:absolute;
    font-size:1rem;
    right:-.4rem;
    top:-.4rem;
    background:white;
    border:1px solid grey;
    border-radius:50%;
    cursor:pointer;
`
export const SingleOuter = StyledComponents.div`
position:relative;
border: 2px solid grey;
border-radius:5px;
padding:.3em .6em;
margin-right:.5em;
`