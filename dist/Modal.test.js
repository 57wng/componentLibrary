import React from 'react';
import Modal from './Modal';
import { findByTestAttr } from '../test/testUtils';
import { mount } from 'enzyme';
const mockSetOpen = jest.fn();
jest.mock('react', () => ({ ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetOpen]
}));
let originalUseState;

const setup = (initialState = {}) => {
  // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
  return mount( /*#__PURE__*/React.createElement(Modal, null));
};

describe('Modal component', () => {
  let wrapper;
  beforeEach(() => {
    mockSetOpen.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => [false, mockSetOpen]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'modal-component');
    expect(component).toHaveLength(1);
  });
  test('isOpen is true', () => {
    const component = findByTestAttr(wrapper, 'modal-component');
    expect(component).toHaveLength(1);
  });
  test('click open modal button', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'open-button');
    component.props().onClick();
  });
  test('click close modal button', () => {
    const wrapper = setup();
    const open = findByTestAttr(wrapper, 'open-button');
    open.props().onClick();
    const component = findByTestAttr(wrapper, 'close-button');
    component.props().onClick();
  });
});