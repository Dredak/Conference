import React, { useEffect } from "react";
import { SectionWrapper, SubscribeContentWrapper, SubscribeTitle, SubscribeTextContent } from './SubscribeStyle';
import Inputs from './inputs/Inputs';
import WOW from 'wowjs';

const textContent = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in";

const Subscribe = () => {

    useEffect(() => {
        new WOW.WOW().init();
    })
    return (
        <SectionWrapper>
            <SubscribeContentWrapper className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="100">
                <SubscribeTitle children="Subcribe to our Newsletter" />
                <SubscribeTextContent children={textContent} />
                <Inputs />
            </SubscribeContentWrapper>
        </SectionWrapper>
    );
}

export default Subscribe;