import React from 'react';
import {shallow} from 'enzyme';
import ActiveField from "../ActiveField";

const mockedNavigator = jest.fn();
jest.mock("react-router", () => ({
    ...(jest.requireActual("react-router") as any), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
    useNavigate: () => mockedNavigator,
}));
describe('About', () => {

    const props = {
        changeEmail: jest.fn(),
        changePassword: jest.fn(),
        validateEmail: jest.fn(),
        validatePassword: jest.fn(),
        login: 'shap@ggg.com',
        password: 'Ksdbhj12345',
        errorLogin: '',
        errorPassword: ''
    };

    it('should render correctly', () => {
        const component = shallow( <ActiveField {...props}/> );
        expect(component).toMatchSnapshot();
    });
    it('should show login', () => {
        const component = shallow( <ActiveField {...props}/> );
        component.find('ForwardRef(TextField)').at(0).getElement().props.onChange({target: { value : 'shapovalo@gmail.com'}});
        expect(props.changeEmail).toHaveBeenCalled();
    });
    it('should show password', () => {
        const component = shallow( <ActiveField {...props}/> );
        component.find('ForwardRef(TextField)').at(1).getElement().props.onChange({target: { value : 'shapovalo@gmail.com'}});
        expect(props.changePassword).toHaveBeenCalled();
    });
    it('should check login validation', () => {
        const component = shallow( <ActiveField {...props}/> );
        component.find('ForwardRef(TextField)').at(0).getElement().props.onBlur();
        expect(props.validateEmail).toHaveBeenCalled();
    });
    it('should check password validation', () => {
        const component = shallow( <ActiveField {...props}/> );
        component.find('ForwardRef(TextField)').at(1).getElement().props.onBlur();
        expect(props.validatePassword).toHaveBeenCalled();
    });
});
