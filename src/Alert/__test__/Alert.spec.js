import React from 'react';
import {shallow} from 'enzyme';
import Alert from '../Alert';

describe('Alert', () => {
   const wrapper = shallow(<Alert />);

   it('non active', () => {
      expect(wrapper).toMatchSnapshot();
   });

   it('active', () => {
      wrapper.setProps({content: 'test'});
      expect(wrapper).toMatchSnapshot();
   });
});