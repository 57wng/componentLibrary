import React, {useState} from 'react';
import Modal from './Modal';
import {findByTestAttr} from '../test/testUtils';
import { act } from "react-dom/test-utils";
import {mount} from 'enzyme';

const mockSetOpen = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
}))

let originalUseState;

const setup = (initialState = {}) => {
    // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
    return mount(<Modal/>);
};

describe('Modal component', () => {
    let wrapper;

    beforeEach(() => {
        mockSetOpen.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(() => [false, mockSetOpen]);
        useState.mockImplementation(jest.requireActual('react').useState);
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
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'modal-component');
        expect(component).toHaveLength(1);
    });

    test("can click open button", () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'open-button');
        act(() => {
            /* fire events that update state */
            component.props().onClick();
        });

        expect(component).toHaveLength(1);

    })

    test('click open modal button', () => {
        useState.mockImplementation(() => [true, mockSetOpen])
        const wrapper = setup();
        const closeButton = findByTestAttr(wrapper, 'close-button');
        closeButton.props().onClick();
        expect(closeButton).toHaveLength(1)
    });
    test('click overlay modal', () => {
        useState.mockImplementation(() => [true, mockSetOpen])
        const wrapper = setup();
        const closeButton = findByTestAttr(wrapper, 'overlay-button');
        closeButton.props().onClick();
        expect(closeButton).toHaveLength(1)
    });

});
