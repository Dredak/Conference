import React, { useEffect } from 'react';
import { SectionWrapper } from './SpeakersStyle';
import { SectionTitle } from '..';
import { SpeakersContent, SpeakersContentSecond } from './speakersContent/SpeakersContent';
import WOW from 'wowjs';

export const Speakers = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    return (
        <SectionWrapper>
            <SectionTitle subTitle="Speaker" mainTitleLight="Our" mainTitle="Speakers" />
            <SpeakersContent />
        </SectionWrapper>
    );
}

export const SpeakersSecond = () => {
    return (
        <SectionWrapper>
            <SectionTitle subTitle="Speaker" mainTitleLight="Our" mainTitle="Speakers" />
            <SpeakersContentSecond />
            <SpeakersContentSecond />
        </SectionWrapper>
    );
}
