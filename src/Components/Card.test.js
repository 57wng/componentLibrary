import React from 'react';
import Card from './Card';
import {findByTestAttr} from '../test/testUtils';
import {mount} from 'enzyme';

const setup = (initialState = {}) => {
    // NEED TO CALL MOUNT INSTEAD OF SHALLOW TO RUN `useEffect`
    return mount(<Card/>);
};

describe("<Card/>", () => {
    test("reders without error", () =>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'card-component');
        expect(component).toHaveLength(1);
    })
})