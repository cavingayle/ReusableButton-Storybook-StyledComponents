import React from 'react'
import styled from 'styled-components'
import * as Styles from './styles';


const Button = ({
    label,
    size,
    disableShadow,
    disabled,
    color,
    variant='default',
    startIcon,
    endIcon,
    ...props
}) => {

    const checkLabel = label ? label : 'Default'
    const checkShadow = disableShadow ? 'disableShadow' : ''
    





    return (
            <StyledButton
                disableShadow={checkShadow}
                size={size}
                variant={variant}
            disabled={disabled}
            color={color}

            >
                {disabled ?'Disabaled': checkLabel}
            </StyledButton>
    )
}

export default Button



const StyledButton = styled.button`
${Styles.buttonbase};
${props => Styles[props.disableShadow]};
${props => Styles[props.size]};
${props => Styles[props.variant]};
${props => Styles[props.color]};

`;






