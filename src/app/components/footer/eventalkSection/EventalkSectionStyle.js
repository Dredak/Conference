import styled from 'styled-components';

export const EventalkSectionWrapper = styled.div`
flex-basis: 37%;
@media all and (max-width: 768px){
            flex-basis: 37%;
            h2 {
            }
}
`;

export const Title = styled.h2`
margin-bottom: 2.5em;
white-space: nowrap;
@media all and (max-width: 768px){
    margin-bottom: 1em;
    white-space: nowrap;    
} 
`;

export const EventallTextContent = styled.p`
line-height: 1.8;
color: rgba(255, 255, 255, 0.7);
`;