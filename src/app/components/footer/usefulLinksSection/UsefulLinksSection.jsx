import React from 'react';
import { SectionWrapper, UsefulLinksList, ListItems } from './UsefulLinksSectionStyle';
import { Title } from '../eventalkSection/EventalkSectionStyle';
import PropTypes from 'prop-types';

const UsefulLinksSection = (props) => {

    const { privacy, data } = props;

    const listItems = data.items.map((item, index) => {
        return <ListItems key={index}>{item}</ListItems>
    });

    return (
        <SectionWrapper privacy={privacy}>
            <Title children={data.title} />
            <UsefulLinksList>
                {listItems}
            </UsefulLinksList>
        </SectionWrapper>
    );
}

export default UsefulLinksSection;

UsefulLinksSection.propTypes = {
    data: PropTypes.object.isRequired
}