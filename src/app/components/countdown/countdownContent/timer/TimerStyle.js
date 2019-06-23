import styled from 'styled-components';
import * as colors from '../../../colors';

export const TimerWrapper = styled.div`
display: flex;
flex-direction: row;
`
export const TimeUnit = styled.div`
width: 10%;
border-left: 1px solid rgba(0, 0, 0, 0.05);
font-size: 38px;
color: ${colors.purple};
font-weight: 100;
padding: 0 0 0 24px;
:first-child {
    padding-left: 0px;
    border: none;
    }
@media all and (max-width: 992px) {
    width: 25%;
}
`
export const TimerInnerWrapper = styled.span`
font-size: 1rem;
color: rgba(0, 0, 0, 0.3);
`
