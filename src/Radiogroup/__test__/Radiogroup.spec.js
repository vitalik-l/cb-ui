import React from 'react';
import {shallow} from 'enzyme';
import Radiogroup from '../Radiogroup';
import RadiogroupButton from '../RadiogroupButton';

describe('Radiogroup', () => {
    const wrapper = shallow(
        <Radiogroup value={1}>
            <RadiogroupButton value={1}>1</RadiogroupButton>
            <RadiogroupButton value={2}>2</RadiogroupButton>
            <RadiogroupButton value={3}>3</RadiogroupButton>
        </Radiogroup>
    );

    it('default value is 1. Should set the "active" class to the RadiogroupButton with the value prop equal to 1', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('change value to 2. Should set the "active" class to the RadiogroupButton with the value prop equal to 2', () => {
        wrapper.setProps({value: 2});
        expect(wrapper).toMatchSnapshot();
    });
});