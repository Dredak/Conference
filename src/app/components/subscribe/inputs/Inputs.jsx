import React from 'react';
import { InputsWrapper, TextInput, SubmitButton } from './InputsStyle';

const Inputs = () => {
    return (
        <InputsWrapper>
            <TextInput type="text" />
            <SubmitButton type="submit" value="Subscribe" />
        </InputsWrapper>
    );
}

export default Inputs;