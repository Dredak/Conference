import styled from 'styled-components';
import * as color from '../colors';

export const ContactPageSection = styled.section`
 padding: 112px 0;
`;

export const ContactPageSectionWrapper = styled.section`
margin: 0 auto;
width: 1110px;
padding: 0 15px;

@media all and (max-width:1200px){
width:930px;

}

@media all and (max-width:992px){
width: 690px;

}
@media all and (max-width:768px){
width: 510px;

}
@media all and (max-width:576px){
width: 100%;

}
`;

