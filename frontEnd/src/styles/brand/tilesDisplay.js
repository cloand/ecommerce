import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1em;
`;

export const InnerDiv = StyledComponents.div`
position:relative;
`;

export const Image = StyledComponents.img`
height:auto;
width:100%;
border-radius:1em;

`;

export const Text = StyledComponents.div`
background:white;
padding:1em 0;
position:absolute;
left:10%;
top:87%;
right:10%;
text-align:center;
border-radius:1em;
font-weight:bold;
font-size:1.2rem;
`;
