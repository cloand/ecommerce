import StyledComponents from "styled-components";

export const OuterDiv = StyledComponents.div`
    margin:4em 0;
    
`;

export const Card = StyledComponents.div`
width:30%;
-webkit-box-shadow: 1px 1px 12px 15px rgba(245,245,245,1);
    -moz-box-shadow: 1px 1px 12px 15px rgba(245,245,245,1);
    box-shadow: 1px 1px 12px 15px rgba(245,245,245,1);
    padding:2em;
`;

export const TopImage = StyledComponents.div`
background-image:url(${({image})=>image});
padding:1em 1em 9em 1em;
`;

export const BottomSection = StyledComponents.div`
`;

export const Heading = StyledComponents.div`
font-size:1.5rem;
font-weight:bold;
padding:1em 1em 1em 0;
`;

export const Disc = StyledComponents.div`
    font-size:1.1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Button = StyledComponents.div`
    color:blue;
    display:flex;
    font-weight:bold;
    padding:1.3em 1.3em 0 0;
`;

export const Label = StyledComponents.div`
`;

export const TopSection = StyledComponents.div`

`;

export const CardBottom = StyledComponents.div`
display:flex;
justify-content:space-between;
`;

export const CardHeading = StyledComponents.div`
font-size:2.5rem;
text-align:center;
padding:1em 0;
`;


export const Icon = StyledComponents.div`
padding-left:1em;

`;

export const Date = StyledComponents.div`
    font-weight:bold;
    font-size:1.2rem;
    width:80%;
    // border:2px solid red;
`;

export const DateSection = StyledComponents.div`
    // border:2px solid black;
    width:42px;
    padding:.3em;
    background:white;
    border-radius:5px;
`;

export const Month = StyledComponents.div`
    font-size:.8rem;
    width:100%;
    font-weight:bold;
`;


