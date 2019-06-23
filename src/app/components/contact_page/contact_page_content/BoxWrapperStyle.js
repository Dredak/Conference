import styled from 'styled-components'
import * as color from '../../colors';

export const BoxWrapperDiv = styled.div`
display: flex;
@media all and (max-width:768px){
    flex-direction: column-reverse;
}
@media all and (max-width:576px){
    flex-direction: column-reverse;
}

`;

export const MapOutterWrapper = styled.div`
 padding:0 ;

 @media all and (max-width:1200px){
 iframe{
    width: 435px;
 }
}

@media all and (max-width:992px){
 iframe{
    width: 330px;
    height: 50%;
 }
}

@media all and (max-width:768px){
    iframe{
width: 100%;
padding-left: 15px;
height: 300px;
}
}
@media all and (max-width:576px){
    iframe{
width:100%;
padding-right: 0;
height: 300px;
}
}
`;

export const FormOutterWrapper = styled.div`
padding-left:15px;
width: 100%;
`;

export const Form = styled.div`
background-color: ${color.light_grey};
padding: 48px;
height: 558px;
`;

export const TextInput = styled.input`
border-radius: 5px;
border: 1px groove #ced4da;
border-collapse: unset;
height: 52px;
width: 100%; 
padding: 6px 12px;
font-size: 16px; 

@media all and (max-width:1200px){
width: 100%;
}
`;

export const SingleItemWrapper = styled.div`
margin-bottom: 36px;
`;

export const TextArea = styled.textarea`
width: 100%;
resize: none;
border-radius: 5px;
border: 1px groove #ced4da;
border-collapse: unset;
height: 52px;
width: 100%; 
padding: 6px 12px;
font-size: 16px;
`;

export const Button = styled.button`
border-radius: 4px;
padding: 16px 48px;
color: ${color.white};
background-color: ${color.purple};
border: 0;
border-radius: 5px;
height: 52px;
width: 50%; 
@media all and (max-width:1200px){
width: 100%;
}
`;