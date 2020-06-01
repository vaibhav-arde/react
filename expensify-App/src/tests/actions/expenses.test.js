import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('abc123', { note: 'New note Value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: { note: 'New note Value' }
    })
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'last Month Rent',
        amount: 67500,
        createdAt: 1000
    }
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
});

test('Should setup add expense action object with default values', () => {
    const expenseData = {}
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});