import styled from 'styled-components';

export const SectionWrapper = styled.section`
height: 100vh;
position: relative;
`
export const ContentOuterWrapper = styled.div`
height: 100vh;
width: 50%;
background-image:linear-gradient(-45deg, rgba(107, 117, 255, 0.1), rgba(89, 183, 255, 0.1));
display: flex;
flex-direction: column;
justify-content: center;
`

export const ContentOuterWrapperSecond = styled(ContentOuterWrapper)`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
`;