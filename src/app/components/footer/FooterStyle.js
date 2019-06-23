import styled from 'styled-components';
import * as colors from '../colors';

export const SectionWrapper = styled.section`
padding: 7rem 15px;
background-color: #222831;
color: ${colors.white};
line-height: 1.8;
`;

export const FooterContentWrapper = styled.div`
width: 1110px;
margin: 0 auto;
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

export const FooterContentInnerWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 3em;
@media all and (max-width: 768px){
    flex-direction: column;
}
`;
