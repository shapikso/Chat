import React from 'react';
import InputField from "../common/Input/InputField";
import { ActiveFieldWrapper, SingInWrapper, StFormWrapper, StLinkWrapper,StH1 } from './styled';
import Button from "../common/Button/Button";
import {Link} from "react-router-dom";
import {isValidEmail} from "../../helpers/validation";
import axios from 'axios';

const ForgotPassword = () => {
    const [state, setState] = React.useState({
        email: '',
        isLoading: false,
        error : {
            email: '',
        }
    });

    const changeEmail = (value:string) => setState((prevState => ({...prevState, email: value})));

    const validateEmail = () => {
        const error = isValidEmail(state.email);
        setState({...state, error: {...state.error, email: error}});};

    const onClickHandler = async () => {
        try {
            setState({...state, isLoading: true});
            const body = { "email" : state.email };
            const {data} = await axios.post('https://stepanchewbacca.pp.ua', body);
            console.log(data);
            //localStorage.setItem('token', headers.token);
            //navigate('/acceptInvitation');
        } finally {
            setState({...state, isLoading: false});
        }
        console.log('trying forgot password');
    };
    return (
        <SingInWrapper>
            <StFormWrapper>
                <StH1>Change your password</StH1>
                <ActiveFieldWrapper>
                    <InputField
                        onChange={changeEmail}
                        onBlur={validateEmail}
                        value={state.email}
                        label="Your email:"
                        placeholder="Type your Email"
                        error={state.error.email}  />
                    <Button
                        type="button"
                        isDisabled={ !!state.error.email }
                        onClick={onClickHandler}
                        contentKey="Change password" />
                </ActiveFieldWrapper>

                <StLinkWrapper marginTop="35px">
                    You have an account? <Link to="/"><span>Sign In</span></Link>
                </StLinkWrapper>
            </StFormWrapper>
        </SingInWrapper>
    );
};

export default ForgotPassword;