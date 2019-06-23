import React, { useEffect } from 'react';
import { SpeakersWrapper, SpeakersInnerWrapper } from './SpeakersContentStyle';
import { Card, CardSecond } from './card/Card';
import WOW from 'wowjs';

export const SpeakersContent = () => {
    
    useEffect(() => {
        new WOW.WOW().init();
    }, [])

    return (
        <SpeakersWrapper className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="50">
            <SpeakersInnerWrapper>
                <Card />
            </SpeakersInnerWrapper>
        </SpeakersWrapper >
    );
}

export const SpeakersContentSecond = () => {

    return (
        <SpeakersWrapper>
            <SpeakersInnerWrapper>
                <CardSecond />
            </SpeakersInnerWrapper>
        </SpeakersWrapper >
    );
}