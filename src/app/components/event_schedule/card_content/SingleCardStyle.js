import styled from 'styled-components';
import * as color from '../../colors';

export const SingleCardWrapper = styled.div`
    margin-top: 18px;
    display: flex;
    padding: 50px;
    background: ${color.white};
    &:hover{
    -webkit-box-shadow: 0px 3px 14px 1px rgba(235,223,202,0.65);
-moz-box-shadow: 0px 3px 14px 1px rgba(235,223,202,0.65);
box-shadow: 0px 3px 14px 1px rgba(235,223,202,0.65);
}
    div{
        padding:10px;
    }
@media all and (max-width:768px){
padding: 20px 30px;
}
@media all and (max-width:576px){
padding: 20px 30px;
}
`;

export const PicWrapper = styled.div`
img{
border-radius:50%
    };
`;

export const TextWrapper = styled.div`
padding-left: 38px;

@media all and (max-width:768px){
padding:0;
}
@media all and (max-width:576){
padding:0;
}
`;

export const TimeWrapper = styled.div`
color:${color.grey};
`;

export const AnchorWrapper = styled.a`
color: ${color.black};
display: block;
font-size:24px; 
font-weight: 700;
margin-bottom: 8px;
`;

export const ParagraphWrapper = styled.p`
color: ${color.grey};
line-height: 30px;
font-size: 16px;
 margin-bottom: 16px;
`;

export const HeaderWrapper = styled.h3`
font-weight: normal;
`;

export const SpeakersName = styled.a`
color:${color.grey};
&:hover{
    color:${color.indigo_blue};
}
`;
