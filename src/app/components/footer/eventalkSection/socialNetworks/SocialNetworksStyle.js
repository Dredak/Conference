import styled from 'styled-components';
import * as colors from '../../../colors';

export const SocialNetworksWrapper = styled.div`
margin: 5rem 0 1rem 0;
width: 100%;
@media all and (max-width: 768px){
    margin: 2rem 0 1rem 0;
}
`;

export const SocialNetworkInnerWrapper = styled.div`
height: 50px;
width: 50px;
display: inline-flex;
background-color: rgba(255, 255, 255, 0.05);
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 10px;
`;

export const SocialNetworkLink = styled.a`
color: ${colors.white};
font-size: 1.5em;
`;