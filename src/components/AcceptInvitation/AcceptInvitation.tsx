import React from 'react';
import {isValidName} from "../../helpers/validation";
import {ActiveFieldWrapper, AcceptWrapper, StFormWrapper, StH1, SelectWrapper, DateInputWrapper} from "./styled";
import InputField from "../common/Input/InputField";
import Button from "../common/Button/Button";
import Select from "react-select";
import DateInput from "../common/DateInput/DateInput";

const GENDER_OPTIONS = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },];

type TOption = {
    value: string,
    label: string
};

type TState = {
    firstName: string,
    secondName: string,
    gender: null | TOption,
    dateOfBirthday: Date,
    isLoading: boolean;
    error: {
        [key: string]: string
    }
}


const AcceptInvitation = () => {
    const [state, setState] = React.useState<TState>({
        firstName: '',
        secondName: '',
        gender: null,
        isLoading: false,
        dateOfBirthday: new Date(),
        error : {
            firstName: '',
            secondName: '',
        }
    });

    const changeFirstName = (value:string) => setState(prevState => ({...prevState, firstName: value}));
    const changeLastName = (value:string) => setState(prevState => ({...prevState, secondName: value}));
    const changeGender = (gender: TOption | null) => setState(prevState => ({...prevState, gender: gender}));
    const setDate = (date:Date) => setState(prevState => ({...prevState, dateOfBirthday: date}));
    const validateFirstName = () => {
        const error = isValidName(state.firstName);
        setState({...state, error: {...state.error, firstName: error}});};

    const validateSecondName = () => {
        const error = isValidName(state.secondName);
        setState({...state, error: {...state.error, secondName: error}});};


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
    // @ts-ignore
    return (
        <AcceptWrapper>
            <StFormWrapper>
                <StH1>Confirm Registration</StH1>
                <ActiveFieldWrapper>
                    <InputField
                        onChange={changeFirstName}
                        onBlur={validateFirstName}
                        value={state.firstName}
                        label="firstName"
                        placeholder="Type your Name"
                        error={state.error.firstName}  />
                    <InputField
                        onChange={changeLastName}
                        onBlur={validateSecondName}
                        value={state.secondName}
                        label="secondName"
                        placeholder="Type your Surname"
                        error={state.error.secondName}/>
                    <SelectWrapper>
                        <Select
                            value={state.gender}
                            options={GENDER_OPTIONS}
                            onChange={changeGender}
                            placeholder="Choose gender"
                        />
                    </SelectWrapper>
                    <DateInputWrapper>
                        <DateInput startDate={state.dateOfBirthday} setStartDate={setDate}/>
                    </DateInputWrapper>
                    <Button
                        type="button"
                        isDisabled={ !!state.error.firstName || !!state.error.secondName }
                        onClick={onClickHandler}
                        contentKey="CONFIRM" />
                </ActiveFieldWrapper>

            </StFormWrapper>
        </AcceptWrapper>
    );
};

export default AcceptInvitation;
