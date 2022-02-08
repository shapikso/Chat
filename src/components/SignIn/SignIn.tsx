import React from 'react';
import InputField from "../common/Input/InputField";
import { InputWrapper, SingInWrapper, StFormWrapper, StLinkWrapper,StH1 } from './styled';
import Button from "../common/Button/Button";
import {Link} from "react-router-dom";
//import axios from 'axios';

const SignIn = () => {
    const [state, setState] = React.useState({
        email: '',
        password: '',
        error : {
            email: '',
            password: '',
        }
    });

    const changeEmail = (value:string) => setState((prevState => ({...prevState, email: value})));
    const changePassword = (value:string) => setState((prevState => ({...prevState, password: value})));
    const validateEmail = (value: string) => {console.log(value);};
    const validatePassword = (value: string) => {console.log(value);};

    const onClickHandler = async () => {
        // try {
        //     setState({...state, isLoading: true});
        //     const body = {login: state.user, password: state.password};
        //     const {headers} = await axios.post(URL_SIGN_IN, body);
        //     localStorage.setItem('token', headers.token);
        //     navigate('/movies');
        // } finally {
        //     setState({...state, isLoading: false});
        // }
        console.log('trying sing up');
    };
    return (
        <SingInWrapper>
            <StFormWrapper>
                <StH1>Sign in</StH1>
                <InputWrapper>
                    <InputField
                        onChange={changeEmail}
                        onBlur={validateEmail}
                        value={state.email}
                        label="Login"
                        placeholder="Type your Email"
                        error=""  />
                    <InputField
                        onChange={changePassword}
                        onBlur={validatePassword}
                        value={state.password}
                        label="Password"
                        type="password"
                        placeholder="Type your Password"
                        error=""/>
                </InputWrapper>
                <Button type="button" onClick={onClickHandler} contentKey="SING IN" />
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