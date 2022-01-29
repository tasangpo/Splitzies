import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions"
import { updateExpense, removeExpenseErrors, createExpenseSplit } from "../../actions/expense_actions";
import { closeModal } from "../../actions/modal_actions";


const mSTP = state => ({
    friendIds: state.entities.users[state.session.id].friendIds,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.expense,
    expenses: state.entities.expenses,
    expenseId: state.ui.modalId
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    updateExpense: expense => dispatch(updateExpense(expense)),
    closeModal: () => dispatch(closeModal()),
    removeExpenseErrors: () => dispatch(removeExpenseErrors()),
    createExpenseSplit: payload => dispatch(createExpenseSplit(payload)),
    removeExpenseSplit: payloadId => dispatch(removeExpenseSplit(payloadId))
});


class EditExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        const { expenses, expenseId} = this.props;
        const expense = expenses[expenseId];
        this.state = {
            id: expenseId,
            payer_id: expense.payer_id,
            description: expense.description,
            amount: expense.amount,
            date: expense.date,
            split_option: "equal",
            splitters: expense.splitterIds
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.removeExpenseErrors();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    updateList() {
        const list = this.state.splitters;
        const expense = this.props.expenses[this.props.expenseId]
        return e => {
            let splitterId = parseInt(e.currentTarget.value)
            if (list.includes(splitterId)) {
                let idx = list.indexOf(splitterId)
                list.splice(idx, 1);
                this.props.createExpenseSplit({ expense_id: expense.id, user_id: splitterId })
            } else {
                list.push(splitterId)
                this.props.createExpenseSplit({ expense_id: expense.id, user_id: splitterId})
            }
            this.setState({ splitters: list })
        }
    }

    updatePayer() {
        return e => this.setState({ payer_id: parseInt(e.currentTarget.value) })
    }

    handleSubmit(e) {
        e.preventDefault();
        const expensePayload = {id: this.state.id, payer_id: this.state.payer_id, description: this.state.description, amount: this.state.amount, date: this.state.date, split_option: this.state.split_option };
        this.props.updateExpense(expensePayload);
        this.props.closeModal();
    }

    renderErrors() {
        if (!this.props.errors.length) {
            return null
        }
        return (
            <div className="exp-err">
                <h1>The following errors occured: </h1>
                <ul>
                    {this.props.errors.map((err, idx) => <li className="each-err" key={idx}>{err}</li>)}
                </ul>
            </div>
        )
    }
    render() {
        const { description, amount, date } = this.state;
        if (Object.keys(this.props.users).length < 2) {
            return null
        }
        const { expenses, expenseId } = this.props;
        const expense = expenses[expenseId];
        const payerId = expense.payer_id;
        return (
            <div className="add-exp-form-container">
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <div className="add-exp-header">
                        <h1> Edit expense</h1>
                    </div>
                    <div className="with-you">
                        <label id="name-label"> With <strong style={{ 'fontWeight': 'bold' }}>you</strong> and: &nbsp;	&nbsp;

                            <div className="name-field" style={{ 'color': '#999' }}><input type="checkbox" disabled style={{ 'display': 'none' }} />Choose friends below: </div>

                            {this.props.friendIds.map(id =>
                                <div className="name-field" key={id}>
                                    {expense.splitterIds.includes(id) ? (<input type="checkbox" checked onChange={this.updateList()} value={id} />) : (<input type="checkbox" onChange={this.updateList()} value={id} />)}


                                    {/* <input type="checkbox" onChange={this.updateList()} value={id} /> */}
                                    {this.props.users[id].name} <br />
                                </div>)
                            }
                        </label>
                    </div>

                    <div className="exp-des-am">
                        <div>
                            <span style={{ 'fontSize': '70px' }}>&#128221;</span>
                        </div>
                        <div>
                            <label><input className="main-input-exp" type="text" value={description} placeholder="Enter a description" onChange={this.update("description")} /></label>
                            <label style={{ 'fontSize': '18px' }}>$<input className="main-input-exp" type="number" placeholder="0.00" min="0.00" step=".01" value={amount} onChange={this.update('amount')} /></label>
                        </div>
                    </div>

                    <div className="exp-pd-by">
                        <h3>Paid by
                            <select onChange={this.updatePayer()} className="exp-str">
                                {this.state.splitters.map((splitterId =>
                                payerId === splitterId ? 
                                    <option value={splitterId} key={splitterId} selected>{splitterId === this.props.currentUser.id ? 'you' : this.props.users[splitterId].name}</option> : 
                                    <option value={splitterId} key={splitterId}>{splitterId === this.props.currentUser.id ? 'you' : this.props.users[splitterId].name}</option>
                                ))}
                            </select> 
                            and split <strong className="exp-str">equally</strong>.</h3>
                            {this.state.amount ? <span>(${parseFloat(this.state.amount / this.state.splitters.length).toFixed(2)}/person)</span> : null}

                    </div>

                    <div className="exp-date">
                        <input type="date" value={date} onChange={this.update('date')} />
                    </div>

                    <div className="exp-frm-btm">
                        <button id="add-exp-btn1" onClick={this.props.closeModal}>Cancel</button>
                        <button id="add-exp-btn2">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(EditExpenseForm);