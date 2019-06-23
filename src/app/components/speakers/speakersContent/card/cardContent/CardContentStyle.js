import styled from 'styled-components';
import * as colors from '../../../../colors';

export const CardContentWrapper = styled.div`
padding: 16px 0px;
width: 100%;
i {
    color: ${colors.purple};
    visibility: hidden;
    margin: 10px;
}
`;

export const SpeakersName = styled.h3`
font-size: 1.5em;
margin-bottom: 10px;
`;

export const SpeakersProfession = styled.p`
margin-bottom: 20px;
`;