import { css } from "styled-components";

/* Button Default Styles */
export const buttonbase = css`
  min-width: 81px;
  min-height: 36px;
  border-radius: 6px;
  background-color: #e0e0e0;
  color: #3f3f3f;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  text-align: center;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: #aeaeae;
    box-shadow: 0px 1px 8px rgba(179, 179, 179, 0.116);
  }

  &:disabled {
    color: #9e9e9e;
    box-shadow: none;
    background-color: #e0e0e0;

    &:hover,
    &:focus {
    background-color: #e0e0e0;
    box-shadow: none;
  }
  }
`;

/* theme variants */
export const sm = css`
  max-width: 73px;
  max-height: 32px;
`;

export const md = css`
min-width: 81px;
min-height: 36px;
`;

export const lg = css`
  min-width: 93px;
  min-height: 42px;
`;



/* size variants */

export const secondary = css`
  min-width: 104px;
  background: #455a64;
  color: #fff;
  &:hover,
  &:focus {
    background: #1c313a;
  }
`;
export const primary = css`
  background: #2962ff;
  color: #fff;
  box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);

  &:hover,
  &:focus {
    background: #0039cb;
    box-shadow: 0px 1px 8px rgba(179, 179, 179, 0.116);
  }
`;
export const danger = css`
  background: #d32f2f;
  color: #fff;

  &:hover,
  &:focus {
    background: #9a0007;
    box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
  }
`;

/* dont know */

export const text = css`
  border: none;
  box-shadow: none;
  color: #3d5afe;
  background-color: #fff;

  &:hover,
  &:focus {
    background-color: rgba(41, 98, 255, 0.1);
    box-shadow: 0px 1px 8px rgba(179, 179, 179, 0.116);
  }

  &:disabled {
    color: #9e9e9e;
    box-shadow: none;
    background-color: #e0e0e0;
  }
`;

export const outline = css`
  border: 1px solid #3d5afe;
  box-shadow: none;
  color: #3d5afe;
  background-color: #fff;

  &:hover,
  &:focus {
    background-color: rgba(41, 98, 255, 0.1);
    box-shadow: none;
  }
`;
export const disableShadow = css`
  background-color: #3d5afe;
  box-shadow: none;
  color: white;
`;
