import React from 'react';
import Radio from './Radio';
import {findByTestAttr} from '../test/testUtils';
import {mount} from 'enzyme';

const setup = (initialState = {}) => {
    return mount(<Radio value={'Radio Value'} color={"primary"}/>);
};

describe("Radio tests", () => {
    test('should render without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'radio-component');
        expect(component).toHaveLength(1);
    });
})
