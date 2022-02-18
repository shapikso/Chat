import React from 'react';
import {mount, shallow} from 'enzyme';
import Cards from "../Cards";
import axios from "axios";
import { act } from '@testing-library/react';
import { cardData } from './__card-mock__';
import {CARDS_URL, HEADER} from "../../../constants/url";

const data = cardData;
jest.mock("axios");
jest.mock('react-router-dom', () => ({
    useLocation: () => ({ pathname: '/cards' })
}));
describe('async Cards', () => {
    const setStateMock = jest.fn();
    beforeEach(() => {
        React.useState = jest.fn().mockReturnValue([{isLoading: false, cards:[]}, setStateMock]);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it(`should change state cards`, async () => {
        let component;
        await act(async () => {
            await axios.get.mockImplementationOnce(() => Promise.resolve(data));
            component = mount(<Cards/>);
        });
        // @ts-ignore
        component.update();
        await expect(axios.get).toHaveBeenCalledWith(`${CARDS_URL}`, {headers: HEADER});
        await expect(axios.get).toHaveBeenCalledTimes(1);
        expect(setStateMock).toHaveBeenCalled();
    });
    it(`should load card`, async () => {
        const setStateMock = jest.fn();
        React.useState = jest.fn().mockReturnValue([{isLoading: false, cards:data}, setStateMock]);
        const component = shallow(<Cards/>);
        expect(component.find('.cardsList').getElement().props.children.length).toEqual(2);
    });
});

