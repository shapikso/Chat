import React from 'react';
import {Link} from "react-router-dom";
import {StFormWrapper, StH1, StLinkWrapper} from "./styled";

const ErrorInvitation = () => {

    return (
        <StFormWrapper>
            <StH1>Due to your long absence, your data has been deleted from the system, please re-register</StH1>
            <StLinkWrapper marginTop="35px">
                <Link to="/">Sign In</Link>
            </StLinkWrapper>
        </StFormWrapper>
    );
};

export default ErrorInvitation;
