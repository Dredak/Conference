import React from 'react';
import * as SingleTextItemStyle from './SingleTextItemStyle';



const { Paragraph, Anchor, SingleItemWrapper } = SingleTextItemStyle

const SingleTextItem = (props) => {
    return (
        <>
            <SingleItemWrapper>
                <Paragraph>{props.data.p}<Anchor>{props.data.a}</Anchor></Paragraph>
            </SingleItemWrapper>
        </>
    )
}

export default SingleTextItem; 