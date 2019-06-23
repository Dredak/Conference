import React from 'react';
import * as ContactPageStyle from './ContactPageStyle';
import TextOuterWrapper from './contact_page_content/TextOuterWrapper';
import BoxWrapper from './contact_page_content/BoxWrapper'

// import ContactPageContent from './contact_page_content/ContactPageContent';

const { ContactPageSection, ContactPageSectionWrapper } = ContactPageStyle

const ContactPage = () => {
    return (
        <>
            <ContactPageSection>
                <ContactPageSectionWrapper>
                    <TextOuterWrapper />
                    <BoxWrapper />
                </ContactPageSectionWrapper>
            </ContactPageSection>
        </>
    )
}

export default ContactPage; 