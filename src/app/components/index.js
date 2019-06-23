import styled from 'styled-components';
import React, { useEffect } from 'react';
import * as colors from './colors';
import PropTypes from 'prop-types';
import WOW from 'wowjs';


export const NewLine = styled.br``;

export const SectionTitleWrapper = styled.div`
margin-bottom: 3em;
text-align: center;
`;
export const SubTitle = styled.p`
color: ${colors.grey};
margin-bottom: 15px;
`;
export const MainTitle = styled.h2`
font-size: 2.5em;
`;
export const MainTitleInnerWrapper = styled.span`
font-weight: 100;
`;

export const SectionTitle = (props) => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])

    return (
        <SectionTitleWrapper className="title-wrapper wow fadeInUp" data-wow-duration="0.5s" data-wow-offset="150">
            <SubTitle>
                {props.subTitle}
            </SubTitle>
            <MainTitle>
                <MainTitleInnerWrapper>
                    {props.mainTitleLight}
                </MainTitleInnerWrapper>
                {props.mainTitle}
            </MainTitle>
        </SectionTitleWrapper>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string.isRequired,
    mainTitleLight: PropTypes.string.isRequired,
    mainTitle: PropTypes.string.isRequired
}