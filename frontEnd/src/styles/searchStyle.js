import styled from "styled-components";
import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    // border:2px solid black;
    display:flex;
    justify-content:space-between;
    // align-items:center;
    color: rgb(56,56,56);
    padding:1.8em 0;
`;

export const IconText = StyledComponents.div`

`;

export const IconOuter = StyledComponents.div`
    display:flex;
    width:12%;
`;

export const Icon = StyledComponents.div`
    width:100%;
`;

export const Search = StyledComponents.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:3px solid blue;
    border-radius:5px;
    width:50%;
    margin:0;
`;

export const TextLabel = StyledComponents.label`
    
`;

export const InputText = StyledComponents.input`
    border:0;
    width:80%;
    padding:0 1em;
    &:focus{
        outline:none;
    }
    &::placeholder{
        font-weight:bold;
    }
`;

export const SearchIcon = StyledComponents.div`

`;

export const RightLinks = StyledComponents.div`
    display:flex;
    // border:2px solid black;
    align-items:center;
    height:80%;
    padding:.4em 0;
    cursor:pointer;
`;

export const Call = StyledComponents.div`
    display:flex;
    align-items:center;
    transition: all .2s ease;
    &:hover{
        color:blue;
    }
`;
export const CallIcon = StyledComponents.div`

`;
export const CaptionText = StyledComponents.div`
font-size:.7em;
`;

export const CallDisc = StyledComponents.div`
    padding-left:0.8em;
`;
export const HeartIcon = StyledComponents.div`
    transition: all .2s ease;
    &:hover{
        color:blue;
    }
`;
export const Heart = StyledComponents.div`
    transition: all .2s ease;
    &:hover{
        color:blue;
    }
`;

export const CardOption = StyledComponents.div`

`;
export const CardLabel = StyledComponents.div`

`;

export const CardLeft = StyledComponents.div`

`;

export const CartIcon = StyledComponents.div`
position:relative;
padding:.4em;
transition: all .2s ease;
    &:hover{
        color:blue;
    }
    &:before{
        content:'${({count}) => count}';
        border-radius:50%;
        position :absolute;
        background:black;
        right:0;
        color:white;
        padding:.2em .4em;
        font-size:.7rem;
        border:1px solid white;
        background:blue;
        font-weight:bold;
    }
`;

export const Number = StyledComponents.div`
    color:black;
    font-weight:bold;
    transition: all .2s ease;
    &:hover{
        color:blue;
    }
`;

export const CartLeft = StyledComponents.div`
padding-right:0.8em;
transition: all .2s ease;
&:hover{
    color:blue;
}
`;

export const CartOption = StyledComponents.div`
    display:flex;
    align-items:center;
`;

export const CartLabel = StyledComponents.div`
    font-size:.7em;
`;


