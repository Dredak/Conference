import React, { useEffect } from 'react';
import { ContentWrapper, ContentInnerWrapper, MainTitle, TitleInnerWrapper, DateAndLocation, ContentInnerWrapperSecond, MainTitleSecond, TextWrapper } from './CountdownContentStyle';
import { NewLine } from '../..';
import Timer from './timer/Timer';
import { Link } from "react-router-dom";
import WOW from 'wowjs';

export const CountdownContent = (props) => {

    useEffect(() => {
        new WOW.WOW().init();
    }, [])

    return (
        <ContentWrapper>
            <ContentInnerWrapper className="wow fadeInUp" data-wow-duration="0.5s">
                <MainTitle>
                    Developer
                    <NewLine />
                    <TitleInnerWrapper>
                        Conference 2019
                    </TitleInnerWrapper>
                </MainTitle>
                <DateAndLocation>
                    December 21-24, 2019. Paris, Italy
                    </DateAndLocation>
                <Timer />
            </ContentInnerWrapper>
        </ContentWrapper >
    )
}

export const CountdownContentSecond = (props) => {

useEffect(() => {
        new WOW.WOW().init();
    }, [])
    
    return (
        <ContentWrapper>
            <ContentInnerWrapperSecond className="wow fadeInUp" data-wow-duration="0.5s">
                <MainTitleSecond>
                    {props.content}
                </MainTitleSecond>
                <Link to="/" className="homeLink">Home<i className="fas fa-angle-right"></i></Link>
                <TextWrapper className="homeLink">{props.content}<i className="fas fa-angle-right"></i></TextWrapper>
            </ContentInnerWrapperSecond>
        </ContentWrapper >
    )
}