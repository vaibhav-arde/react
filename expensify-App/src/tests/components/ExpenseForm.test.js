import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('Should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})