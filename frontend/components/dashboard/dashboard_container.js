import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from "../../actions/modal_actions"
import { fetchExpenses } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        expenses: Object.values(state.entities.expenses)
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    fetchExpenses: () => dispatch(fetchExpenses()),
    fetchUsers: () => dispatch(fetchUsers())
});

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchExpenses();
    }

    render() {
        if (Object.keys(this.props.users).length < 2) {
            return null
        }

        const expenseIds = this.props.currentUser.expenseIds; // id of expenses where user is involved

        const expenses = this.props.expenses.filter(expense => expenseIds.includes(expense.id)); // getting those needed expenses from all expenses

        // this are the expenses where user is payer so they are owed
        let paidExpenses = expenses.filter(expense => expense.payer_id === this.props.currentUser.id)
        let userOwed = 0;
        for (const expense of paidExpenses ) {
            let splitters = expense.splitterIds.length;
            let owed = expense.amount * (splitters - 1)/(splitters)
            userOwed += owed;
        }

        // these are the expenses where user is not payer so they owe
        let owedExpenses = expenses.filter(expense => expense.payer_id !== this.props.currentUser.id)
        let userOwes = 0;
        for (const expense of owedExpenses) {
            userOwes -= (expense.amount / expense.splitterIds.length)
        }

        let totalBalance = userOwed + userOwes



        return (
            <div className="dash-header">
                <div className="top-dash-head">
                    <h1>Dashboard</h1>
                    <div className="dash-options">
                        <button onClick={() => this.props.openModal('addExpense')} className="dash-opt-btn" id="add-expense-btn">Add an expense</button>
                        &nbsp; &nbsp;
                        <button className="dash-opt-btn" id="settle-btn">Settle up</button>
                    </div>
                </div>
                <div className="header-balances">
                    <div>
                        <h2 className="hd-blnc">total balance</h2>
                        { totalBalance >= 0 ? 
                            <p className="hd-blnc" style={{ color: "#5BC5A7" }}>${totalBalance.toFixed(2)}</p> : 
                            <p className="hd-blnc" style={{ color: "#FF652F" }}>${totalBalance.toFixed(2)}</p>
                        }
                    </div>
                    <div>
                        <h2 className="hd-blnc">you owe</h2>
                        <p className="hd-blnc" style={{ color: "#FF652F" }}>${userOwes.toFixed(2)}</p>
                    </div>
                    <div id="head-blnc-right">
                        <h2 className="hd-blnc" >you are owed</h2>
                        <p className="hd-blnc" style={{ color: "#5BC5A7" }}>${userOwed.toFixed(2)}</p>
                    </div>
                </div>
                <div className="owe-owed">
                    <div id="owe-owed-header">
                        <h2>YOU OWE</h2>
                        <h2>YOU ARE OWED</h2>
                    </div>
                    <div id="owe-btm-cont">
                        <div id="owe-btm-left">
                            {owedExpenses.map(expense => {
                                let name = this.props.users[expense.payer_id].name
                                return (
                                    <div className='dash-box-frd' key={expense.id}> 
                                            <h5 className="frd-name">{name}</h5>
                                            <p className="frd-owe">you owe ${(expense.amount / expense.splitterIds.length).toFixed(2)}</p>           
                                    </div>
                                )
                            } )} 
                        </div>
                        <div>
                           {paidExpenses.map(expense => {
                               const splitterIds = expense.splitterIds.filter(id => id !== this.props.currentUser.id);
                               const splitters = splitterIds.map(id =>
                                <div className='dash-box-frd' key={id}> 
                                    <h5 className="frd-name">{this.props.users[id].name} </h5>
                                    <p className='frd-owed'>owes you ${(expense.amount/(splitterIds.length + 1)).toFixed(2)}</p>
                                </div>)
                               return (
                                splitters
                               )
                           })}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);


{/* <div>
    <h5 className="frd-name">David Suh</h5>
    <p className="frd-owe">you owe $5.00</p>
</div> */}

{/* <div>
    <h5 className="frd-name">John Cigale</h5>
    <p className="frd-owed">owes you $15.00</p>
</div> */}