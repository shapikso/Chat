import React from 'react';
import {isValidConfirmPassword, isValidPassword} from "../../helpers/validation";
import {ActiveFieldWrapper, SingUpWrapper, StFormWrapper, StH1, StLinkWrapper} from "./styled";
import InputField from "../common/Input/InputField";
import Button from "../common/Button/Button";
import {Link} from "react-router-dom";
import axios from "axios";

const ConfirmPassword = () => {
    const [state, setState] = React.useState({
        password: '',
        confirmPassword: '',
        isLoading: false,
        error : {
            confirmPassword: '',
            password: '',
        }
    });

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

    const onClickHandler = async () => {
        try {
            setState({...state, isLoading: true});
            const body = {"password": state.password};
            const {data} = await axios.post('https://stepanchewbacca.pp.ua', body);
            console.log(data);
            //const body = {login: state.email, password: state.password};
            //const {headers} = await axios.post(URL_SIGN_IN, body);
            //localStorage.setItem('token', headers.token);
            //navigate('/acceptInvitation');
        } finally {
            setState({...state, isLoading: false});
        }
        console.log('trying confirm password');
    };
    return (
        <SingUpWrapper>
            <StFormWrapper>
                <StH1>Change Password</StH1>
                <ActiveFieldWrapper>
                    <InputField
                        onChange={changePassword}
                        onBlur={validatePassword}
                        value={state.password}
                        label="Password"
                        type="password"
                        placeholder="Enter a new password"
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
                        isDisabled={ !!state.error.password || !!state.error.confirmPassword }
                        onClick={onClickHandler}
                        contentKey="CHANGE PASSWORD" />
                </ActiveFieldWrapper>
            </StFormWrapper>
            <StLinkWrapper>
                You have an account? <Link to="/"><span>Sign In</span></Link>
            </StLinkWrapper>
        </SingUpWrapper>
    );
};

export default ConfirmPassword;
