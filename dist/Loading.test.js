import React from 'react';
import Loading from './Loading';
import { findByTestAttr } from '../test/testUtils';
import { mount } from 'enzyme';

const setup = (initialState = {}) => {
  // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
  return mount( /*#__PURE__*/React.createElement(Loading, null));
};

describe('avatar tests', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'loading-component');
    expect(component).toHaveLength(1);
  });
});