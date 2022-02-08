import React from 'react';
import {StInvalidDiv} from "./styled";

type TError = {
    message: string
};

const Error: React.FC<TError> = ({message}) => (
    <StInvalidDiv>
        {message}
    </StInvalidDiv>
);

export default Error;
