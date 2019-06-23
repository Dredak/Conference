import React from 'react';
import * as RecentBlogContentStyle from './RecentBlogContentStyle';
import SingleCard from './single_card/SingleCard';

const { RecentBlogWrapper, CardsWrapper } = RecentBlogContentStyle;

const items = [{
    img: "https://via.placeholder.com/350x270",
    day: "07",
    year: "2017",
    month: "January",
    themeName: "Why Lead Generation is Key for Business Growth",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."

}, {
    img: "https://via.placeholder.com/350x270",
    day: "07",
    year: "2017",
    month: "January",
    themeName: "Why Lead Generation is Key for Business Growth",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
}, {
    img: "https://via.placeholder.com/350x270",
    day: "07",
    year: "2017",
    month: "January",
    themeName: "Why Lead Generation is Key for Business Growth",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
}];

const RecentBlogContent = () => {
    return (
        <>
            <RecentBlogWrapper>
                <CardsWrapper>
                    {items.map((singleCardItem, index) => <SingleCard data={singleCardItem} key={index} index={index}/>)}
                </CardsWrapper>
            </RecentBlogWrapper>
        </>
    )
}

export default RecentBlogContent; 