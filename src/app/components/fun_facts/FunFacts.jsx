import React, { useEffect } from 'react'
import * as FunFactsStyle from './FunFactsStyle';
import SingleBox from './SingleBox';
import WOW from 'wowjs';

const { FunFactsSection, PictureWrapper, TextWrapper, InnerTextWrapper, FunFactsUpperPosition,
    FunFactsMainTitle, FontNormalWrapper, Text, BoxWrapper, } = FunFactsStyle;

const boxItems = [{
    img: "./images/guest.png",
    number: 30,
    eventInfo: "Speakers"
}, {
    img: "./images/handshake.png",
    number: 200,
    eventInfo: "Sponsors"
}];
const secondBoxItems = [{
    img: "./images/chair.png",
    number: 450,
    eventInfo: "Seats"
}, {
    img: "./images/idea.png",
    number: 120,
    eventInfo: "Innovations"
}]

const FunFacts = () => {

    useEffect(() => {
        new WOW.WOW().init();
    }, [])

    return (
        <FunFactsSection>
            <PictureWrapper>
                <img className="breakPoint" src="http://via.placeholder.com/540x759" alt="sth" />
            </PictureWrapper>
            <TextWrapper >
                <InnerTextWrapper className="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="150">
                    <FunFactsUpperPosition>Fun Facts</FunFactsUpperPosition>
                    <FunFactsMainTitle><FontNormalWrapper>Fun</FontNormalWrapper> Facts</FunFactsMainTitle>
                    <Text>
                        Far far away, behind the word mountains, far from the countries Vokalia
                        and
                        Consonantia
                    </Text>
                </InnerTextWrapper>
                <BoxWrapper className="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="150">
                    {boxItems.map((SingleItem, index) => <SingleBox data={SingleItem} key={index} />)}
                </BoxWrapper>
                <BoxWrapper className="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="150">
                    {secondBoxItems.map((SingleItem, index) => <SingleBox data={SingleItem} key={index} />)}
                </BoxWrapper>

            </TextWrapper>

        </FunFactsSection>
    )
}

export default FunFacts;
