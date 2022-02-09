import React from 'react';
import InputField from "../common/Input/InputField";
import { ActiveFieldWrapper, SingInWrapper, StFormWrapper, StLinkWrapper,StH1 } from './styled';
import Button from "../common/Button/Button";
import {Link} from "react-router-dom";
import {isValidEmail, isValidPassword} from "../../helpers/validation";
//import axios from 'axios';

const SignIn = () => {
    const [state, setState] = React.useState({
        email: '',
        password: '',
        isLoading: false,
        error : {
            email: '',
            password: '',
        }
    });

    const changeEmail = (value:string) => setState((prevState => ({...prevState, email: value})));
    const changePassword = (value:string) => setState((prevState => ({...prevState, password: value})));

    const validatePassword = () => {
        const error = isValidPassword(state.password);
        setState({...state, error: {...state.error, password: error}});
    };
    const validateEmail = () => {
        const error = isValidEmail(state.email);
        setState({...state, error: {...state.error, email: error}});};

    const onClickHandler = async () => {
        try {
            setState({...state, isLoading: true});
            //const body = {login: state.email, password: state.password};
            //const {headers} = await axios.post(URL_SIGN_IN, body);
            //localStorage.setItem('token', headers.token);
            //navigate('/acceptInvitation');
        } finally {
            setState({...state, isLoading: false});
        }
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
                        value={state.email}
                        label="Login"
                        placeholder="Type your Email"
                        error={state.error.email}  />
                    <InputField
                        onChange={changePassword}
                        onBlur={validatePassword}
                        value={state.password}
                        label="Password"
                        type="password"
                        placeholder="Type your Password"
                        error={state.error.password}/>
                    <Button
                        type="button"
                        isDisabled={ !!state.error.email || !!state.error.password }
                        onClick={onClickHandler}
                        contentKey="SIGN IN" />
                </ActiveFieldWrapper>

                <StLinkWrapper marginTop="35px">
                    <Link to="/user/forgotPassword">Forgot password?</Link>
                </StLinkWrapper>
            </StFormWrapper>
            <StLinkWrapper>
                You have an account? <Link to="/user/signUp"><span>Sign Up</span></Link>
            </StLinkWrapper>
        </SingInWrapper>
    );
};

export default SignIn;
