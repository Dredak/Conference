import styled from 'styled-components';
import * as colors from '../../colors';

export const InputsWrapper = styled.div`
display: flex;
justify-content: center;
`;

export const TextInput = styled.input`
border-radius: 5px 0 0 5px;
border: none;
flex-basis: 30%;
padding: 10px;
`;

export const SubmitButton = styled.input`
color: ${colors.white};
cursor: pointer;
flex-basis: 10%;
display: inline-block;
padding: 16px;
border: none;
background-color: ${colors.dark_purple};
border-radius: 0 5px 5px 0;
`;