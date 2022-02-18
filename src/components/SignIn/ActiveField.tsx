import React, {useContext} from 'react';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {ActiveFieldWrapper} from "./styled";
import {useNavigate} from "react-router";
import {UserContext} from "../../userContext";

type TContext = {
    user: string,
    setNewUser: (value: string) => void
}
type TProps ={
    changeEmail: (event: React.ChangeEvent<HTMLInputElement>)=> void,
    changePassword: (event: React.ChangeEvent<HTMLInputElement>)=> void,
    validateEmail: ()=> void,
    validatePassword: ()=> void,
    login: string,
    password: string,
    errorLogin: string,
    errorPassword: string
}

const ActiveField: React.FC<TProps> = ({changeEmail,changePassword,validateEmail,validatePassword,
    login, password, errorLogin, errorPassword}) => {
    const navigate = useNavigate();
    const {setNewUser} = useContext<TContext>(UserContext);
    const onClickHandler = () => {
        setNewUser(login);
        navigate('/cards');
    };
    return (
        <div>
            <ActiveFieldWrapper>
                <TextField
                    id="filled-basic"
                    onChange={changeEmail}
                    onBlur={validateEmail}
                    value={login}
                    label="Login"
                    error={!!errorLogin}
                    helperText={errorLogin}/>
                <TextField
                    id="filled-basic"
                    onChange={changePassword}
                    onBlur={validatePassword}
                    value={password}
                    label="Password"
                    type="password"
                    error={!!errorPassword}
                    helperText={errorPassword}/>
                <Button
                    variant="contained"
                    disabled={ !!errorLogin || !!errorPassword }
                    onClick={onClickHandler}
                    size="large">
                    Sign In
                </Button>
            </ActiveFieldWrapper>
        </div>
    );
};

export default ActiveField;