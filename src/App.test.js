import React from 'react';
import App from './App';
import { findByTestAttr } from './test/testUtils';
import { shallow } from 'enzyme';

const setup = (initialState = {}) => {
  // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
  return shallow(<App />);
};

test('should render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'app-component');
  expect(appComponent).toHaveLength(1);
});
