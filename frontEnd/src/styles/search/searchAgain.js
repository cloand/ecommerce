import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
padding:1em 0;
`;

export const TopNav = StyledComponents.div`
display:flex;
align-items:center;
font-size:.9rem;
`;

export const Icon = StyledComponents.span`
font-size:1rem;
color:grey;
`;

export const Arrow = StyledComponents.div`
    padding:0 .3em;
    color:grey;
`;

export const Caption = StyledComponents.div`
`;

export const Search = StyledComponents.div`
border:1px solid grey;
border-radius:5px;
height:45px;
margin:2.7em 0;
display:flex;
align-items:center;
`;

export const InputArea = StyledComponents.input`
width:89%;
border:none;
`;

export const SearchIcon = StyledComponents.div`
width:12%;
display:flex;
justify-content:center;
font-size:2.5rem;
border-radius:0 5px 5px 0;
background:#2266cc;
color:white;
height:100%;
`;

export const Disc = StyledComponents.div`
    font-weight:bold;
    font-size:1.2rem;
`;