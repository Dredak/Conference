import styled from 'styled-components';
import * as color from '../../../colors';

export const SingleCardWrapper = styled.div`
img{
    width:100%;
}
background-color: ${color.white};
width: 30.7%;
text-align: left;

@media all and (max-width:768px){
    width: 100%;
    margin-bottom:30px;
}
@media all and (max-width:576px){
    width: 100%;
    margin-bottom:30px;
}
`;

export const ImageWrapper = styled.div`

`;

export const RecentBlogInfo = styled.div`
padding: 24px;
`;

export const DateBox = styled.div`
display: flex;
justify-content:flex-start;
align-items: center;
margin-bottom: 16px;
`;

export const DayWrapper = styled.div`

`;

export const DayNumber = styled.span`
font-size: 58px;
color: ${color.purple};
font-weight: 100;
`;

export const MonthYearWrapper = styled.div`
padding: 4%;
`;

export const Year = styled.p`
color: ${color.grey};
`;
export const Month = styled.p`
color: ${color.grey};
`;

export const ThemeLink = styled.a`
color: ${color.black};
`;

export const ThemeText = styled.h3`
   font-weight: 400;
             margin: 8px 0 16px 0;
    `;

export const Description = styled.p`
color: ${color.grey};
 line-height: 25px;
    `;