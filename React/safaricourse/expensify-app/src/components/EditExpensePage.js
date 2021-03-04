import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

<<<<<<< HEAD

// part II
// three
// should render the editexpense page
// should handle editExpense
// should handle removeExpense

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
        console.log('updated', expense);
    };

    onRemove = (expense) => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button 
                    onClick={this.onRemove}
                >Remove me!</button>
            </div>
        );
    }
}
=======
const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    // Dispatch the action to edit the expense
                    // Redirect to the dashboard
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                    console.log('updated', expense);
                }}
            />
            <button 
                onClick={(expense) => {
                    props.dispatch(removeExpense({ id: props.expense.id }));
                    props.history.push('/');
                    }
                }
            >Remove me!</button>
        </div>
    )
};
>>>>>>> elements/master

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

<<<<<<< HEAD
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense) => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
=======
export default connect(mapStateToProps)(EditExpensePage);
>>>>>>> elements/master
