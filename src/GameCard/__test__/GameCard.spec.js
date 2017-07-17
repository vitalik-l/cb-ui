import React from 'react';
import {shallow} from 'enzyme';
import GameCard from '../GameCard';

describe('GameCard', () => {
    const wrapper = shallow(<GameCard/>);
    it('custom className. Should set custom className prop to root element', () => {
        wrapper.setProps({className: 'test'});
        expect(wrapper).toMatchSnapshot();
    });
});