import React, { useEffect } from 'react';
import { SocialNetworksWrapper, SocialNetworkInnerWrapper, SocialNetworkLink } from './SocialNetworksStyle';
import WOW from 'wowjs';

const socialNetworksData = [<i className='fab fa-twitter'></i>, <i className='fab fa-instagram'></i>, <i className='fab fa-facebook-f'></i>];

const socialNetworks = socialNetworksData.map((socialNetwork, index) => {
    return (
        <SocialNetworkInnerWrapper key={index} className="wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="50" data-wow-delay={`${0 + index / 10}s`}>
            <SocialNetworkLink children={socialNetwork} />
        </SocialNetworkInnerWrapper>
    )
})

const SocialNetworks = () => {
    return (
        <SocialNetworksWrapper>
            {socialNetworks}
        </SocialNetworksWrapper>
    );
}

export default SocialNetworks;