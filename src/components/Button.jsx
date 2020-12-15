import React from "react";
import styled from "styled-components";
import * as Styles from "./styles";

const Button = ({
  label,
  size,
  disableShadow,
  disabled,
  color,
  variant = "default",
  startIcon,
  endIcon,
  ...props
}) => {
  const checkLabel = label ? label : "Default";
    const checkShadow = disableShadow ? "disableShadow" : "";
    const checkEndIcon = endIcon ? 'endIcon' : ''
  return (
    <StyledButton
      disableShadow={checkShadow}
      size={size}
      variant={variant}
      disabled={disabled}
        color={color}
          endIcon={checkEndIcon}
      >
          <Icon className="mr-2 material-icons">{startIcon}</Icon>
          <Text>{disabled ? "Disabaled" : checkLabel}</Text>
          <Icon className="ml-1 material-icons">{endIcon}</Icon>

    </StyledButton>
  );
};

export default Button;

const Icon = styled.span`
     top: 5px;
     font-size: 13px;
     padding: 0px 8px;

`
const Text = styled.p`
    display: inline;
    top: 10px;
`


const StyledButton = styled.button`
  ${Styles.buttonbase};
  ${(props) => Styles[props.disableShadow]};
  ${(props) => Styles[props.size]};
  ${(props) => Styles[props.variant]};
  ${(props) => Styles[props.color]};
  ${(props) => Styles[props.endIcon]};
  ${(props) => Styles[props.startIcon]};
`;
