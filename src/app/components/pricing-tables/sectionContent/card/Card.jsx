import React, { useEffect } from 'react';
import { CardWrapper, Package, Price, Currency, Period, FeatureTitle, BuyTicket } from './CardStyle';
import Features from './features/Features';
import PropTypes from 'prop-types';
import WOW from 'wowjs';

const Card = (props) => {

    const { cardType, price, currency, period, featuresTitle, features } = props.data;
    useEffect(() => {
        new WOW.WOW().init();
    }, [])

    return (
        <CardWrapper className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="50" data-wow-delay={`${0 + props.index / 10}s`}>
            <Package children={cardType} />
            <Price>
                <Currency children={currency} />
                {price}
            </Price>
            <Period children={period} />
            <FeatureTitle children={featuresTitle} />
            <Features features={features} />
            <BuyTicket children="Buy Ticket" />
        </CardWrapper>

    );
}

export default Card;

Card.propTypes = {
    data: PropTypes.object.isRequired
}