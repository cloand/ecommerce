import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    display:flex;
    font-size:1.23rem;
    padding:1.5em 3em;
    // border:2px solid black;
    justify-content:space-between;
    border-radius:5px;
    -webkit-box-shadow: 1px 1px 12px 15px rgba(245,245,245,1);
    -moz-box-shadow: 1px 1px 12px 15px rgba(245,245,245,1);
    box-shadow: 1px 1px 12px 15px rgba(245,245,245,1);
`;

export const ShippingReturn = StyledComponents.div`
    display:flex;
    align-items:center;
`;

export const Icon = StyledComponents.div`
    padding-right:1em;
`;

export const Disc = StyledComponents.div`
    
`;

export const Heading = StyledComponents.div`
    font-weight:bold;
`;

export const HeadDisc = StyledComponents.div`
    color:grey;
`;
