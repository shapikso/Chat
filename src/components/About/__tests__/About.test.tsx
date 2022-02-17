import React from 'react';
import {shallow} from 'enzyme';
import About from "../About";

// jest.mock('react-router-dom', () => ({
//     useLocation: () => ({ pathname: '/' }),
//     Link: "a",
// }));

describe('About', () => {

    it('should render correctly', () => {
        const component = shallow( <About/> );
        expect(component).toMatchSnapshot();
    });
});