import React, {useContext} from 'react';
//import InputField from "../common/Input/InputField";
import { ActiveFieldWrapper, SingInWrapper, StFormWrapper,StH1 } from './styled';
import Button from "../common/Button/Button";
import TextField from '@mui/material/TextField';
import {isValidEmail, isValidPassword} from "../../helpers/validation";
import { useNavigate } from 'react-router';
import {UserContext} from "../../userContext";

type TContext = {
    user: string,
    setNewUser: (value: string) => void
}

const SignIn = () => {
    const navigate = useNavigate();
    const {setNewUser} = useContext<TContext>(UserContext);
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

    const onClickHandler = () => {
        setNewUser(state.login);
        navigate('/cards');
    };
    return (
        <SingInWrapper>
            <StFormWrapper>
                <StH1>Sign in</StH1>
                <ActiveFieldWrapper>
                    <TextField
                        id="filled-basic"
                        onChange={changeEmail}
                        onBlur={validateEmail}
                        value={state.login}
                        label="Login"
                        error={!!state.error.login}
                        helperText={state.error.login}/>
                    <TextField
                        id="filled-basic"
                        onChange={changePassword}
                        onBlur={validatePassword}
                        value={state.password}
                        label="Password"
                        type="password"
                        error={!!state.error.password}
                        helperText={state.error.password}/>
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
