import React from "react";
import { connect } from "react-redux";
import { fetchExpenses } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions"
import ExpenseShow from "./expense_show"


const mSTP = state => ({
    expenseIds: state.entities.users[state.session.id].expenseIds,
    expenses: Object.values(state.entities.expenses),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchExpenses: () => dispatch(fetchExpenses()),
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: modal => dispatch(openModal(modal)),
});

class AllExpenses extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchExpenses();
        this.props.fetchUsers();
    }

    render() {
        const currentUserExpenses = this.props.expenses.filter(expense => expense.splitterIds.includes(this.props.currentUser.id))
        return (
            <div>
                <section className="all-exp-head">
                    <h1>All expenses</h1>
                    <button onClick={() => this.props.openModal('addExpense')}>Add an expense</button>
                </section>
                <ul>
                    {currentUserExpenses.map(expense => <ExpenseShow key={expense.id} expense={expense}/>)}
                </ul>
            </div>
            
        )
    }
}

export default connect(mSTP, mDTP)(AllExpenses)