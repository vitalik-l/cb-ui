import React from 'react';
import { shallow } from 'enzyme';
import BestViewNotify from '../BestViewNotify';

describe('BestViewNotify', () => {
  const wrapper = shallow(<BestViewNotify />);

  it('default', () => {
    expect(wrapper).toMatchSnapshot();
  });

  /**
     * should set the 'test' class name to root element
     */
  it('custom className', () => {
    wrapper.setProps({ className: 'test' });
    expect(wrapper.hasClass('test')).toBeTruthy();
  });

  /**
     * should remove the 'hide' class from root element
     */
  it('set visible', () => {
    wrapper.setState({ bestView: false });
    expect(wrapper.hasClass('hide')).toBeFalsy();
  });

  /**
     * should set the 'hide' class to root element
     */
  it('hide panel on click', () => {
    wrapper.setState({ bestView: false });
    wrapper.find('#BestViewNotify-close').simulate('click');
    expect(wrapper.hasClass('hide')).toBeTruthy();
  });
});
