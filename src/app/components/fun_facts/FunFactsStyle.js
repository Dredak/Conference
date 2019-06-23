import styled from 'styled-components';
import * as color from '../colors';

export const FunFactsSection = styled.section`
    display: flex;
    margin: 0 auto;
    width: 1110px;
    padding: 0 15px;
    justify-content: space-between;

    /*------Responsive-------*/

@media all and (max-width:1200px){
        width: 930px;
}
@media all and (max-width:992px){
        width: 690px;
}
@media all and (max-width:768px){
    margin: 0 auto 150px auto;
    width: 100%;
    flex-direction: column;
}
@media all and (max-width:576px){
    width: 100%;
    flex-direction: column;
}
`;

export const PictureWrapper = styled.div`
width :100%;
height :100%;

/*------Responsive-------*/

@media all and (max-width:992px){
    height: 50%;
    .breakPoint{
        width: 100%;
    }
}
@media all and (max-width:768px){
padding: 0 15%;
}
@media all and (max-width:576px){
padding: 0 15px;
}`;


export const TextWrapper = styled.div`
padding: 48px 15px 48px 63px;

/*------Responsive-------*/

@media all and (max-width:768px){
padding: 48px 15% 48px 15%
}
@media all and (max-width:576px){
padding: 48px 15px 48px 15px;
}
`;

export const InnerTextWrapper = styled.div`
/* animation class goes on this element */
`;

export const FunFactsUpperPosition = styled.span`
line-height: 1.5em;
margin: 15px 0 15px 0;
color: ${color.grey};
font-size: 1.2em;
`;

export const FunFactsMainTitle = styled.h2`
font-size: 40px;
margin-bottom: 9px;

`;

export const FontNormalWrapper = styled.span`
font-weight: normal;
`;

export const Text = styled.p`
line-height: 1.5em;
margin: 15px 0 15px 0;
color: ${color.grey};
font-size: 1.2em;
`;

export const BoxWrapper = styled.div`
height:200px;
width: 100%;
display: flex;
text-align: center;
justify-content: space-between;

/*------Responsive-------*/

@media all and (max-width:768px){
height: 100%;
width: 100%;
flex-direction: column;
}
`;
