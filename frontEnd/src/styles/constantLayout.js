import StyledComponents from "styled-components";

export const OuterLayout = StyledComponents.div`
    // border:2px solid black;
    max-width:1350px;
    margin:auto;
`;

export const Seperation = StyledComponents.div`
    width:1.8px;
    color : #E0E0E0;
    background-color:#C8C8C8;
    margin:0 1.3em;
    height:30px;
`;

export const DivSeperation = StyledComponents.div`
    width:100%;
    height:${({width}) => width}em;
    background-color:#F0F0F0;
`;

export const ExpandedLayout = StyledComponents.div`
    background:${({color}) => color};
    background-image:url(${({image}) => image});
    background-size:cover;
`;

export const ExpandedLayoutWithGradient = StyledComponents.div`
background:${({color}) => color};
background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,9,121,0.5578606442577031) 0%, rgba(0,181,255,1) 100%),
  url(${({image}) => image});
`;

export const ExpandedLayoutWithBlueGradient = StyledComponents.div`
background:${({color}) => color};
background-image:linear-gradient(90deg, rgba(23,4,4,0.9304096638655462) 0%, rgba(3,31,42,0.7931547619047619) 100%, rgba(121,9,9,0.5858718487394958) 100%),
  url(${({image}) => image});
`;




