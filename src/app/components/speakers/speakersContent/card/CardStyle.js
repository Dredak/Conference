import styled from 'styled-components';

export const CardWrapper = styled.div`
width:500px;
display:flex;
flex-direction: column;
img {
    width: 100%;
}
:hover i {
    visibility: visible;
    }
:focus {
    outline: 0;
    }
@media all and (max-width: 1200px){
  width: 930px;
}
@media all and (max-width:992px){
  width: 690px;
}
@media all and (max-width:768px){
  width: 510px;
}
@media all and (max-width:576px){
  width: 100%;
}
`;