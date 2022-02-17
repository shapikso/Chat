import React from 'react';
import { mount } from 'enzyme';
import CardPage from "../CardPage";
import axios from "axios";
import { act } from '@testing-library/react';
import { cardData } from './__card-mock__';
import {HEADER, SINGL_CARD_URL} from "../../../constants/url";


const data = cardData;
jest.mock("axios");
describe('async Movies', () => {
    const setStateMock = jest.fn();
    beforeEach(() => {
        React.useState = jest.fn().mockReturnValue([{isLoading: true, card: null}, setStateMock]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it(`should load films`, async () => {
        let component;
        await act(async () => {
            // @ts-ignore
            await axios.get.mockImplementationOnce(() => Promise.resolve(data));
            component = mount(<CardPage/>);
        });
        // @ts-ignore
        component.update();
        await expect(axios.get).toHaveBeenCalledWith(`${SINGL_CARD_URL}VAN_EX1_284`, {headers: HEADER});
        await expect(axios.get).toHaveBeenCalledTimes(1);
        expect(setStateMock).toHaveBeenCalled();
    });
});

