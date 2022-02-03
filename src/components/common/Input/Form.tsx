import React from 'react';
import {StForm} from "./styled";

type TForm = {
    onSubmit: () => void,
    children: React.ReactNode
};

const Form: React.FC<TForm> = ({ onSubmit, children }) => (
    <StForm onSubmit={onSubmit}>
        {children}
    </StForm>
);

export default Form;
