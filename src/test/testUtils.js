import checkPropTypes from 'check-prop-types';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

/*************************************************
 *
 * @function
 * @description FINDS A SPECIFIC ELEMENT BASED ON 'data-test' ATTRIBUTE
 *
 * @name findByTestAttr
 *
 * @param {Wrapper} wrapper - comments: wrapper for the component you're testing against
 * @param {string} value - comments: value that is given in the 'data-test' attribute
 *
 * @returns {Wapper} - comments: Enzyme wrapper of mounted component
 *
 * @example - findByTestAttr(wrapper, 'test-component');
 *
 *************************************************/

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

/*
    SETS UP TO MAKE SURE THAT PROPS ARE INCLUDED
*/
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};

export const renderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
};
