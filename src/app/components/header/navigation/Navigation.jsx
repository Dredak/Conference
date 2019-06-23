import React from 'react';
import { NavigationWrapper, LogoWrapper, LogoInnerWrapper, LogoBold } from './NavigationStyle';
import NavigationContent from "./NavigationContent";
import PropTypes from "prop-types";

const navArr = [
    {
        content: "Home",
        path: "/",
        attr: "home"
    },
    {
        content: "About",
        path: "about-us",
        attr: "about"
    },
    {
        content: "Speakers",
        path: "speakers",
        attr: "speakers"
    },
    {
        content: "Schedule",
        path: "schedule",
        attr: "schedule"
    },
    {
        content: "Blog",
        path: "blog",
        attr: "blog"
    },
    {
        content: "Contact",
        path: "contact",
        attr: "contact"
    },
    {
        content: "Buy Ticket",
        path: "#",
        attr: "buy ticket"
    }
];
const Navigation = (props) => {
    return (
        <NavigationWrapper>
            <LogoWrapper>
                <LogoInnerWrapper>
                    Even
                    <LogoBold>
                        talk.
                    </LogoBold>
                </LogoInnerWrapper>
            </LogoWrapper>
            <NavigationContent data={navArr} dropdownVisible={props.dropdownVisible} />
        </NavigationWrapper>
    )
}

export default Navigation;

Navigation.propTypes = {
    dropdownVisible: PropTypes.bool.isRequired
}
