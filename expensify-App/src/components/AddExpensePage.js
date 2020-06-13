import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // console.log(expense)
        // props.dispatch(addExpense(expense));
        this.props.onSubmit(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>This is from my Add expense component</h1>
                <ExpenseForm
                    onSubmit= {this.onSubmit}
                />
            </div>
        );
    }
}
// const AddExpensePage = (props) => (
//     <div>
//         <h1>This is from my Add expense component</h1>
//         <ExpenseForm
//             onSubmit={(expense) => {
//                 // console.log(expense)
//                 // props.dispatch(addExpense(expense));
//                 props.onSubmit(expense);
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
