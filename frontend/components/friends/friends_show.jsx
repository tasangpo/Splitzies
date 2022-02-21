import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../../actions/user_actions";
import { fetchExpenses } from "../../actions/expense_actions";
import { addFriendAction, removeFriendAction } from "../../actions/friendship_actions";
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
    fetchExpenses: () => dispatch(fetchExpenses()),
    addFriendAction: friendEmail => dispatch(addFriendAction(friendEmail))

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
        const relatedExpenses = this.props.expenses.filter(expense => (expense.payer_id === friend.id && expense.splitterIds.includes(this.props.currentUser.id)) || (expense.payer_id === this.props.currentUser.id && expense.splitterIds.includes(friend.id)))

        
        let relativeBalance = 0;
        for (const expense of relatedExpenses) {
            const split = expense.amount / expense.splitterIds.length
            if (expense.payer_id === this.props.currentUser.id) {
                relativeBalance += split
            } else {
                relativeBalance -= split
            }
        };

        relativeBalance = relativeBalance.toFixed(2);

        const balanceDiv = relativeBalance >= 0 ? 
            <div className="bal-rel-div"><span id="you-owe-me-money">{friend.name} owes you ${relativeBalance}</span></div> : 
            <div className="bal-rel-div"><span id="i-owe-you-money">You owe {friend.name} ${(relativeBalance * -1).toFixed(2)}</span></div>;

        const addOrRemoveButton = this.props.currentUser.friendIds.includes(friend.id) ? 
            // <NavLink to="/dashboard" style={{ 'textDecoration': 'none', 'color': 'white' }}><button id="frd-show-btn2" onClick={() => this.props.removeFriendAction(friend.id)}>Remove friend</button></NavLink> :
            <button id="frd-show-btn2" onClick={() => this.props.removeFriendAction(friend.id)}>Remove friend</button>:

            <button id="frd-show-btn2" onClick={() => this.props.addFriendAction({email: friend.email})}>Add friend</button> 


                return (
            <div>
                <section className="frd-hd-show">
                    <h1> &#129503; {friend ? friend.name : ''}</h1>
                    <div className="frd-show-btns">   
                        <button id="frd-show-btn1" onClick={() => this.props.openModal('addExpense')} >Add an expense</button>
                        {/* <NavLink to="/dashboard" style={{ 'textDecoration': 'none', 'color': 'white' }}><button id="frd-show-btn2" onClick={() => this.props.removeFriendAction(friend.id)}>Remove friend</button></NavLink> */}
                        {addOrRemoveButton}
                    </div>
                </section>
                <section>
                    {balanceDiv}
                    {relatedExpenses.map(expense => <ExpenseFriendShow key={expense.id} expense={expense} />)}
                </section>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(FriendsShow)