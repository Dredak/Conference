import React from 'react'
import * as SingleBoxStyle from './SingleBoxStyle';

const { Numbers, EventInfo, SingleBoxWrapper } = SingleBoxStyle;


const SingleBox = (props) => {
    const { img, number, eventInfo } = props.data;
    return (
        <>
            <SingleBoxWrapper>
                <img src={img} alt="fun fact picture" />
                <Numbers>{number}</Numbers>
                <EventInfo>{eventInfo}</EventInfo>
            </SingleBoxWrapper>
        </>
    )
}

export default SingleBox;