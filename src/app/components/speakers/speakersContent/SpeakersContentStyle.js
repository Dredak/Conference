import styled from 'styled-components';

export const SpeakersWrapper = styled.div`
width: 1110px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
@media all and (max-width: 1200px) {
    width: 930px;
}
@media all and (max-width: 992px) {
    width: 690px;
}
@media all and (max-width: 768px){
    width: 510px;
}
@media all and (max-width: 576px) {
    width: 100%;
}
`;

export const SpeakersInnerWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;