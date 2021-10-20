import React from 'react';
import { findByTestAttr } from '../test/testUtils';
import { mount } from 'enzyme';
import Dropdown from './Dropdown';
const mockSetCurrentValue = jest.fn();
jest.mock('react', () => ({ ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetCurrentValue]
}));

const setup = (initialState = {}) => {
  return mount( /*#__PURE__*/React.createElement(Dropdown, {
    label: 'Age',
    value: initialState,
    options: [18, 19, 20],
    setState: e => mockSetCurrentValue(e),
    customClass: 'custom'
  }));
};

describe('Dropdown Component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'dropdown-component');
    expect(component).toHaveLength(1);
  });
  test('updates label state', done => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "label-field");
    component.simulate('change', {
      target: {
        value: 'test'
      }
    });
    done();
  });
  test('updates select dropdown state', done => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "select");
    component.simulate('change', {
      target: {
        value: 'test'
      }
    });
    done();
  });
});