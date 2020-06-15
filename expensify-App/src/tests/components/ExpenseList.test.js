import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import { ExpenseList } from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';

test('Should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('Should render expense list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})