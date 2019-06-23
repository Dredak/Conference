import styled from 'styled-components';
import * as color from '../../colors';

export const SingleDayBox = styled.div`
padding: 40px 30px;
flex-basis: 100%;
background-color: ${color.white};
position: relative;
&:hover{
    background-color: ${color.purple};
    color: ${color.white};
    cursor: pointer;
    >div{
    background-color: ${color.purple};
    height: 15px;
    width: 15px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%) translateY(-50%) rotate(45deg);
    };
}
`;

export const Triangle = styled.div`
 
`;

export const UpperDayText = styled.h3`
font-size: 22px;
`;

export const LowerDayText = styled.span`
font-size: 14px;
font-weight:bolder;
`;