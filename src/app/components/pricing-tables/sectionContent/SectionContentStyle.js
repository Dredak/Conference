import styled from 'styled-components';

export const ContentWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
@media all and (max-width: 768px){
            flex-direction: column;
}
`;