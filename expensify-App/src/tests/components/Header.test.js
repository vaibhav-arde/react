import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

// below example test is using react-test-renderer
test('Should render Header correctly using react-test-renderer', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})

// Below test are using enzyme by airbnb
test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Expensify');
    // expect(wrapper).toMatchSnapshot();
    expect(toJSON(wrapper)).toMatchSnapshot();
});