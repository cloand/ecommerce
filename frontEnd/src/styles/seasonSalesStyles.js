import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    color:white;
    // border:2px solid green;
    font-size:2rem;
    max-width:900px;
    margin:auto;
    text-align:center;
    padding: 2.5em 0;
`

export const HeadCaption = StyledComponents.div`
font-size:2.5rem;
font-family: 'Square Peg', cursive;
font-weight:bold;
border-radius:5px;

`

export const HeadSpan = StyledComponents.span`
    // border:2px solid yellow;
    background:#191970;
    color:blue;
    margin:0 1em;
`

export const Heading = StyledComponents.div`
    font-weight:bold;
    font-size:4rem;
`

export const Caption = StyledComponents.div`
    font-size:1.5rem;
`

export const Button = StyledComponents.button`
display:flex;
    margin:auto;
    background:blue;
    border-radius:5px;
    border:0;
    pading:1.5em;
    font-size:1.5rem;
    color:white;
    margin-top:2em;
    padding:.8em 1.5em;
    cursor:pointer;
`

export const Label = StyledComponents.div`
    
`

export const Icon = StyledComponents.div`
    padding-left:.7em;
`