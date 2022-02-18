import React from 'react';
import {shallow} from 'enzyme';
import SinglCard from "../SinglCard";

// jest.mock('react-router-dom', () => ({
//     useLocation: () => ({ pathname: '/' }),
//     Link: "a",
// }));

describe('SinglCard', () => {

    const props = {
        cardId: 'VAN_EX1_284',
        img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/' +
            'f6319753158720db641862ae23804695a6fb672f498e213774b065d01292a1e0.png'
    };
    it('should render correctly', () => {
        const component = shallow( <SinglCard {...props}/> );
        expect(component).toMatchSnapshot();
    });
    it('should create link correctly', () => {
        const component = shallow( <SinglCard {...props}/> );
        expect(component.find('Link').getElement().props.to).toEqual(`/cards/${props.cardId}`);
    });
    it('should show image correctly', () => {
        const component = shallow( <SinglCard {...props}/> );
        expect(component.find('ForwardRef(CardMedia)').getElement().props.image).toEqual(props.img);
    });
});