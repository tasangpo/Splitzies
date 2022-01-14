import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../../actions/user_actions";
import { fetchExpenses } from "../../actions/expense_actions";
import { removeFriendAction } from "../../actions/friendship_actions";
import { openModal } from "../../actions/modal_actions"
import ExpenseFriendShow from "../expenses/expense_friend_show";


const mSTP = state => {
    return ({
        users: state.entities.users,
        expenses: Object.values(state.entities.expenses),
        currentUser: state.entities.users[state.session.id]
    })
}

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    removeFriendAction: friendId => dispatch(removeFriendAction(friendId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchExpenses: () => dispatch(fetchExpenses())

});

class FriendsShow extends React.Component {
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

        const friend = this.props.users[this.props.match.params.friendId]
        // const relatedExpenses = this.props.expenses.filter(expense => expense.splitterIds.includes(friend.id) && expense.splitterIds.includes(this.props.currentUser.id))
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

        const balanceDiv = relativeBlance >= 0 ? 
            <div className="bal-rel-div"><span id="you-owe-me-money">{friend.name} owes you ${relativeBlance}</span></div> : 
            <div className="bal-rel-div"><span id="i-owe-you-money">You owe {friend.name} ${(relativeBlance * -1).toFixed(2)}</span></div>;
        
        return (
            <div>
                <section className="frd-hd-show">
                    <h1> &#129503; {friend ? friend.name : ''}</h1>
                    <div className="frd-show-btns">   
                        <button id="frd-show-btn1" onClick={() => this.props.openModal('addExpense')} >Add an expense</button>
                        <button id="frd-show-btn2" onClick={() => this.props.removeFriendAction(friend.id)}><NavLink to="/dashboard" style={{'textDecoration':'none', 'color':'white'}}>Remove friend</NavLink></button>
                    </div>
                </section>
                <section>
                    {balanceDiv}
                    {relatedExpenses.map(expense => <ExpenseFriendShow expense={expense} />)}
                </section>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(FriendsShow)