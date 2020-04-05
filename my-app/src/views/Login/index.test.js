import React from 'react';
import { shallow } from 'enzyme';
import LoginView from './index';

describe('LoginView component', () => {
  it('Should render correct content in headings', () => {
    const wrapper = shallow(<LoginView />);
    expect(wrapper.text()).toMatch('One Time Password');
    expect(wrapper.text()).toMatch('Manager');
  });
});
