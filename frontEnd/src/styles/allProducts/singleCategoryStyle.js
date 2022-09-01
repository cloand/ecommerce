import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    max-height:100px;
    // border:2px solid green;
`;

export const Heading = StyledComponents.button`
    font-size:1rem;
    margin:.55em 0;
    padding:0;
    border:none;
    background:white;
    cursor:pointer;
    font-weight:${({current,name}) => current === name ? "bold" : "normal"};
`;

