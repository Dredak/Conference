import styled from 'styled-components';
import * as colors from '../colors';

export const SectionWrapper = styled.section`
padding: 7em 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: ${colors.light_grey};
`
export const PricingTablesContentWrapper = styled.div`
width: 1110px;
@media all and (max-width: 1200px) {
            width: 930px;
}

@media all and (max-width: 992px) {
            width: 690px;
}
@media all and (max-width: 768px){
            width: 510px;
        .card-wrapper{
            flex-direction: column;
        }
}
@media all and (max-width: 576px) {
            width: 100%;
}
`