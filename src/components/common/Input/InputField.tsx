import React from 'react';
import Error from './Error';
import {StInput, StRelativeWrapper} from "./styled";

type TInputProps = {
    type: 'text' | 'submit',
    label: string,
    value: string,
    placeholder: string,
    onChange: (value: string) => void,
    readOnly: boolean,
    onBlur: (value: string) => void,
    contentKey: string,
    error: string
};

const InputField: React.FC<TInputProps> = ({
    label,
    type = 'text',
    value,
    placeholder,
    onChange,
    error,
    readOnly = false,
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
                readOnly={readOnly}
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

