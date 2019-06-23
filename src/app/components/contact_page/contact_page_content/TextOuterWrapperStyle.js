import styled from 'styled-components';
import * as color from '../../colors';

export const textOuterWrapperDiv = styled.div`
margin-bottom: 48px;
padding: 0 15px;
`;

export const ContactHeader = styled.h2`
font-size: 28px;
font-weight: 400;
margin-bottom: 23px;
padding-left:15px;
`;

export const InfoInnerWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 50px;

@media all and (max-width:768px){

flex-direction: column;
width: 100%;
}

@media all and (max-width:576px){
flex-direction: column;
width: 100%;
}
                
`;

