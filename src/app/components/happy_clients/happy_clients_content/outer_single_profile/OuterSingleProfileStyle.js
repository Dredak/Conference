import styled from 'styled-components';
import * as color from '../../../colors';

export const OuterSingleProfileWrapper = styled.div`
padding: 0 5px;
line-height: 25px;
margin-bottom: 40px;
`;

export const QuoteOrder = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
img{
    border-radius:50%;
}
`;

export const IconElementWrapper = styled.div`

`;

export const IconElement = styled.i`
color: ${color.blue};
position: absolute;
background: ${color.white};
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
text-align: center;
padding-top: 10px;
top:60%;
left: 54%;
`;

export const Descritption = styled.p`
color: ${color.grey}; 
padding: 20px;
`;


export const NameOfSpeaker = styled.span`
font-size: 18px;
`;

export const Occupation = styled.p`
color: ${color.grey}; `;

