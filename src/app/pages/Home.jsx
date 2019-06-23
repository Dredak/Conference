import React from 'react';
import { Countdown } from '../components/countdown/Countdown';
import { Logistics } from '../components/logistics/Logistics';
import FunFacts from '../components/fun_facts/FunFacts';
import { Speakers } from '../components/speakers/Speakers';
import EventSchedule from '../components/event_schedule/EventSchedule';
import PricingTables from '../components/pricing-tables/PricingTables';
import Subscribe from '../components/subscribe/Subscribe';
import HappyClients from '../components/happy_clients/HappyClients';
import Gallery from '../components/gallery/Gallery';
import { RecentBlog } from '../components/recent_blog/RecentBlog';
import WOW from 'wowjs';

class Home extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <main>
                <Countdown />
                <Logistics />
                <FunFacts />
                <Speakers />
                <EventSchedule />
                <HappyClients />
                <PricingTables />
                <RecentBlog></RecentBlog>
                <Subscribe />
                <Gallery />
            </main>
        )
    }
}

export default Home;