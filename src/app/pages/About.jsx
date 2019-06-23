import React from 'react';
import { CountdownSecond } from '../components/countdown/Countdown';
import { LogisticsSecond } from '../components/logistics/Logistics';
import FunFacts from '../components/fun_facts/FunFacts';
import HappyClients from '../components/happy_clients/HappyClients';

const About = () => {
    return (
        <main>
            <CountdownSecond content="About Us" />
            <LogisticsSecond />
            <FunFacts />
            <HappyClients />
        </main>
    );
}

export default About;