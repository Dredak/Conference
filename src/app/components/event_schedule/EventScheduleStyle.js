import styled from 'styled-components';
import * as color from '../colors';

export const EventScheduleSection = styled.section`
background-color: ${color.light_grey};
padding: 112px 0px;

`;

export const EventScheduleWrapper = styled.div`
padding: 0 15px 0 15px;
width: 1110px;
margin: 0 auto; 
@media all and (max-width:1200px){
width: 930px;
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

export const DaysBoxPlaceHolder = styled.div`
display: flex;
text-align: center;
height: 136px;
`;

export const SpeakersCardsWrapper = styled.div`

`;