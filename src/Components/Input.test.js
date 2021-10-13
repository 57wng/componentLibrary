import React from 'react';
import Input from './Input';
import {findByTestAttr} from '../test/testUtils';
import {mount} from 'enzyme';

const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess],
}));


const setup = (initialState = {}) => {
    // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
    return mount(<Input type={"text"} placeholder={"FavoriteFood"} value={initialState} onChange={(e) => mockSetCurrentGuess(e)}/>);
};

describe('Input Component', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'input-component');
        expect(component).toHaveLength(1);
    })

    test('updates state onChange', (done) => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, "input-field");

        component.simulate('change', { target: { value: 'test' } });
        done();
    })
})