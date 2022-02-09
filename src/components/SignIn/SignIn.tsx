import React from 'react';
import InputField from "../common/Input/InputField";
import { ActiveFieldWrapper, SingInWrapper, StFormWrapper,StH1 } from './styled';
import Button from "../common/Button/Button";
//import {Link} from "react-router-dom";
import {isValidEmail, isValidPassword} from "../../helpers/validation";
import { useNavigate } from 'react-router';
//import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        login: '',
        password: '',
        error : {
            login: '',
            password: '',
        }
    });

    const changeEmail = (value:string) => setState((prevState => ({...prevState, login: value})));
    const changePassword = (value:string) => setState((prevState => ({...prevState, password: value})));

    const validatePassword = () => {
        const error = isValidPassword(state.password);
        setState({...state, error: {...state.error, password: error}});
    };
    const validateEmail = () => {
        const error = isValidEmail(state.login);
        setState({...state, error: {...state.error, login: error}});};

    const onClickHandler = async () => {
            //const body = {login: state.email, password: state.password};
            //const {headers} = await axios.post(URL_SIGN_IN, body);
            //localStorage.setItem('token', headers.token);
        navigate('/cards');
        console.log('trying sing up');
    };
    return (
        <SingInWrapper>
            <StFormWrapper>
                <StH1>Sign in</StH1>
                <ActiveFieldWrapper>
                    <InputField
                        onChange={changeEmail}
                        onBlur={validateEmail}
                        value={state.login}
                        label="Login"
                        placeholder="Type your login"
                        error={state.error.login}  />
                    <InputField
                        onChange={changePassword}
                        onBlur={validatePassword}
                        value={state.password}
                        label="Password"
                        type="password"
                        placeholder="Type your password"
                        error={state.error.password}/>
                    <Button
                        type="button"
                        isDisabled={ !!state.error.login || !!state.error.password }
                        onClick={onClickHandler}
                        contentKey="SIGN IN" />
                </ActiveFieldWrapper>
            </StFormWrapper>
        </SingInWrapper>
    );
};

export default SignIn;
