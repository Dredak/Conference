import styled from 'styled-components';
import * as colors from '../../colors';

export const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 1110px;
    padding: 10px 15px;
    line-height: 1.8;
    @media all and (max-width: 1200px) {
        width: 930px;
    }
    @media all and (max-width: 992px) {
        width: 690px;
        display: block;
    }
    @media all and (max-width: 768px){
        width: 510px;
    }
@media all and (max-width: 576px) {
        width: 100%;
    }
`;

export const LogoWrapper = styled.span`
align-self: center;
font-size: 1.2em;
cursor: pointer;
&:hover>a {
    color: ${colors.white};
}

`;

export const LogoInnerWrapper = styled.a`
color: ${colors.black};
@media all and (max-width: 992px) {
    color: ${colors.white};
    :first-child {
        color: ${colors.white};
    }
}
`;

export const LogoBold = styled.span`
font-weight: bold;
`;

export const NavigationItem = styled.li`
display: flex;
justify-content: space-between;
padding: 10px;
& + li {
    margin-left: 35px;
}
a {
    cursor: pointer;
    font-weight: 100;
}
`;

export const NavigationInnerWrapper = styled.ul`
list-style: none;
display: flex;

li:last-child {
        white-space: nowrap;
        background-color: ${colors.purple};
        border-radius: 3px;
        color: ${colors.white};
    }
li:last-child a {
    color: ${colors.white};
}
li:last-child a:hover {
color: ${colors.black};
}

@media all and (max-width: 992px) {
    display: ${props => props.dropdownVisible ? "block" : "none"};
    width: 100%;
    li {
        margin-left: 0px;
        padding-left: 0px;
        padding-bottom: 0px;            
    }
    li:first-child a, a {
        color: ${colors.white};
    }
    
}
`;