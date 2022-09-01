import StyledComponents from "styled-components";

export const SingleLink = StyledComponents.div`
    padding-right:.7em;
    color:black;
    transition:all .5s ease;
    &:hover{
        color:blue;
    }
    `;

export const OuterDiv = StyledComponents.div`
display:flex;
justify-content:space-between;
font-weight:bold;
font-size:1.1rem;


`;

export const LeftLinks = StyledComponents.div`
display:flex;

`;

export const WithoutArrow = StyledComponents.div`
padding-right:2.1em;
color:black;
transition:all .5s ease;
    &:hover{
        color:blue;
    }
`;

export const WithArrow = StyledComponents.div`
padding-right:2.1em;
display:flex;
align-items:center;
transition:all .5s ease;
    &:hover{
        color:blue;
    }
`;

export const RightOffers = StyledComponents.div`
display:flex;

`;

export const SpecialOffer = StyledComponents.div`
    display:flex;
    padding-left:1.5em;
    align-items:center;
    cursor:pointer;
    transition:all .5s ease;
    &:hover{
        color:blue;
    }
    
`;
export const Icon = StyledComponents.div`
    padding-right:1em;
`;

export const OfferLabel = StyledComponents.div`

`;

