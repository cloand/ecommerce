import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    color:white;
    display:flex;
    justify-content:space-between;
    width:100%;
    // border:2px solid green;
    padding:2em 0;
`;

export const LeftIcon = StyledComponents.div`
    width:20%;
`;

export const RightSection = StyledComponents.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:70%;
    // border:2px solid green;
`;

export const LeftDisc = StyledComponents.div`
    // border:2px solid green;
`;

export const Heading = StyledComponents.div`
    font-weight:bold;
    font-size:2rem;
`;

export const Disc = StyledComponents.div`
    color:grey;
`;
export const Search = StyledComponents.div`
    display:flex;
    width:56%;
    // border:2px solid green;
`;
export const SearchInput = StyledComponents.input`
    width:100%;
    background:#505050;
    border:0;
    border-radius:5px;
    margin-right:.5em;
    padding:0 1em;
    color:grey;
`;
export const SubscribeButton = StyledComponents.div`
    display:flex;
    background:blue;
    padding:1em 1.4em;
    border-radius:5px;
    font-weight:bold;
`;
export const Label = StyledComponents.div`
    padding-right:.5em;
`;
export const Icon = StyledComponents.div`

`;
