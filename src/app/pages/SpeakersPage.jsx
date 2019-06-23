import React from 'react';
import { CountdownSecond } from '../components/countdown/Countdown';
import { Logistics } from '../components/logistics/Logistics';
import { SpeakersSecond } from '../components/speakers/Speakers';
import PricingTables from '../components/pricing-tables/PricingTables';
import Subscribe from '../components/subscribe/Subscribe';

const SpeakersPage = () => {
    return (
        <main>
            <CountdownSecond content="Speakers" />
            <Logistics />
            <SpeakersSecond />
            <PricingTables />
            <Subscribe />
        </main >
    )
}

export default SpeakersPage;