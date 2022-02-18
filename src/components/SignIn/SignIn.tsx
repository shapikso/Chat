import React from 'react';
import { SingInWrapper, StFormWrapper,StH1 } from './styled';
import {isValidEmail, isValidPassword} from "../../helpers/validation";
import ActiveField from "./ActiveField";


const SignIn = () => {

    const [state, setState] = React.useState({
        login: '',
        password: '',
        error : {
            login: '',
            password: '',
        }
    });

    const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setState((prevState => (
        {...prevState,
            login: event.target.value
        })));
    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => setState((prevState => (
        {
            ...prevState,
            password: event.target.value
        })));

    const validatePassword = () => {
        const error = isValidPassword(state.password);
        setState({...state, error: {...state.error, password: error}});
    };
    const validateEmail = () => {
        const error = isValidEmail(state.login);
        setState({...state, error: {...state.error, login: error}});};

    return (
        <SingInWrapper>
            <StFormWrapper>
                <StH1>Sign in</StH1>
                <ActiveField
                    changeEmail={changeEmail}
                    changePassword={changePassword}
                    validatePassword={validatePassword}
                    validateEmail={validateEmail}
                    login={state.login}
                    password={state.password}
                    errorLogin={state.error.login}
                    errorPassword={state.error.password}
                />
            </StFormWrapper>
        </SingInWrapper>
    );
};

export default SignIn;
