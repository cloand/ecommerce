import StyledComponents from "styled-components";


export const OuterDiv = StyledComponents.div`
    // border:2px solid black;
    padding:2em 0;
`;
export const TopSection = StyledComponents.div`
    // border:2px solid black;
    max-width:300px;
    margin:auto;
    text-align:center;
    padding: 1.5em 0;
    
`;
export const Heading = StyledComponents.div`
    font-size:2.5rem;
    font-weight:bold;
   
`;

export const BottomSection = StyledComponents.div`
    display:flex;
    justify-content:space-between;
`;

export const Categories = StyledComponents.div`
    // border:2px solid black;
    padding:18em .5em .5em .5em;
    border-radius:8px;
    background-image : url(${({image})=>image});
    background-size:cover;
    cursor:pointer;
`;

export const Caption = StyledComponents.div`
    // border:2px olid black;
    padding:1em 5.5em;
    background:white;
    font-weight:bold;
    border-radius:5px;
    transition:all .5s ease;
    font-size:1.2rem;
    &:hover{
        background:blue;
        color:white;
    }
`;