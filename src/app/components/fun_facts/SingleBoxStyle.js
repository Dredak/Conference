import styled from 'styled-components';
import * as color from '../colors';

export const Numbers = styled.p`
font-weight: bolder;
font-size: 40px;
`;

export const EventInfo = styled.small`
color: ${color.grey};
`;

export const SingleBoxWrapper = styled.div`
padding: 20px 0 20px 0 ;
margin-bottom: 15px;
flex-basis: 48.5%;
background-color: ${color.light_grey};
font-size: 1.5em;
/*------Responsive-------*/
@media all and (max-width:768px){
margin-bottom: 15px;
}
`;