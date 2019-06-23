import styled from 'styled-components';
import * as colors from '../../colors';


export const ContentWrapper = styled.div`
position: absolute;
left: 0;
right: 0;
`;
export const ContentInnerWrapper = styled.div`
width: 1110px;
margin: 0 auto;
padding: 0px 15px;
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
export const ContentInnerWrapperSecond = styled(ContentInnerWrapper)`
padding-bottom: 3rem;
`;

export const MainTitle = styled.h1`
color: ${colors.purple};
font-size: 4em;
font-weight: 100;
background: linear-gradient(to right, ${colors.purple}, ${colors.light_blue});
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;
export const MainTitleSecond = styled(MainTitle)`
margin-bottom: 1rem;

@media all and (max-width: 992px){
    font-size: 40px;
}
`;

export const TitleInnerWrapper = styled.span`
font-weight: 400;
`;
export const DateAndLocation = styled.p`
color: rgba(0, 0, 0, 0.6);
margin: 20px 0 20px 0;
font-size: 1.3em;
`;

export const TextWrapper = styled.span`
:hover {
    color: rgba(0, 0, 0, 0.2);
}
`;
