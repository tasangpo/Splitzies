import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions"
import { createExpense, removeExpenseErrors } from "../../actions/expense_actions";
import { closeModal } from "../../actions/modal_actions";



const mSTP = state => ({
    friendIds: state.entities.users[state.session.id].friendIds,
    users: state.entities.users,
    currentUserId: state.session.id,
    errors: state.errors.expense
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    createExpense: expense => dispatch(createExpense(expense)),
    closeModal: () => dispatch(closeModal()),
    removeExpenseErrors: () => dispatch(removeExpenseErrors())
});


class AddExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            payer_id: this.props.currentUserId,
            description: "",
            amount: "",
            date: "",
            split_option: "equal"
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.createExpense(this.state);
    }

    renderErrors() {
        if (!this.props.errors.length) {
            return null
        }
        return (
            <div className="exp-err">
                <h1>The following errors occured: </h1>
                <ul>
                    {this.props.errors.map((err,idx) => <li className="each-err" key={idx}>{err}</li>)}
                </ul>
            </div>
        )
    }

    render() {
        const { description, amount, date} = this.state;
        return (
            <div className="add-exp-form-container">
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <div className="add-exp-header">
                        <h1> Add an expense</h1>
                    </div>
                   <div className="with-you">
                        <label> With <strong style={{ 'fontWeight': 'bold' }}>you</strong> and: &nbsp;	&nbsp;
                            <select className="name-field" name="friend" id="friend">
                                {this.props.friendIds.map(id => <option value={id} key={id}>{this.props.users[id].name}</option>)}
                            </select>
                        </label>
                   </div>
                    
                    <div className="exp-des-am">
                        <div>
                            <span style={{'fontSize': '70px'}}>&#128221;</span>
                        </div>
                        <div>
                            <label><input className="main-input-exp" type="text" value={description} placeholder="Enter a description" onChange={this.update("description")} /></label>
                            <label style={{'fontSize': '18px'}}>$<input className="main-input-exp" type="number" placeholder="0.00" min="0.00" step=".01" value={amount} onChange={this.update('amount')} /></label>
                        </div>
                    </div>

                    <div className="exp-pd-by">
                        <h3>Paid by <strong className="exp-str">you</strong> and split <strong className="exp-str">equally</strong>.</h3>
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

export default connect(mSTP, mDTP)(AddExpenseForm);