import styled from 'styled-components';
import * as colors from '../colors';

export const SectionWrapper = styled.section`
width: 100%;
background-color: ${colors.purple};
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding: 4em 0;
`;

export const SubscribeContentWrapper = styled.div`
flex-basis: 1110px;
color: ${colors.white};
@media all and (max-width: 1200px) {
            width: 930px;
}
@media all and (max-width: 992px) {
            width: 690px;
}
@media all and (max-width: 768px){
        width: 510px;
}
@media all and (max-width: 576px) {
        width: 100%;
}
`;

export const SubscribeTitle = styled.h2`
font-size: 2.5em;
font-weight: 400;
margin-bottom: 15px;
line-height: 1.5;
`;

export const SubscribeTextContent = styled.p`
line-height: 1.8;
margin: 0 auto;
margin-bottom: 1em;
width: 50%;
`;