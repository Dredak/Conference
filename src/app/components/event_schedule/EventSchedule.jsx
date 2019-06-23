import React from 'react';
import * as EventScheduleStyle from './EventScheduleStyle';
import SingleDay from './single_day_content/SingleDay';
import SingleCard from './card_content/SingleCard';
import { SectionTitle } from '../index';

const { EventScheduleSection, EventScheduleWrapper, DaysBoxPlaceHolder, SpeakersCardsWrapper } = EventScheduleStyle;


const dayItems = [{
    day: "Day 01",
    date: "21 Dec, 2019",
    profileImg: "https://via.placeholder.com/120",
    time: "08:-10:00",
    themeTitle: "Best Practices For Programming WordPress",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    name: "Brett Morgan",
    occupation: "Founder of WordPress"
}, {
    day: "Day 02",
    date: "21 Dec, 2019",
    profileImg: "https://via.placeholder.com/120",
    time: "08:-10:00",
    themeTitle: "Best Practices For Programming WordPress",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    name: "Brett Morgan",
    occupation: "Founder of WordPress"
}, {
    day: "Day 03",
    date: "21 Dec, 2019",
    profileImg: "https://via.placeholder.com/120",
    time: "08:-10:00",
    themeTitle: "Best Practices For Programming WordPress",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    name: "Brett Morgan",
    occupation: "Founder of WordPress"
}, {
    day: "Day 04",
    date: "21 Dec, 2019",
    profileImg: "https://via.placeholder.com/120",
    time: "08:-10:00",
    themeTitle: "Best Practices For Programming WordPress",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    name: "Brett Morgan",
    occupation: "Founder of WordPress"
}];

class EventSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };
    render() {
        return (
            <>

                <EventScheduleSection>
                    <SectionTitle subTitle="Schedule" mainTitleLight="Event" mainTitle="Schedule" />
                    <EventScheduleWrapper>
                        <DaysBoxPlaceHolder >
                            {dayItems.map((singleItem, index) => <SingleDay data={singleItem} key={index} index={index} />)}
                        </DaysBoxPlaceHolder>
                        <SpeakersCardsWrapper >
                            {dayItems.map((singleItemCard, index) => <SingleCard data={singleItemCard} key={index}/>)}
                        </SpeakersCardsWrapper>
                    </EventScheduleWrapper>
                </EventScheduleSection>
            </>
        )
    }
};
export default EventSchedule;