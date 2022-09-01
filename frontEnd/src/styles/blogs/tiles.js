import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1em;
   padding-bottom:2.5em;
`

export const InnerDiv = StyledComponents.div`
padding:.5em 1em;
`

export const TopImage = StyledComponents.img`
width:100%;
`

export const BottomDisc = StyledComponents.div`
`

export const Heading = StyledComponents.div`
    font-weight:bold;
    font-size:1.2rem;
`
export const Disc = StyledComponents.div`

`
export const Button = StyledComponents.div`
border:none;
background:none;
display:flex;
align-items:center;
padding:0;
color:blue;
font-weight:bold;
padding-top:.5em;
pointer:cursor;
width:120px;
margin-left:auto;
`

export const Icon = StyledComponents.div`
    padding-left:.5em;
`

export const Text = StyledComponents.div`
color:blue;
`

export const Title = StyledComponents.div`
font-style:italic;

`
export const Category = StyledComponents.div`
display:flex;
    padding-top:1em;
    
`