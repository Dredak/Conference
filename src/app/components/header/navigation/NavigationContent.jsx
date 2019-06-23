import React from 'react';
import { NavigationItem, NavigationInnerWrapper } from './NavigationStyle';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavigationContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: ""
        }
    }

    changeActive = (e) => {
        const name = e.target.getAttribute("data-name");
        this.setState({ isActive: name })
    }

    render() {
        console.log(this.state)
        return (
            <NavigationInnerWrapper dropdownVisible={this.props.dropdownVisible}>
                {this.props.data.map((nav, index) => {
                    return (
                        <NavigationItem key={index} >
                            <Link to={nav.path} data-name={nav.attr} onClick={this.changeActive}  className={`${this.state.isActive === nav.attr ? "active" : ""}`} >
                                {nav.content}
                            </Link>
                        </NavigationItem>
                    )
                })}
            </NavigationInnerWrapper >
        )
    }
}



export default NavigationContent;

NavigationContent.propTypes = {
    data: PropTypes.array.isRequired
}