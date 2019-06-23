import React, { useEffect } from 'react';
import * as SingleCardStyle from './SingleCardStyle';
import WOW from 'wowjs';

const { SingleCardWrapper, ImageWrapper, RecentBlogInfo, DateBox,
    DayWrapper, DayNumber, MonthYearWrapper, Year,
    Month, ThemeLink, ThemeText, Description } = SingleCardStyle;



const SingleCard = (props) => {
    useEffect(() => {
        new WOW.WOW().init();
    })
    return (
        <>
            <SingleCardWrapper className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="50" data-wow-delay={`${0 + props.index / 10}s`}>
                <ImageWrapper>
                    <img src={props.data.img} alt="" />
                </ImageWrapper>
                <RecentBlogInfo>
                    <DateBox>
                        <DayWrapper>
                            <DayNumber>{props.data.day}</DayNumber>
                        </DayWrapper>
                        <MonthYearWrapper>
                            <Year>{props.data.year}</Year>
                            <Month>{props.data.month}</Month>
                        </MonthYearWrapper>
                    </DateBox>
                    <ThemeLink href="#">
                        <ThemeText>{props.data.themeName}</ThemeText>
                    </ThemeLink>
                    <Description>{props.data.description}</Description>
                </RecentBlogInfo>
            </SingleCardWrapper>

        </>
    )
}

export default SingleCard;