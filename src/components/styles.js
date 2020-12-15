import { css } from 'styled-components';

const primaryBase = css`
    background:#2962FF;
    box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    color: #fff;

    &:hover,&:focus {
        background: #0039CB;
}

`


/* styles common to all buttons */
export const buttonbase = css`
  min-width: 81px;
min-height: 36px;
border-radius: 6px;
background-color: #E0E0E0;
color: #3F3F3F;
border: none;
outline: none;
cursor: pointer;
box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
text-align: center;
margin: 2px;
&:hover,&:focus {
            background-color:#AEAEAE;
            box-shadow: 0px 1px 8px rgba(179, 179, 179, 0.116)
}

&:disabled {
    color: #9E9E9E;
    box-shadow: none;
    background-color: #E0E0E0;


}
`;


/* theme variants */
export const sm = css`
${primaryBase};
min-width: 73px;
min-height: 32px;
`;

export const md = css`
${primaryBase};
`;

export const lg = css`
min-width: 93px;
min-height: 42px;
`;


// export const large = css`...`;
// export const tertiary = css`...`;

/* size variants */

export const secondary = css`
 min-width: 104px;
 background: #455A64;
 color: #fff;
 &:hover,&:focus {
        background: #1C313A;
}
`;
export const primary = css`
    background: #2962FF;
    color: #fff;
    box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
    
    &:hover,&:focus {
        background: #0039CB;
            box-shadow: 0px 1px 8px rgba(179, 179, 179, 0.116)
}
`;
export const danger = css`
    background: #D32F2F;
    color: #fff;

    &:hover,&:focus {
        background: #9A0007;
        box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);        
}
`;

/* dont know */

export const text = css`
    border: none;
    box-shadow: none;
    color: #3D5AFE;
    background-color: #fff;

    &:hover,&:focus {
            background-color:rgba(41, 98, 255, 0.1);
            box-shadow: 0px 1px 8px rgba(179, 179, 179, 0.116)
}
`;

export const outline = css`
    border: 1px solid #3D5AFE;
    box-shadow: none;
    color: #3D5AFE;
    background-color: #fff;

    &:hover,&:focus {
        background-color:rgba(41, 98, 255, 0.1);
        box-shadow: none;
    }
`;
export const disableShadow = css`
    background-color: #3D5AFE;
    box-shadow: none;
    color: white;

`;






