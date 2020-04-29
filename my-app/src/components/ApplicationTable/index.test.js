import React from 'react';
import { shallow } from 'enzyme';
import ApplicationTable from './index';

describe('LoginPanel component', () => {
  const applications = [{
    id: 1, name: 'app1', description: 'app1 description', users: 20
  }, {
    id: 2, name: 'app2', description: 'app2 description', users: 10
  }];
  const wrapper = shallow(<ApplicationTable applications={applications} />);
  it('Should render all table head content', () => {
    expect(wrapper.text()).toMatch('ID');
    expect(wrapper.text()).toMatch('Name');
    expect(wrapper.text()).toMatch('Description');
    expect(wrapper.text()).toMatch('Active Users');
  });
  it('Should render all table body content', () => {
    expect(wrapper.text()).toMatch('1');
    expect(wrapper.text()).toMatch('app1');
    expect(wrapper.text()).toMatch('app1 description');
    expect(wrapper.text()).toMatch('20');
    expect(wrapper.text()).toMatch('2');
    expect(wrapper.text()).toMatch('app2');
    expect(wrapper.text()).toMatch('app2 description');
    expect(wrapper.text()).toMatch('10');
  });
});
