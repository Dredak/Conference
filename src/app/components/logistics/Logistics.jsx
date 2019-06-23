import React from 'react'
import * as LogisticsStyle from './LogisticsStyle';
import WOW from 'wowjs';

const { LogisticsWrapper, LogisticsSection, ItemBox, BlueCircle
    , ItemNames, ItemDescription, LogisticsWrapperSecond, LogisticsSecondContent } = LogisticsStyle;

export class Logistics extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <>
                <LogisticsSection>
                    <LogisticsWrapper>
                        <ItemBox className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="100">
                            <img src="./images/location.png" alt="location..." />
                            <BlueCircle></BlueCircle>
                            <ItemNames>Venue</ItemNames>
                            <ItemDescription>203 Fake St. Mountain View, San Francisco, California, USA</ItemDescription>
                        </ItemBox>
                        <ItemBox className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="100" data-wow-delay="0.1s">
                            <img src="./images/globe.png" alt="globe..." />
                            <BlueCircle></BlueCircle>
                            <ItemNames>Venue</ItemNames>
                            <ItemDescription>203 Fake St. Mountain View, San Francisco, California, USA</ItemDescription>
                        </ItemBox>
                        <ItemBox className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="100" data-wow-delay="0.2s">
                            <img src="./images/hotel.png" alt="hotel..." />
                            <BlueCircle></BlueCircle>
                            <ItemNames>Venue</ItemNames>
                            <ItemDescription>203 Fake St. Mountain View, San Francisco, California, USA</ItemDescription>
                        </ItemBox>
                        <ItemBox className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="100" data-wow-delay="0.3s">
                            <img src="./images/cooking.png" alt="chef..." />
                            <BlueCircle></BlueCircle>
                            <ItemNames>Venue</ItemNames>
                            <ItemDescription>203 Fake St. Mountain View, San Francisco, California, USA</ItemDescription>
                        </ItemBox>
                    </LogisticsWrapper>
                </LogisticsSection>
            </>
        )
    }
}

const logisticsContent = "25 Years of Experience in Business & Events Conference";

export class LogisticsSecond extends React.Component {

    render() {
        return (
            <>
                <LogisticsSection>
                    <LogisticsWrapperSecond>
                        <LogisticsSecondContent children={logisticsContent} />
                    </LogisticsWrapperSecond>
                </LogisticsSection>
            </>
        )
    }
}
