import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    padding:2em 0;
`;

export const TextArea = StyledComponents.textarea`
    resize:none;
    width:100%;
    height:100px;
    border-radius:8px;
    margin-bottom:1em;
    padding:1em;
    &:focus{
        border:2px solid blue;
    }
`;

export const IsOrder = StyledComponents.div`
    display:flex;
`;

export const Input = StyledComponents.input`
    width:25px;
    cursor:pointer;
`;

export const Label = StyledComponents.div`
    padding-left:.5em;
    color:grey;
`;