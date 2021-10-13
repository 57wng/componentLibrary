import React from 'react';
import Textarea from './Textarea';
import { findByTestAttr } from '../test/testUtils';
import { mount } from 'enzyme';
const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({ ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetCurrentGuess]
}));

const setup = (initialState = {}) => {
  // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
  return mount( /*#__PURE__*/React.createElement(Textarea, {
    type: "text",
    placeholder: "FavoriteFood",
    value: initialState,
    onChange: e => mockSetCurrentGuess(e)
  }));
};

describe('Textarea Component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'textarea-component');
    expect(component).toHaveLength(1);
  });
  test('updates state onChange', done => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "textarea-field");
    component.simulate('change', {
      target: {
        value: 'test'
      }
    });
    done();
  });
});