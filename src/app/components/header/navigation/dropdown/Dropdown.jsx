import React from 'react';
import { CheckboxInput, CheckboxLabel, Hamburger } from './DropdownStyle';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
    return (
        <>
            <CheckboxLabel onClick={props.onToggleDropdown} dropdownVisible={props.dropdownVisible} htmlFor="hamburger">MENU<Hamburger /><CheckboxInput type="checkbox" id="hamburger" /></CheckboxLabel>

        </>
    )
};

export default Dropdown;


Dropdown.propTypes = {
    onToggleDropdown: PropTypes.func.isRequired,
    dropdownVisible: PropTypes.bool.isRequired
}