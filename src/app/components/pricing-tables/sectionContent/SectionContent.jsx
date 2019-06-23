import React from 'react';
import { ContentWrapper } from './SectionContentStyle';
import Card from './card/Card';
const cardsData = [
    {
        cardType: "PERSONAL",
        price: 85,
        currency: "$",
        period: "per Month",
        featuresTitle: "ENJOY ALL THE FEATURES",
        features: [
            "Conference Seats",
            "Free Wifi",
            "Coffee Breaks",
            "Lunch",
            "Workshops",
            "One Speakers",
            "Papers"
        ]
    },
    {
        cardType: "SMALL TEAM",
        price: 200,
        currency: "$",
        period: "per Month",
        featuresTitle: "ENJOY ALL THE FEATURES",
        features: [
            "Conference Seats",
            "Free Wifi",
            "Coffee Breaks",
            "Lunch",
            "Workshops",
            "One Speakers",
            "Papers"
        ]
    },
    {
        cardType: "FAMILY PACK",
        price: 499,
        currency: "$",
        period: "per Month",
        featuresTitle: "ENJOY ALL THE FEATURES",
        features: [
            "Conference Seats",
            "Free Wifi",
            "Coffee Breaks",
            "Lunch",
            "Workshops",
            "One Speakers",
            "Papers"
        ]
    }
]

const cards = cardsData.map((data, index) => {
    return <Card data={data} key={index} index={index} />
})


const SectionContent = () => {
    return (
        <ContentWrapper>
            {cards}
        </ContentWrapper>
    );
}

export default SectionContent;