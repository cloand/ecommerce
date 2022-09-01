import {keyframes} from "styled-components";

export const textMarquee = keyframes`
    0%{
        tranform:translateX(100%);
    }
    50%{
        transform:translateX(0%);
    }
    100%{
        transform:translateX(-100%);
    }
`; 

export const dropDownAnime = keyframes`
    from{
        opacity:0;
    }to{
        opacity:1;
    }
`;


