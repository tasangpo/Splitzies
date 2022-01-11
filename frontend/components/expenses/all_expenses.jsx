import React from "react";
import { connect } from "react-redux";
import { fetchExpenses } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = state => ({
    expenseIds: state.entities.users[state.session.id].expenseIds,
    expenses: Object.values(state.entities.expenses),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchExpenses: () => dispatch(fetchExpenses()),
    fetchUsers: () => dispatch(fetchUsers())
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
        const currentUserExpenses = this.props.expenses.filter(expense => expense.payer_id === this.props.currentUser.id)
        return (
            <div>
                <section className="all-exp-head">
                    <h1>All expenses</h1>
                    <button>Add an expense</button>
                </section>
                <ul>
                    {currentUserExpenses.map(expense => <li key={expense.id} className="exp-item">{`${expense.date}: ${expense.description}: $${expense.amount}`}</li>)}
                </ul>
            </div>
            
        )
    }
}

export default connect(mSTP, mDTP)(AllExpenses)