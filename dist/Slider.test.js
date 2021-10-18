import React from 'react';
import Slider from './Slider';
import { findByTestAttr } from '../test/testUtils';
import { mount } from 'enzyme';
const mockSetCurrentValue = jest.fn();
jest.mock('react', () => ({ ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetCurrentValue]
}));

const setup = (initialState = {}) => {
  return mount( /*#__PURE__*/React.createElement(Slider, {
    onChange: e => mockSetCurrentValue(e)
  }));
};

describe('Radio tests', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'slider-component');
    expect(component).toHaveLength(1);
  });
  test('onChange', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'slider-input-component');
    component.simulate('change');
  });
});