import styled from 'styled-components';

export const RecentBlogWrapper = styled.div`
width: 1100px;
margin: 0 auto;
text-align: center;
margin-bottom: 50px;

@media all and (max-width:1200px){
    width: 930px;
}
@media all and (max-width:992px){
    width: 690px;
}
@media all and (max-width:768px){
    width: 510px;
}
@media all and (max-width:576px){
padding: 0 15px;
width: 100%;
}
`;

export const CardsWrapper = styled.div`
display: flex;
justify-content: space-between;
@media all and (max-width:768px){
flex-direction: column;
}
@media all and (max-width:576px){
flex-direction: column;
}
`;

