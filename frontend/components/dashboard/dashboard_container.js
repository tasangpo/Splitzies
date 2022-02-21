import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { logout } from '../../actions/session_actions';
import { openModal } from "../../actions/modal_actions"
import { fetchExpenses } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        expenses: Object.values(state.entities.expenses),
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

        // const expenseIds = this.props.currentUser.expenseIds; // id of expenses where user is involved
        // const expenses = this.props.expenses.filter(expense => expenseIds.includes(expense.id)); // getting needed expenses from all expenses
        const expenses = this.props.expenses.filter(expense => expense.splitterIds.includes(this.props.currentUser.id))
        




        // this is all the people who are splitter where you paid (unique id's only)
        // and all the payers where you are splitter
        let peopleId = [] 
        for (let expense of expenses) {
            if (expense.payer_id === this.props.currentUser.id) {
                for (let id of expense.splitterIds) {
                    if (!peopleId.includes(id) && id !== this.props.currentUser.id) {
                        peopleId.push(id)
                    }
                }
            } else if (expense.splitterIds.includes(this.props.currentUser.id) && (!peopleId.includes(expense.payer_id))) {
                peopleId.push(expense.payer_id)
            }
        };

        // peopleId = peopleId.filter(id => this.props.currentUser.friendIds.includes(id));


        // Mapping every id in peopleId to an html element that will either go on left if we owe them or right if they owe us
        const mappedLeft = peopleId.map(id => {
            const friend = this.props.users[id];
            const relatedExpenses = this.props.expenses.filter(expense => (expense.payer_id === friend.id && expense.splitterIds.includes(this.props.currentUser.id)) || (expense.payer_id === this.props.currentUser.id && expense.splitterIds.includes(friend.id)))
            let relativeBlance = 0;
            for (const expense of relatedExpenses) {
                const split = expense.amount / expense.splitterIds.length
                if (expense.payer_id === this.props.currentUser.id) {
                    relativeBlance += split
                } else {
                    relativeBlance -= split
                }
            };
            relativeBlance = relativeBlance.toFixed(2);
            if (relativeBlance < 0) {
                return (
                    <NavLink to={`/friends/${id}`} className='dash-box-frd' key={id}>
                        <h5 className="frd-name">{friend.name}</h5>
                        <p className="frd-owe">you owe <strong style={{'fontWeight' : 'bolder'}}>${(relativeBlance * -1).toFixed(2)}</strong></p>
                    </NavLink>
                )
            } else {
                return null
            }
        })

        const mappedRight = peopleId.map(id => {
            const friend = this.props.users[id];
            const relatedExpenses = this.props.expenses.filter(expense => (expense.payer_id === friend.id && expense.splitterIds.includes(this.props.currentUser.id)) || (expense.payer_id === this.props.currentUser.id && expense.splitterIds.includes(friend.id)))
            let relativeBlance = 0;
            for (const expense of relatedExpenses) {
                const split = expense.amount / expense.splitterIds.length
                if (expense.payer_id === this.props.currentUser.id) {
                    relativeBlance += split
                } else {
                    relativeBlance -= split
                }
            };
            relativeBlance = relativeBlance.toFixed(2);
            if (relativeBlance > 0) {
                return (
                    <NavLink to={`/friends/${id}`} className='dash-box-frd' id="db-right" key={id}>
                        <h5 className='frd-name'>{friend.name}</h5>
                        <p className='frd-owed'>owes you <strong style={{'fontWeight': 'bolder'}}>${relativeBlance}</strong></p>
                    </NavLink>
                )
            }
        })


        

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
        // overall balance
        let totalBalance = userOwed + userOwes

        return (
            <div className="dash-header">
                <div className="top-dash-head">
                    <h1>Dashboard</h1>
                    <div className="dash-options">
                        <button onClick={() => this.props.openModal('addExpense')} className="dash-opt-btn" id="add-expense-btn">Add an expense</button>
                        &nbsp; &nbsp;
                        <button onClick={() => alert("Let's settle up after bootcamp when we land a job!")} className="dash-opt-btn" id="settle-btn">Settle up</button>
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
                        <div className='sep'>
                            {mappedLeft}
                        </div>
                        <div className='sep'>
                            {mappedRight}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);


