import React from 'react';
import Button from './Button';
import {findByTestAttr} from '../test/testUtils';
import {mount} from 'enzyme';

const setup = (initialState = {}) => {
    // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
    return mount(<Button value={'Button Value'} color={"primary"}/>);
};

describe("button tests", () => {
    test('should render without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'button-component');
        expect(component).toHaveLength(1);
    });

    test("should render button value", () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'button');
        expect(component.text()).toBe("Button Value");
    })

    test("should apply a color to the button", () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'button');
        const buttonComponent = component.hasClass('primary');
        expect(buttonComponent).toBe(true);
    })

    test("should ripple button on click", () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'button');
        component.simulate("click");
    })
})
