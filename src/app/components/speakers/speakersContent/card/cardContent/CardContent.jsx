import React from 'react';
import { CardContentWrapper, SpeakersName, SpeakersProfession } from './CardContentStyle';
import PropTypes from 'prop-types';

const CardContent = (props) => {
    const { name, profession } = props;
    return (
        <CardContentWrapper>
            <SpeakersName children={name} />
            <SpeakersProfession children={profession} />
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
        </CardContentWrapper>
    );
}

export default CardContent;

CardContent.propTypes = {
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
}
