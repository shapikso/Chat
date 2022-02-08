import React from 'react';
import {StButton} from "./styled";

type TButtonProps = {
    type: 'button' | 'submit'| 'reset',
    isDisabled?: boolean,
    onClick: () => void,
    contentKey: string,
};

const Button: React.FC<TButtonProps> = ({ type = 'button', isDisabled = false, onClick, contentKey }) => (
    <StButton type={type} onClick={onClick} disabled={isDisabled}>
        {contentKey}
    </StButton>
);

export default Button;
