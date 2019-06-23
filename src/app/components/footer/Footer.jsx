import React from 'react';
import { SectionWrapper, FooterContentWrapper, FooterContentInnerWrapper } from './FooterStyle';
import Copyright from './copyright/Copyright';
import EventalkSection from './eventalkSection/EventalkSection';
import UsefulLinksSection from './usefulLinksSection/UsefulLinksSection';
import QuestionSectoin from './questionsSection/QuestionsSection';
const usefulLinksData = {
    title: "Useful Links",
    items: ["Speakers", "Schedule", "Events", "Blog"]
}

const privacySectionData = {
    title: "Privacy",
    items: ["Career", "About Us", "Contact Us", "Services"]
};

const Footer = () => {
    return (
        <SectionWrapper>
            <FooterContentWrapper>
                <FooterContentInnerWrapper>
                    <EventalkSection />
                    <UsefulLinksSection data={usefulLinksData} />
                    <UsefulLinksSection privacy data={privacySectionData} />
                    <QuestionSectoin></QuestionSectoin>
                </FooterContentInnerWrapper>
                <Copyright />
            </FooterContentWrapper>
        </SectionWrapper>
    );
}

export default Footer;