import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './index';

describe('App component', () => {
  it('Should render login view', () => {
    const wrapper = mount(<BrowserRouter initialEntries={['/']}><App /></BrowserRouter>);
    const loginView = wrapper.find('LoginView');
    expect(loginView.exists()).toBeTruthy();
  });
});
