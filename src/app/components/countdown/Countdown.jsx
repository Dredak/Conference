import React from 'react';
import { SectionWrapper, ContentOuterWrapper, ContentOuterWrapperSecond } from './countdownStyle';
import { CountdownContent, CountdownContentSecond } from './countdownContent/CountdownContent';

export const Countdown = () => {
    return (
        <SectionWrapper>
            <ContentOuterWrapper>
                <CountdownContent />
            </ContentOuterWrapper>
        </SectionWrapper>
    )
}

export const CountdownSecond = (props) => {
    return (
        <SectionWrapper>
            <ContentOuterWrapperSecond>
                <CountdownContentSecond content={props.content}/>
            </ContentOuterWrapperSecond>
        </SectionWrapper>
    )
}