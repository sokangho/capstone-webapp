import React from 'react';
import { shallow } from 'enzyme';
import LoginPanel from './index';

describe('LoginPanel component', () => {
  it('Should render correct content', () => {
    const wrapper = shallow(<LoginPanel />);
    expect(wrapper.text()).toMatch('Log In');
    expect(wrapper.text()).toMatch('Username');
    expect(wrapper.text()).toMatch('Password');
  });
});
