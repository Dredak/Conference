import React from 'react';
import { FeaturesWrapper, Feature } from './FeaturesStyle';


const Features = (props) => {
    return (
        <FeaturesWrapper>
            {props.features.map((feature, index) => {
                return <Feature key={index}>{feature}</Feature>
            })}

        </FeaturesWrapper>
    );
}

export default Features;