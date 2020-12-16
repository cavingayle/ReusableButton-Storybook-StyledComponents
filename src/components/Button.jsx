import styled from "styled-components";
import * as Styles from "./styles";

export default function Button({
  label = 'Default',
  size,
  disableShadow,
  disabled,
  color,
  variant,
  startIcon,
  endIcon,
}) {
  const checkShadow = disableShadow ? "disableShadow" : "";

  return (
    <StyledButton
      disableShadow={checkShadow}
      size={size}
      variant={variant}
      disabled={disabled}
      color={color}
    >
      <Icon className="mr-2 material-icons">{startIcon}</Icon>
      <Text>{disabled ? "Disabaled" : label}</Text>
      <Icon className="ml-1 material-icons">{endIcon}</Icon>
    </StyledButton>
  );
}


export const Icon = styled.span`
  top: 5px;
  font-size: 13px;
  padding: 0px 8px;
`;
export const Text = styled.p`
  display: inline;
  top: 10px;
`;

export const StyledButton = styled.button`
  ${Styles.buttonbase};
  ${(props) => Styles[props.disableShadow]};
  ${(props) => Styles[props.size]};
  ${(props) => Styles[props.color]};
  ${(props) => Styles[props.variant]};


`;
