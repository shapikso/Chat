import React from 'react';
import Error from './Error';
import {StInput, StRelativeWrapper} from "./styled";

type TInputProps = {
    type?: 'text' | 'password',
    label: string,
    value: string,
    placeholder: string,
    onChange: (value: string) => void,
    onBlur: (value: string) => void,
    error: string
};

const InputField: React.FC<TInputProps> = ({
    label,
    type = 'text',
    value ,
    placeholder,
    onChange,
    error = '',
    onBlur,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => onBlur(e.target.value);

    return (
        <StRelativeWrapper>
            <StInput
                type={type}
                name={label}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                error={error}
            />
            {error && <Error message={error}/>}
        </StRelativeWrapper>
    );
};

export default InputField;

