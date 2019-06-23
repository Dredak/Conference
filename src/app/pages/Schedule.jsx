import React from 'react';
import { CountdownSecond } from '../components/countdown/Countdown';
import EventSchedule from '../components/event_schedule/EventSchedule';
import PricingTables from '../components/pricing-tables/PricingTables';
import Subscribe from '../components/subscribe/Subscribe';

const Schedule = () => {

    return (
        <main>
            <CountdownSecond content="Event Schedule" />
            <EventSchedule />
            <PricingTables />
            <Subscribe />
        </main>
    )
}

export default Schedule;