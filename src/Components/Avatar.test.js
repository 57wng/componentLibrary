import React from 'react';
import Avatar from './Avatar';
import { findByTestAttr } from '../test/testUtils';
import { mount } from 'enzyme';

const setup = (initialState = {}) => {
  // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
  return mount(<Avatar />);
};

describe('avatar tests', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'avatar-component');
    expect(component).toHaveLength(1);
  });
});
