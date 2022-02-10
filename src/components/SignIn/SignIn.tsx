import React, {useContext} from 'react';
//import InputField from "../common/Input/InputField";
import { ActiveFieldWrapper, SingInWrapper, StFormWrapper,StH1 } from './styled';
import Button from "../common/Button/Button";
import TextField from '@mui/material/TextField';
//import {Link} from "react-router-dom";
import {isValidEmail, isValidPassword} from "../../helpers/validation";
import { useNavigate } from 'react-router';
import {UserContext} from "../../userContext";
//import axios from 'axios';

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

    const changeEmail = (event : any) => setState((prevState => ({...prevState, login: event.target.value})));
    const changePassword = (event: any ) => setState((prevState => ({...prevState, password: event.target.value})));

    const validatePassword = () => {
        const error = isValidPassword(state.password);
        setState({...state, error: {...state.error, password: error}});
    };
    const validateEmail = () => {
        const error = isValidEmail(state.login);
        setState({...state, error: {...state.error, login: error}});};

    const onClickHandler = () => {
        // const body = {email : "jopaui@ik.ru", password: "228_1488"};
        // const {headers} = await axios.post('http://www.stepanchewbacca.pp.ua/api/user/sign-up', body);
        // console.log(headers);
            //localStorage.setItem('token', headers.token);
        setNewUser(state.login);
        navigate('/cards');
        //console.log('trying sing up');
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
