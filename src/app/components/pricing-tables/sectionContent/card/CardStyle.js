import styled from 'styled-components';
import * as colors from '../../../colors';

export const CardWrapper = styled.div`
background-color: ${colors.white};
box-shadow: 0px 24px 48px -13px rgba(0, 0, 0, 0.05);
padding: 30px;
margin-bottom: 30px;
flex-basis: 31.5%;
position: relative;
`;

export const Package = styled.h2`
font-size: 14px;
`;

export const Price = styled.span`
font-size: 60px;
color: ${colors.purple};
display: inline-block;
margin: 20px 0;
`;

export const Currency = styled.sup`
font-size: 24px;
`;

export const Period = styled.p`
color: ${colors.grey};
margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
font-size: 14px;
margin: 24px ;
letter-spacing: 1px;
font-weight: 600;
`;

export const BuyTicket = styled.a`
color: ${colors.white};
background-color: ${colors.purple};
width: 60%;
padding: 20px 40px;
border-radius: 3px;
position: absolute;
top:100%;
left: 50%;
transform: translate(-50%, -50%);
`;
