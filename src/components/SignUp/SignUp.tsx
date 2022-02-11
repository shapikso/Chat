import React from 'react';
import {isValidConfirmPassword, isValidEmail, isValidPassword} from "../../helpers/validation";
import {ActiveFieldWrapper, SingUpWrapper, StFormWrapper, StH1, StLinkWrapper} from "./styled";
import InputField from "../common/Input/InputField";
import Button from "../common/Button/Button";
import {Link} from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
    const [state, setState] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        isLoading: false,
        error : {
            confirmPassword: '',
            email: '',
            password: '',
        }
    });

    const changeEmail = (value:string) => setState((prevState => ({...prevState, email: value})));
    const changePassword = (value:string) => setState((prevState => ({...prevState, password: value})));
    const changeConfirmPassword = (value:string) => setState((prevState => ({...prevState, confirmPassword: value})));

    const validatePassword = () => {
        const error = isValidPassword(state.password);
        setState({...state, error: {...state.error, password: error}});
        validateConfirmPassword();
    };
    const validateConfirmPassword = () => {
        const error = isValidConfirmPassword(state.password, state.confirmPassword);
        setState((prevState) => ({...prevState, error: {...prevState.error, confirmPassword: error}}));
    };
    const validateEmail = () => {
        const error = isValidEmail(state.email);
        setState({...state, error: {...state.error, email: error}});};

    const onClickHandler = async () => {
        try {
            setState({...state, isLoading: true});
            const body = {email: state.email, password: state.password};
            const { data } = await axios.post('http://www.stepanchewbacca.pp.ua/api/user/sign-up', body);
            console.log(data);
            //localStorage.setItem('token', headers.token);
            //navigate('/acceptInvitation');
        } catch (error) {
            console.log(error);
        } finally {
            setState({...state, isLoading: false});
        }
        console.log('trying sing up');
    };
    return (
        <SingUpWrapper>
            <StFormWrapper>
                <StH1>Sign Up</StH1>
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
                    <InputField
                        onChange={changeConfirmPassword}
                        onBlur={validateConfirmPassword}
                        value={state.confirmPassword}
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm password"
                        error={state.error.confirmPassword}/>
                    <Button
                        type="button"
                        isDisabled={ !!state.error.email || !!state.error.password || !!state.error.confirmPassword }
                        onClick={onClickHandler}
                        contentKey="SIGN UP" />
                </ActiveFieldWrapper>
            </StFormWrapper>
            <StLinkWrapper>
                You have an account? <Link to="/sign-in"><span>Sign In</span></Link>
            </StLinkWrapper>
        </SingUpWrapper>
    );
};

export default SignUp;
