import React from 'react';
import * as TextOuterWrapperStyle from './TextOuterWrapperStyle';
import SingleTextItem from './single_text_item/SingleTextItem';



const { ContactHeader, InfoInnerWrapper } = TextOuterWrapperStyle

const arr = [{
    p: "Address: 198 West 21th Street, Netherlands",
    anchor: "+ 1235 2355 98"
}, {
    p: "Phone:",
    a: "+ 1235 2355 98"
}, {
    p: "Email:",
    a: "info@yoursite.com"
}, {
    p: "Website:",
    a: "yoursite.com"
}];

const TextOuterWrapper = () => {
    return (
        <>
            <textOuterWrapperDiv>
                <ContactHeader>Contact Information</ContactHeader>
                <InfoInnerWrapper>
                    {arr.map((singleItem, index) => <SingleTextItem data={singleItem} key={index} />)}
                </InfoInnerWrapper>
            </textOuterWrapperDiv>
        </>
    )
}

export default TextOuterWrapper; 