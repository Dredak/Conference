import React from 'react';
import { HeaderWrapper } from './HeaderStyle';
import Navigation from './navigation/Navigation';
import Dropdown from './navigation/dropdown/Dropdown';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownVisible: false,
        }
    }

    onToggleDropdown = () => {
        this.setState((prevState) => ({
            dropdownVisible: !prevState.dropdownVisible
        }))
    }

    render() {
        return (
            <HeaderWrapper>
                <Dropdown dropdownVisible={this.state.dropdownVisible} onToggleDropdown={this.onToggleDropdown} />
                <Navigation dropdownVisible={this.state.dropdownVisible} />
            </HeaderWrapper>
        )
    }
}

export default Header;
