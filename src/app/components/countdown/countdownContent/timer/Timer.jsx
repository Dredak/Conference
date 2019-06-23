import React from 'react';
import { TimerWrapper, TimeUnit, TimerInnerWrapper } from './TimerStyle';
import { NewLine } from '../../..';

const timerContet = [
    {
        number: 200,
        unit: "Days"
    },
    {
        number: 18,
        unit: "Hours"
    },
    {
        number: 30,
        unit: "Minutes"
    },
    {
        number: 17,
        unit: "Seconds"
    }
]

const Timer = () => {
    return (
        <TimerWrapper>
            {timerContet.map((unit, index) => {
                return (
                    <TimeUnit key= {index}>
                        {unit.number}
                        <NewLine />
                        <TimerInnerWrapper>
                            {unit.unit}
                        </TimerInnerWrapper>
                    </TimeUnit>
                )
            })}
        </TimerWrapper>
    )
}
export default Timer;
