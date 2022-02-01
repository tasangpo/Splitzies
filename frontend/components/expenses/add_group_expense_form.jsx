import React from 'react';
import { connect } from 'react-redux';
import { createExpense, removeExpenseErrors, createExpenseSplit } from '../../actions/expense_actions';
import { closeModal } from "../../actions/modal_actions";

const mSTP = state => ({
    errors: state.errors.expense,
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    friendIds: state.entities.users[state.session.id].friendIds,
    groups: state.entities.groups,
    groupId: state.ui.modalId
})

const mDTP = dispatch => ({
    createExpense: expense => dispatch(createExpense(expense)),
    closeModal: () => dispatch(closeModal()),
    removeExpenseErrors: () => dispatch(removeExpenseErrors()),
    createExpenseSplit: payload => dispatch(createExpenseSplit(payload))
})

class AddGroupExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payer_id: this.props.currentUser.id,
            description: "",
            amount: "",
            date: "",
            split_option: "equal",
            splitters: this.props.groups[this.props.groupId].memberIds,
            group_id: this.props.groupId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.props.removeExpenseErrors();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    updatePayer() {
        return e => this.setState({ payer_id: parseInt(e.currentTarget.value) })
    }

    handleSubmit(e) {
        e.preventDefault();
        const expensePayload = {payer_id: this.state.payer_id, description: this.state.description, amount: this.state.amount, date: this.state.date, split_option: this.state.split_option, group_id: this.state.group_id};
        this.props.createExpense(expensePayload).then(expense => {
            for (const splitterId of this.state.splitters) {
                if (splitterId !== this.state.payer_id) {
                    this.props.createExpenseSplit({ expense_id: expense.id, user_id: splitterId })
                }

            }
            this.props.createExpenseSplit({ expense_id: expense.id, user_id: this.state.payer_id })
        }).then(() => {
            if (!this.props.errors.length) {
                this.props.closeModal()
            }
        })

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
        const { groups, groupId } = this.props;
        const group = groups[groupId];
        if (Object.keys(this.props.users).length < 2) {
            return null
        }
        return (
            <div className="add-exp-form-container">
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <div className="add-exp-header">
                        <h1> Add group expense</h1>
                    </div>
                    <div className="with-you">
                        <label id="name-label"> With <strong style={{ 'fontWeight': 'bold' }}>you</strong> and: &nbsp;	&nbsp; &#128101; {group.name}
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
                                <option value={this.props.currentUser.id}>you</option>
                                {this.state.splitters.filter(id => id !== this.props.currentUser.id).map((splitterId =>
                                    <option value={splitterId} key={splitterId}>{this.props.users[splitterId].name}</option>
                                ))}
                            </select> and split <strong className="exp-str" style={{ color: 'black' }}>equally</strong>.</h3>
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


};



export default connect(mSTP, mDTP)(AddGroupExpenseForm);