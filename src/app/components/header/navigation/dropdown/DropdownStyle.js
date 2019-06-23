import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CheckboxInput = styled.input`
display: none;
`
export const CheckboxLabel = styled.label`
display: none;
position: absolute;
top: ${props => props.dropdownVisible ? "8.5%" : "50%"};
transform: translateY(-50%);
right: 3rem;
letter-spacing: 2px;
color: rgba(255, 255, 255, 0.5);
cursor: pointer;
`
export const Hamburger = styled.span`
&, ::before, ::after {
    display: block;
    background-color: rgba(255, 255, 255, 0.5);
    height: 2px;
    width: 1rem;
    border-radius: 2px;
    position: relative;
}
::before, ::after {
    content: "";
    position: absolute;
}
right: -120%;
top: -3px;
::before {
    top: -12px;
    }
::after {
    top: -6px;
    }
`

CheckboxLabel.propTypes = {
    dropdownVisible: PropTypes.bool.isRequired
}