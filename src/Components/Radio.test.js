import React from 'react';
import Radio from './Radio';
import {findByTestAttr} from '../test/testUtils';
import {mount} from 'enzyme';

const setup = (initialState = {}) => {
    return mount(<Radio options={['TEST']} onChange={(e) => e}/>);
};

describe('Radio tests', () => {
    test('should render without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'radio-component');
        expect(component).toHaveLength(1);
    });

    test('clicking radio changes state', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'radio-input-component');
        component.at(1).props().onClick({target: {value: "test"}});
    });
});
