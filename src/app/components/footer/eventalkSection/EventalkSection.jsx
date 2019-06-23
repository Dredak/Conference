import React from 'react';
import { EventalkSectionWrapper, Title, EventallTextContent } from './EventalkSectionStyle';
import SocialNetworks from './socialNetworks/SocialNetworks';

const textContent = "Far far away, behind the word mountains,far from the countries Vokalia and Consonantia, therelive the blind texts";

const EventalkSection = () => {
    return (
        <EventalkSectionWrapper>
            <Title>
                Eventalk
            </Title>
            <EventallTextContent children={textContent} />
            <SocialNetworks />
        </EventalkSectionWrapper>
    );
}

export default EventalkSection;