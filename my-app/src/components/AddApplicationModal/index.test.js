import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import AddApplicationModal from './index';

describe('AddApplicationModal', () => {
  const eventMock = { target: { value: 'somefakevalue' } };
  const element = document.createElement('div');
  const defaultProps = {
    isModalOpen: true, onRequestCloseFunc: () => null, modalLabel: 'test', appElementSelector: element
  };

  it('handleNameChange() should set state correctly', () => {
    const wrapper = shallow(<AddApplicationModal {...defaultProps} />);
    wrapper.instance().handleNameChange(eventMock);
    expect(wrapper.state().appName).to.equal(eventMock.target.value);
  });

  it('handleDescriptionChange() should set state correctly', () => {
    const wrapper = shallow(<AddApplicationModal {...defaultProps} />);
    wrapper.instance().handleDescriptionChange(eventMock);
    expect(wrapper.state().appDescription).to.equal(eventMock.target.value);
  });
});
